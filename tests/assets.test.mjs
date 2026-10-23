import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,cpSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {auditAssets} from '../scripts/audit-assets.mjs';

test('audited assets and dependency inventory cover the delivered source',()=>{
 const r=auditAssets();assert.equal(r.sourceFiles,628);assert.equal(r.texturePNGs,627);assert.equal(r.fonts,3);assert.equal(r.npmPackages,28);
});
test('publication gate rejects changed assets, unknown media, dependency changes, and unreviewed actions',()=>{
 const dir=mkdtempSync(join(tmpdir(),'white-horizon-audit-'));
 try{
  for(const p of ['ASSET_MANIFEST.json','package.json','package-lock.json','requirements-qa.txt','public','licenses','src','.github','art'])cpSync(p,join(dir,p),{recursive:true,filter:src=>!src.includes('art/cc0/')&&!src.endsWith('art/cc0')});
  assert.doesNotThrow(()=>auditAssets(dir));
  const changed='public/fonts/VT323.ttf',bytes=readFileSync(join(dir,changed));
  writeFileSync(join(dir,changed),Buffer.from('unverified font'));assert.throws(()=>auditAssets(dir),/changed or unreviewed file/);writeFileSync(join(dir,changed),bytes);
  writeFileSync(join(dir,'public/unknown.svg'),'<svg/>');assert.throws(()=>auditAssets(dir),/unregistered public asset/);rmSync(join(dir,'public/unknown.svg'));
  const lock=readFileSync(join(dir,'package-lock.json'));writeFileSync(join(dir,'package-lock.json'),lock+'\n');assert.throws(()=>auditAssets(dir),/package lock changed/);writeFileSync(join(dir,'package-lock.json'),lock);
  writeFileSync(join(dir,'.github/workflows/unreviewed.yml'),'steps:\n  - uses: unknown/action@main\n');assert.throws(()=>auditAssets(dir),/unreviewed CI action/);
 }finally{rmSync(dir,{recursive:true,force:true});}
});
