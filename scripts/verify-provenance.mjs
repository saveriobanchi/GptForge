// Reproduce the upstream pixel comparison. Download the five sourceDownloads
// from ASSET_MANIFEST.json into the supplied directory; no network is used here.
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import {PNG} from 'pngjs';
import {auditAssets,sha256} from './audit-assets.mjs';
auditAssets();
const m=JSON.parse(readFileSync('ASSET_MANIFEST.json'));
const dir=process.argv[2];if(!dir)throw new Error('Usage: node scripts/verify-provenance.mjs <directory-of-creator-zips>');
const upstream=new Map();
function pngBytes(bytes){let end=8;while(end+12<=bytes.length){const length=bytes.readUInt32BE(end),type=bytes.toString('ascii',end+4,end+8);end+=length+12;if(type==='IEND')return bytes.subarray(0,end);}throw new Error('Missing PNG IEND');}
for(const d of m.sourceDownloads){const path=resolve(dir,d.path);if(sha256(readFileSync(path))!==d.sha256)throw new Error('Creator archive hash differs: '+d.path);
 const result=spawnSync('python3',['-c',`import zipfile,json,base64,sys
with zipfile.ZipFile(sys.argv[1]) as z:
 for p in z.namelist():
  if p.lower().endswith('.png'): print(json.dumps([p,base64.b64encode(z.read(p)).decode()]))`,path],{encoding:'utf8',maxBuffer:128*1024*1024});
 if(result.status!==0)throw new Error(result.stderr);
 for(const line of result.stdout.trim().split('\n')){if(!line)continue;const [member,b64]=JSON.parse(line);let png;try{png=PNG.sync.read(pngBytes(Buffer.from(b64,'base64')));}catch(e){throw new Error(d.path+':'+member+': '+e.message);}const dimensions=Buffer.alloc(8);dimensions.writeUInt32BE(png.width,0);dimensions.writeUInt32BE(png.height,4);for(let i=0;i<png.data.length;i+=4)if(!png.data[i+3])png.data.fill(0,i,i+3);upstream.set(d.path+'\0'+member,sha256(Buffer.concat([dimensions,png.data])));}
}
let count=0;for(const e of m.textures){if(!e.pixelSha256)continue;if(!e.upstream.some(u=>upstream.get(u.archive+'\0'+u.member)===e.pixelSha256))throw new Error('No official pixel match for '+e.path);count++;}
console.log(`${count} texture PNGs match their creators' official archives; all five archive hashes verified.`);
