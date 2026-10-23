import {encode,decode,simulate} from './sim.js';
const KEY='aetherforge.white-horizon.v2';
export class SaveStore{
 async open(){this.db=await new Promise(resolve=>{try{const r=indexedDB.open('aetherforge-white-horizon',1);r.onupgradeneeded=()=>r.result.createObjectStore('worlds');r.onsuccess=()=>resolve(r.result);r.onerror=()=>resolve(null);}catch{resolve(null);}});}
 async read(slot='current'){
  const candidates=[];
  if(this.db){try{candidates.push(await new Promise((resolve,reject)=>{const r=this.db.transaction('worlds').objectStore('worlds').get(slot);r.onsuccess=()=>resolve(r.result||null);r.onerror=reject;}));}catch{}}
  try{candidates.push(localStorage.getItem(KEY+'.'+slot));}catch{}
  let best=null,time=-1;for(const t of candidates){if(!t)continue;try{const state=decode(t);if(state.savedAt>time){time=state.savedAt;best=t;}}catch{}}
  return best;
 }
 async write(text,slot='current'){if(this.db){await new Promise((resolve,reject)=>{const tx=this.db.transaction('worlds','readwrite');tx.objectStore('worlds').put(text,slot);tx.oncomplete=resolve;tx.onerror=reject;});}else{localStorage.setItem(KEY+'.'+slot,text);}}
 async save(s){const text=encode(s);decode(text);const old=await this.read();if(old){try{decode(old);await this.write(old,'backup');}catch{}}await this.write(text);return text;}
 async load(){for(const slot of ['current','backup']){const t=await this.read(slot);if(!t)continue;try{const s=decode(t);const away=Math.max(0,Math.floor((Date.now()-s.savedAt)/1000));const cap=300+s.buildings.filter(b=>b.type==='warehouse').length*1800;const seconds=Math.min(away,cap,14400);if(seconds>20)simulate(s,seconds*.5);return {state:s,away:seconds,recovered:slot==='backup'};}catch{}}return null;}
}
