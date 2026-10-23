import {BIOMES,BUILD,TECH,RECIPES,REGION_SIZE as N,DISCOVERY_NAMES,RES} from './data.js';
export const VERSION=2;
export function hash(a,b,c=0){let x=(Math.imul(a|0,374761393)+Math.imul(b|0,668265263)+Math.imul(c|0,1274126177))|0;x=Math.imul(x^(x>>>13),1274126177);return ((x^(x>>>16))>>>0)/4294967296;}
export const clone=x=>JSON.parse(JSON.stringify(x));
export function generate(seed){
 const regions=BIOMES.map((b,id)=>({id,x:b.pos[0]*N,y:b.pos[1]*N,unlocked:id===0,surveyed:id===0,survey:0,restored:false,visited:false,landmarkClaimed:false}));
 const tiles=[];let uid=0;
 for(const r of regions)for(let y=0;y<N;y++)for(let x=0;x<N;x++){
  const wx=r.x+x,wy=r.y+y,h=hash(wx,wy,seed),road=Math.abs(x-7)<=0||Math.abs(y-7)<=0;
  const water=(r.id===3&&(Math.sin(y*.6)*2+3>x))||(r.id===6&&h>.84)||(r.id===0&&x>9&&y<5&&h>.25);
  const center=x>=5&&x<=9&&y>=5&&y<=9;
  const kind=center||road?'empty':water?'water':h>.83?'ore':h>.60?'tree':h>.45?'herb':'empty';
  const resource=kind==='tree'?(r.id===0||r.id===2||r.id===5?'wood':BIOMES[r.id].resources[0]):kind==='herb'?(r.id===0?'fiber':BIOMES[r.id].resources[2]):BIOMES[r.id].resources[1];
  tiles.push({id:uid++,x:wx,y:wy,r:r.id,v:Math.floor(hash(wx,wy,seed+2)*3),kind,resource,stock:3,regen:0,z:r.id===4?(x<4||y<3?18:0):r.id===9&&h>.9?8:0});
 }
 const discoveries=[];
 for(const r of regions){
  for(let sector=0;sector<4;sector++){
   const roll=hash(seed,r.id,sector+19);let rarity=roll<.02?'extraordinary':roll<.10?'rare':roll<.32?'uncommon':'minor';
   if(r.id===4||r.id===8)if(sector===0)rarity='rare';if(r.id===10&&sector===0)rarity='extraordinary';
   const lx=sector%2?10:3,ly=sector<2?3:10;
   const t=tiles.find(t=>t.r===r.id&&t.x===r.x+lx&&t.y===r.y+ly);t.kind='discovery';t.discovery=discoveries.length;t.z=0;
   discoveries.push({id:discoveries.length,r:r.id,tile:t.id,rarity,name:DISCOVERY_NAMES[rarity][Math.floor(hash(seed,r.id,sector+40)*DISCOVERY_NAMES[rarity].length)],claimed:false});
  }
  const t=tiles.find(t=>t.r===r.id&&t.x===r.x+7&&t.y===r.y+5);t.kind='landmark';t.z=0;
  // Guaranteed renewable resources remove generation and rarity from the critical path.
  for(let i=0;i<3;i++){let t=tiles.find(t=>t.r===r.id&&t.x===r.x+4+i*2&&t.y===r.y+10);t.kind=i===0?'tree':i===1?'ore':'herb';t.resource=BIOMES[r.id].resources[i];t.stock=5;}
 }
 return {regions,tiles,discoveries};
}
export function newGame(seed=20261023){
 const w=generate(Number(seed)>>>0);return {version:VERSION,seed:Number(seed)>>>0,time:90,inventory:{wood:14,stone:10,fiber:8,knowledge:4},tech:[],research:null,crafts:[],expedition:null,...w,buildings:[{id:1,type:'outpost',r:0,x:7,y:8,level:1,progress:0,enabled:true}],nextId:2,events:[],stats:{gathered:0,crafted:0,built:1,unlocked:1},completed:false,settings:{sound:true,music:true,reducedMotion:false,quality:'high'},camera:{x:0,y:210,zoom:1.35},savedAt:Date.now()};
}
export const adjacent=(a,b)=>Math.abs(a.x-b.x)+Math.abs(a.y-b.y)===N;
export const frontier=(s,id)=>!s.regions[id].unlocked&&s.regions.some(r=>r.unlocked&&adjacent(r,s.regions[id]));
export const canAfford=(s,cost={})=>Object.entries(cost).every(([k,v])=>Number.isFinite(v)&&v>=0&&(s.inventory[k]||0)>=v);
export function add(s,items,m=1){for(const[k,v]of Object.entries(items))s.inventory[k]=Math.max(0,(s.inventory[k]||0)+v*m);}
export function pay(s,cost){if(!canAfford(s,cost))return false;add(s,cost,-1);return true;}
export function log(s,title,detail=''){s.events.unshift({time:s.time,title,detail});s.events.length=Math.min(70,s.events.length);}
const has=(s,t)=>!t||s.tech.includes(t);
export function gather(s,tileId){const t=s.tiles[tileId];if(!t||!s.regions[t.r].unlocked||!['tree','ore','herb'].includes(t.kind)||t.stock<1)return {ok:false,message:'This resource is resting. It will replenish.'};
 let amount=(has(s,'tools')?2:1)*(t.kind==='tree'?3:2);if(t.r===7&&night(s))amount*=2;if(t.r===3&&t.resource==='salt'&&!highTide(s))amount*=2;
 t.stock--;t.regen=0;add(s,{[t.resource]:amount});s.stats.gathered+=amount;return{ok:true,items:{[t.resource]:amount},message:`+${amount} ${RES[t.resource][0]}`};}
