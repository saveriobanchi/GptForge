import {cpSync,mkdirSync,rmSync} from 'node:fs';
import {build} from 'esbuild';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist',{recursive:true});
cpSync('public','dist',{recursive:true});
await build({entryPoints:['src/main.js'],bundle:true,format:'esm',outfile:'dist/game.js',minify:true,sourcemap:true,target:['safari16','chrome110']});
cpSync('index.html','dist/index.html');cpSync('src/style.css','dist/style.css');
console.log('Production browser build ready in dist/');
