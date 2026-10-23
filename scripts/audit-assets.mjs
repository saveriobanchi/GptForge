import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {resolve,relative,join} from 'node:path';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {pathToFileURL} from 'node:url';

export const sha256=data=>createHash('sha256').update(data).digest('hex');
const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]);
export function auditAssets(root=process.cwd()){
 const read=p=>readFileSync(resolve(root,p));
 const fail=message=>{throw new Error('Asset audit: '+message);};
 const m=JSON.parse(read('ASSET_MANIFEST.json'));
 if(m.schemaVersion!==1||m.status!=='verified')fail('manifest is not a verified version 1 register');
 const check=entry=>{if(!entry.path||!entry.sha256)fail('incomplete file record');if(sha256(read(entry.path))!==entry.sha256)fail('changed or unreviewed file: '+entry.path);};
 for(const e of [...m.fonts,...m.publicMedia,...m.requiredNotices,...m.authoredSources,m.archive])check(e);
 const covered=new Set([...m.fonts,...m.publicMedia].map(e=>e.path));
 for(const f of walk(resolve(root,'public'))){const p=relative(root,f).replaceAll('\\','/');if(/\.(?:png|jpe?g|webp|gif|svg|ico|ttf|otf|woff2?|mp3|wav|ogg|mp4|webm|flac|glb|gltf)$/i.test(f)&&!covered.has(p))fail('unregistered public asset: '+p);}
 const notices=new Set(m.requiredNotices.map(e=>e.path));
 for(const f of walk(resolve(root,'licenses')))if(!notices.has(relative(root,f).replaceAll('\\','/')))fail('unregistered license notice: '+f);
 for(const e of [...m.textures,...m.fonts])if(!e.creator||!e.source?.startsWith('https://')||!e.license||!e.requiredCredit)fail('missing source, creator, license, or credit: '+e.path);
 const textures=new Map(m.textures.map(e=>[e.path,e]));
 if(textures.size!==m.textures.length)fail('duplicate texture paths');
 const seen=new Set(),tar=gunzipSync(read(m.archive.path));
 for(let i=0;i+512<=tar.length;){const h=tar.subarray(i,i+512);if(h.every(b=>b===0))break;const str=(a,b)=>h.subarray(a,b).toString().replace(/\0.*$/s,'');const name=str(0,100),prefix=str(345,500),path=(prefix?prefix+'/':'')+name,size=parseInt(str(124,136).trim()||'0',8),type=h[156];i+=512;
  if(type===48||type===0){const p='art/'+path.replace(/^\.\//,''),e=textures.get(p);if(!e)fail('unregistered archived input: '+p);if(sha256(tar.subarray(i,i+size))!==e.sha256)fail('archived input mismatch: '+p);seen.add(p);}
  else if(type!==53)fail('unsupported archive entry: '+path);
  i+=Math.ceil(size/512)*512;
 }
 if(seen.size!==textures.size)fail('source archive coverage is incomplete');
 if(existsSync(resolve(root,'art/cc0'))){for(const f of walk(resolve(root,'art/cc0'))){const p=relative(root,f).replaceAll('\\','/'),e=textures.get(p);if(!e||sha256(readFileSync(f))!==e.sha256)fail('unreviewed extracted source: '+p);}}
 for(const e of m.textures){if(!e.verified)fail('unverified texture: '+e.path);if(e.pixelSha256&&!e.upstream?.some(u=>m.sourceDownloads.some(d=>d.sha256===u.archiveSha256&&d.url===u.archiveUrl)))fail('missing upstream match: '+e.path);}
 if(sha256(read('package-lock.json'))!==m.packageLockSha256)fail('package lock changed; audit dependencies before updating the register');
 const lock=JSON.parse(read('package-lock.json')),packages=Object.entries(lock.packages).filter(([p])=>p),npm=new Map(m.npm.map(e=>[e.name,e]));
 if(packages.length!==npm.size)fail('npm coverage changed');
 for(const [p,e] of packages){const name=p.split('node_modules/').at(-1),v=npm.get(name);if(!v||v.version!==e.version||v.integrity!==e.integrity||v.tarball!==e.resolved||v.license!==e.license)fail('unreviewed dependency: '+p);}
 const pkg=JSON.parse(read('package.json'));if(Object.keys(pkg.dependencies||{}).length||pkg.version!==lock.packages[''].version)fail('unreviewed runtime dependency or package version mismatch');
 if(sha256(read('requirements-qa.txt'))!==m.requirementsSha256)fail('QA requirements changed');
 const actions=new Map(m.actions.map(e=>[e.name,e.commit]));
 for(const f of walk(resolve(root,'.github/workflows'))){for(const match of readFileSync(f,'utf8').matchAll(/uses:\s*([^\s@]+)@([^\s#]+)/g))if(actions.get(match[1])!==match[2])fail('unreviewed CI action: '+match[0]);}
 // The shipped game is self-contained. A new external import/URL needs review.
 for(const f of walk(resolve(root,'src')).filter(f=>/\.(?:js|ts|css)$/.test(f))){const code=readFileSync(f,'utf8');if(/(?:import\s*(?:\([^)]*|[^;]*?from\s*)|url\(\s*['"]?)["']?https?:\/\//.test(code))fail('external runtime import or style asset: '+f);}
 const report={auditDate:m.auditDate,sourceFiles:m.textures.length,texturePNGs:m.textures.filter(e=>e.pixelSha256).length,fonts:m.fonts.length,publicMedia:m.publicMedia.length,npmPackages:m.npm.length,qaPackages:m.pythonQA.length,ciActions:m.actions.length};
 return report;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){try{console.log('Asset and dependency audit passed:',JSON.stringify(auditAssets()));}catch(e){console.error(e.message);process.exitCode=1;}}