export function craft(s,id,count=1){const r=RECIPES[id];if(!r||!has(s,r.tech)||!Number.isInteger(count)||count<1||count>20||s.crafts.length>=20)return false;const cost=Object.fromEntries(Object.entries(r.in).map(([k,v])=>[k,v*count]));if(!pay(s,cost))return false;s.crafts.push({id,count,progress:0});return true;}
export function cancelCraft(s,index){const c=s.crafts[index];if(!c)return false;add(s,RECIPES[c.id].in,c.count);s.crafts.splice(index,1);return true;}
export function research(s,id){const t=TECH[id];if(!t||s.research||has(s,id)||!(t.needs||[]).every(x=>has(s,x))||t.final&&!s.completed||!pay(s,t.in))return false;s.research={id,progress:0};return true;}
export function survey(s,id){if(!has(s,'survey')||!frontier(s,id)||s.regions[id].surveyed||s.regions[id].survey>0||!pay(s,{wood:4,fiber:2}))return false;s.regions[id].survey=.01;return true;}
export function unlock(s,id){const r=s.regions[id],b=BIOMES[id];if(!r||!frontier(s,id)||!r.surveyed||s.expedition||!has(s,b.gate)||!pay(s,b.cost))return false;s.expedition={id,progress:0};return true;}
export function place(s,type,tileId){const d=BUILD[type],t=s.tiles[tileId];if(!d||!t||!s.regions[t.r].unlocked||t.kind!=='empty'||!has(s,d.tech)||d.region!==undefined&&d.region!==t.r||s.buildings.some(b=>b.x===t.x&&b.y===t.y)||type!=='outpost'&&!s.buildings.some(b=>b.r===t.r&&b.type==='outpost')||type==='outpost'&&s.buildings.some(b=>b.r===t.r&&b.type==='outpost')||!pay(s,d.in))return false;
 s.buildings.push({id:s.nextId++,type,r:t.r,x:t.x,y:t.y,level:1,progress:0,enabled:true,target:BIOMES[t.r].resources[0],recipe:d.recipe});s.stats.built++;log(s,d.name+' constructed',BIOMES[t.r].name);return true;}
