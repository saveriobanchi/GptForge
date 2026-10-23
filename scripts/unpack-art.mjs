import {existsSync} from 'node:fs';import {execFileSync} from 'node:child_process';
if(!existsSync('art/cc0'))execFileSync('tar',['-xzf','art/cc0-source.tar.gz','-C','art'],{stdio:'inherit'});