export const upgradeCost=b=>Object.fromEntries(Object.entries(BUILD[b.type].in).map(([k,v])=>[k,Math.ceil(v*(.65+b.level*.45))]));
export function upgrade(s,id){const b=s.buildings.find(b=>b.id===id);if(!b||b.level>=4||!pay(s,upgradeCost(b)))return false;b.level++;log(s,BUILD[b.type].name+' upgraded','Level '+b.level);return true;}
export function remove(s,id){const b=s.buildings.find(b=>b.id===id);if(!b||b.type==='outpost'&&s.buildings.some(x=>x.r===b.r&&x.type!=='outpost'))return false;add(s,Object.fromEntries(Object.entries(BUILD[b.type].in).map(([k,v])=>[k,Math.floor(v*.6)])));s.buildings=s.buildings.filter(x=>x.id!==id);return true;}
export function claim(s,id){const d=s.discoveries[id];if(!d||d.claimed||!s.regions[d.r].unlocked)return false;d.claimed=true;const n={minor:1,uncommon:2,rare:4,extraordinary:8}[d.rarity];const items={knowledge:n*3,relic:n,[BIOMES[d.r].resources[0]]:n*4};add(s,items);log(s,d.name,d.rarity+' discovery · '+n+' ancient fragments');return items;}
export function landmark(s,id){const r=s.regions[id];if(!r?.unlocked||r.landmarkClaimed)return false;r.landmarkClaimed=true;add(s,BIOMES[id].reward);log(s,BIOMES[id].landmark,BIOMES[id].story);return true;}
export function restore(s,id){const r=s.regions[id];if(!r?.unlocked||!r.landmarkClaimed||r.restored||!has(s,'aether')||!pay(s,{charge:3,gear:2}))return false;r.restored=true;add(s,{knowledge:12});log(s,'A light on the horizon',BIOMES[id].landmark+' restored');return true;}
export function finish(s){if(s.completed||!s.regions.every(r=>r.restored)||!pay(s,{charge:10,pearl:12,lens:6}))return false;s.completed=true;log(s,'The Horizon Array awakens','The veil was a shelter. Beyond it, a living world.');return true;}
export const night=s=>s.time%360>210||s.time%360<45;
export const highTide=s=>Math.sin(s.time/35)>0;
export const weather=s=>Math.floor(s.time/100)%4===1?'Rain':Math.floor(s.time/100)%4===2?'Wind':'Clear';
export function power(s){let supply=3,demand=0;for(const b of s.buildings){if(!b.enabled)continue;const d=BUILD[b.type];supply+=(d.power||0)*(1+(b.level-1)*.5)*(b.type==='windmill'&&b.r===1?2:1)*(b.type==='windmill'&&weather(s)==='Wind'?1.4:1);demand+=(d.usePower||0)*(b.r===4?1.5:1);}return{supply,demand,ratio:Math.min(1,supply/Math.max(1,demand))};}
export function tick(s,dt){
 if(!Number.isFinite(dt)||dt<=0)return;s.time+=dt;
 for(const t of s.tiles){if(t.stock<5){t.regen+=dt;if(t.regen>=12){t.stock++;t.regen=0;}}}
 for(const r of s.regions)if(r.survey>0&&!r.surveyed){r.survey+=dt;if(r.survey>=10){r.surveyed=true;r.survey=0;add(s,{knowledge:3});log(s,'A frontier charted',BIOMES[r.id].name+' · '+BIOMES[r.id].sub);}}
 if(s.expedition){const e=s.expedition;e.progress+=dt;if(e.progress>=14){s.regions[e.id].unlocked=true;s.regions[e.id].visited=true;s.stats.unlocked++;add(s,{knowledge:5});log(s,'The veil recedes',BIOMES[e.id].name);s.expedition=null;}}
 if(s.research){let r=s.research;r.progress+=dt;if(r.progress>=TECH[r.id].time){s.tech.push(r.id);log(s,'Research complete',TECH[r.id].name);s.research=null;}}
 if(s.crafts.length){let c=s.crafts[0];c.progress+=dt;if(c.progress>=RECIPES[c.id].time*c.count){add(s,RECIPES[c.id].out,c.count);s.stats.crafted+=c.count;log(s,'Crafting complete',RECIPES[c.id].name+' ×'+c.count);s.crafts.shift();}}
 const p=power(s);
 for(const b of s.buildings){const d=BUILD[b.type];if(!b.enabled||!d.time||!s.buildings.some(o=>o.r===b.r&&o.type==='outpost')){b.status=!b.enabled?'Paused':'Connected';continue;}
  let rate=1+(b.level-1)*.5;if(d.usePower)rate*=p.ratio;
  if(b.r===5&&!s.buildings.some(o=>o.r===5&&o.type==='hearth'))rate*=.35;
  if(b.r===8)rate*=1+Math.min(1,(s.buildings.filter(o=>o.r===8&&o.type==='vat').length-1)*.2);
  if(has(s,'logistics'))rate*=1.35;if(has(s,'mastery'))rate*=1.5;
  let input=d.input||{},output=d.produce||{};
  if(b.recipe){const r=RECIPES[b.recipe];input=r.in;output=r.out;}
  if(d.extract)output={[b.target]:2};
  if(b.type==='sawmill'&&b.r===2)output={plank:6};if(b.type==='farm'&&b.r===1)output={food:6};
  if(b.type==='foundry'&&b.r===9&&s.buildings.some(o=>o.r===9&&o.type==='cooler'))rate*=2;
  if(b.type==='tidepump'&&highTide(s))rate*=2;if(b.r===6&&weather(s)==='Rain')rate*=1.5;
  if(b.type==='starnet'&&night(s))output={night:3};if(b.type==='observatory'&&b.r===10)output={knowledge:8};
  if(!canAfford(s,input)){b.status='Awaiting inputs';continue;}b.status=p.ratio<1&&d.usePower?'Low power':'Working';
  b.progress+=dt*rate;
  if(b.progress>=d.time){b.progress%=d.time;if(pay(s,input))add(s,output);}
 }
}
export function simulate(s,seconds){for(let t=0;t<seconds;t++)tick(s,Math.min(1,seconds-t));return s;}
export function encode(s){const payload=JSON.stringify({...s,savedAt:Date.now()});let sum=2166136261;for(let i=0;i<payload.length;i++)sum=Math.imul(sum^payload.charCodeAt(i),16777619);return JSON.stringify({format:'aetherforge-horizon',checksum:sum>>>0,payload});}
export function decode(text){
 const e=JSON.parse(text);if(e.format!=='aetherforge-horizon'||typeof e.payload!=='string')throw Error('This is not a White Horizon save.');let sum=2166136261;for(let i=0;i<e.payload.length;i++)sum=Math.imul(sum^e.payload.charCodeAt(i),16777619);if((sum>>>0)!==e.checksum)throw Error('Save checksum mismatch.');
 const s=JSON.parse(e.payload);if(s.version===1){s.version=VERSION;s.settings={sound:true,music:true,reducedMotion:false,quality:'high',...s.settings};s.completed=!!s.completed;}if(s.version!==VERSION)throw Error('Unsupported save version '+s.version);if(!Number.isInteger(s.seed)||!Number.isFinite(s.time)||s.time<0)throw Error('Invalid world.');
 const base=newGame(s.seed);if(!s.inventory||Object.entries(s.inventory).some(([k,v])=>!RES[k]||!Number.isFinite(v)||v<0))throw Error('Invalid inventory.');
 if(!Array.isArray(s.regions)||s.regions.length!==12||!s.regions[0].unlocked||!Array.isArray(s.tiles)||s.tiles.length!==base.tiles.length||!Array.isArray(s.discoveries)||s.discoveries.length!==base.discoveries.length)throw Error('Incomplete world data.');
 if(!Array.isArray(s.tech)||s.tech.some(t=>!TECH[t])||new Set(s.tech).size!==s.tech.length)throw Error('Invalid research.');
 if(!Array.isArray(s.buildings)||s.buildings.some(b=>!BUILD[b.type]||!Number.isInteger(b.level)||b.level<1||b.level>4||!s.regions[b.r]?.unlocked||!Number.isFinite(b.progress)||b.progress<0||!base.tiles.some(t=>t.x===b.x&&t.y===b.y&&t.r===b.r)))throw Error('Invalid buildings.');
 if(s.buildings.some(b=>BUILD[b.type].extract&&!BIOMES[b.r].resources.includes(b.target)||b.type==='foundry'&&!['copperbar','ironbar'].includes(b.recipe)))throw Error('Invalid production target.');
 if(new Set(s.buildings.map(b=>`${b.x}:${b.y}`)).size!==s.buildings.length)throw Error('Overlapping buildings.');
 if(!Array.isArray(s.crafts)||s.crafts.some(c=>!RECIPES[c.id]||!Number.isInteger(c.count)||c.count<1||c.count>20||!Number.isFinite(c.progress)||c.progress<0))throw Error('Invalid crafting queue.');
 if(s.research&&(!TECH[s.research.id]||!Number.isFinite(s.research.progress)||s.research.progress<0))throw Error('Invalid research progress.');
 if(s.expedition&&(!s.regions[s.expedition.id]||!Number.isFinite(s.expedition.progress)||s.expedition.progress<0))throw Error('Invalid expedition.');
 // Reconstruct immutable geography from the seed; only persistent mutable fields are restored.
 s.tiles=base.tiles.map((t,i)=>({...t,stock:Math.max(0,Math.min(5,Number(s.tiles[i].stock)||0)),regen:Math.max(0,Math.min(12,Number(s.tiles[i].regen)||0))}));
 s.discoveries=base.discoveries.map((d,i)=>({...d,claimed:!!s.discoveries[i].claimed}));
 s.regions=base.regions.map((r,i)=>({...r,...Object.fromEntries(['unlocked','surveyed','restored','visited','landmarkClaimed'].map(k=>[k,!!s.regions[i][k]])),survey:Math.max(0,Math.min(10,Number(s.regions[i].survey)||0))}));
 s.settings={...base.settings,...s.settings};s.events=Array.isArray(s.events)?s.events.slice(0,70):[];return s;
}
