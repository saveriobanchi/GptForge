import {BIOMES,REGION_SIZE as N,BUILD} from './data.js';
import {frontier,night,hash} from './sim.js';
export const iso=(x,y)=>({x:(x-y)*32,y:(x+y)*16});
export class WorldView{
 constructor(canvas,state,onTap){this.el=canvas;this.ctx=canvas.getContext('2d',{alpha:false});this.s=state;this.onTap=onTap;this.camera={...state.camera};this.particles=[];this.reveals=new Map();this.hover=null;this.placeType=null;this.selection=null;this.observe=false;this.pointers=new Map();this.w=innerWidth;this.h=innerHeight;this.attach();}
 async load(){this.art=await(await fetch('./art/manifest.json')).json();this.sheets=await Promise.all(Array.from({length:this.art.sheets},(_,i)=>new Promise((resolve,reject)=>{let im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=`./art/sheet${i}.png`;})));}
 setState(s){this.s=s;this.camera={...s.camera};this.reveals.clear();this.selection=null;this.placeType=null;}
 focus(id,zoom){const r=this.s.regions[id],p=iso(r.x+7,r.y+7);this.camera.x=p.x;this.camera.y=p.y-35;if(zoom)this.camera.zoom=zoom;}
 key(type,t=0){const sp=this.art.sprites[type];if(!sp)return null;const v=sp.main,n=sp.variants[v];return `${type}:${v}:${this.s.settings.reducedMotion?0:Math.floor(t*sp.fps)%n}`;}
 draw(key,x,y,scale=1,alpha=1){const r=this.art.rects[key];if(!r)return;const [s,sx,sy,w,h,ax,ay]=r;const c=this.ctx;c.globalAlpha=alpha;c.drawImage(this.sheets[s],sx,sy,w,h,Math.round(x-ax*scale),Math.round(y-ay*scale),w*scale,h*scale);c.globalAlpha=1;}
 sprite(type,x,y,t=0,scale=1,alpha=1){const k=this.key(type,t);if(k)this.draw(k,x,y,scale,alpha);}
 icon(type){let k=this.art.rects['icon:'+type]?'icon:'+type:this.key(type,0);if(!k)return '';const [s,x,y,w,h]=this.art.rects[k];let c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(this.sheets[s],x,y,w,h,0,0,w,h);return c.toDataURL();}
 screen(wx,wy){return {x:(wx-this.camera.x)*this.camera.zoom+this.w/2,y:(wy-this.camera.y)*this.camera.zoom+this.h/2};}
 world(sx,sy){return{x:(sx-this.w/2)/this.camera.zoom+this.camera.x,y:(sy-this.h/2)/this.camera.zoom+this.camera.y};}
 tileAt(sx,sy){const p=this.world(sx,sy);const x=Math.floor((p.x/32+p.y/16)/2),y=Math.floor((p.y/16-p.x/32)/2);return this.s.tiles.find(t=>t.x===x&&t.y===y);}
 hit(sx,sy){
  const p=this.world(sx,sy);
  // Frontiers are deliberately placed on the accessible side of the veil.
  for(const marker of this.markers||[])if(Math.hypot(p.x-marker.x,p.y-marker.y)<30)return{frontier:marker.id};
  const objects=this.pickObjects||[];for(let i=objects.length-1;i>=0;i--){const o=objects[i];if(p.x>o.x-o.w/2&&p.x<o.x+o.w/2&&p.y<o.y+10&&p.y>o.y-o.h)return o;}
  const t=this.tileAt(sx,sy);return t&&this.s.regions[t.r].unlocked?{tile:t.id}:null;
 }
 attach(){const e=this.el;let moved=false,start={x:0,y:0},last={x:0,y:0},pinch=0;
  e.addEventListener('pointerdown',ev=>{if(ev.button&&ev.pointerType==='mouse')return;e.setPointerCapture(ev.pointerId);this.pointers.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});start=last={x:ev.clientX,y:ev.clientY};moved=false;if(this.pointers.size===2){moved=true;const[a,b]=[...this.pointers.values()];pinch=Math.hypot(a.x-b.x,a.y-b.y);}});
  e.addEventListener('pointermove',ev=>{if(!this.pointers.has(ev.pointerId)){this.hover=this.tileAt(ev.clientX,ev.clientY);return;}const prev=this.pointers.get(ev.pointerId);this.pointers.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});if(this.pointers.size>1){moved=true;let[a,b]=[...this.pointers.values()],d=Math.hypot(a.x-b.x,a.y-b.y);this.zoom(d/Math.max(1,pinch),(a.x+b.x)/2,(a.y+b.y)/2);pinch=d;}else{if(Math.hypot(ev.clientX-start.x,ev.clientY-start.y)>7)moved=true;if(moved){this.camera.x-=(ev.clientX-prev.x)/this.camera.zoom;this.camera.y-=(ev.clientY-prev.y)/this.camera.zoom;}}last={x:ev.clientX,y:ev.clientY};});
  const end=ev=>{if(!this.pointers.has(ev.pointerId))return;this.pointers.delete(ev.pointerId);if(ev.type!=='pointercancel'&&!moved&&!this.pointers.size){if(this.placeType){const t=this.tileAt(ev.clientX,ev.clientY);this.onTap(t?{tile:t.id}:null);}else this.onTap(this.hit(ev.clientX,ev.clientY));}if(this.pointers.size)moved=true;};e.addEventListener('pointerup',end);e.addEventListener('pointercancel',end);
  e.addEventListener('wheel',ev=>{ev.preventDefault();this.zoom(Math.exp(-ev.deltaY*.001),ev.clientX,ev.clientY);},{passive:false});
 }
 zoom(f,x=this.w/2,y=this.h/2){const p=this.world(x,y);this.camera.zoom=Math.max(.27,Math.min(2.6,this.camera.zoom*f));this.camera.x=p.x-(x-this.w/2)/this.camera.zoom;this.camera.y=p.y-(y-this.h/2)/this.camera.zoom;}
 burst(x,y,color='#eac885',text=''){if(this.s.settings.reducedMotion){this.particles.push({x,y,vx:0,vy:-6,life:1.2,max:1.2,color,text});return;}for(let i=0;i<9;i++)this.particles.push({x,y,vx:(Math.random()-.5)*35,vy:-10-Math.random()*40,life:.8,max:.8,color,text:i===0?text:''});}
 render(dt){if(!this.art)return;const c=this.ctx,s=this.s;this.w=innerWidth;this.h=innerHeight;const dpr=Math.min(devicePixelRatio,s.settings.quality==='low'?1:2);if(this.el.width!==Math.round(this.w*dpr)||this.el.height!==Math.round(this.h*dpr)){this.el.width=Math.round(this.w*dpr);this.el.height=Math.round(this.h*dpr);}c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle='#eaece3';c.fillRect(0,0,this.w,this.h);c.imageSmoothingEnabled=false;
  const z=this.camera.zoom,t=s.settings.reducedMotion?0:s.time;c.translate(this.w/2,this.h/2);c.scale(z,z);c.translate(-this.camera.x,-this.camera.y);
  const visible=(x,y,pad=130)=>{const p=this.screen(x,y);return p.x>-pad*z&&p.x<this.w+pad*z&&p.y>-pad*z&&p.y<this.h+pad*z;};
  // Ivory veil: subtle cartographic contour bands over entirely concealed terrain.
  c.lineWidth=1/z;for(let i=-12;i<20;i++){const yy=i*90; c.beginPath();for(let x=-2400;x<2400;x+=35){const y=yy+Math.sin(x/220+i*.7+t*.025)*17+Math.sin(x/80+i)*4;x===-2400?c.moveTo(x,y):c.lineTo(x,y);}c.strokeStyle=i%3===0?'#d6dcd0':'#e0e3d8';c.stroke();}
  const objects=[];this.pickObjects=[];this.markers=[];
  const unlockedKey=s.regions.map(r=>r.unlocked?1:0).join('');if(this.tileKey!==unlockedKey||this.tileSource!==s.tiles){this.tileKey=unlockedKey;this.tileSource=s.tiles;this.sortedTiles=s.tiles.filter(t=>s.regions[t.r].unlocked).sort((a,b)=>(a.x+a.y)-(b.x+b.y)||a.x-b.x);}const tiles=this.sortedTiles;
  for(const tile of tiles){const p=iso(tile.x+.5,tile.y+.5);p.y-=tile.z;if(!visible(p.x,p.y))continue;let alpha=1;const start=this.reveals.get(tile.r);if(start!==undefined&&!s.settings.reducedMotion){alpha=Math.max(0,Math.min(1,(s.time-start)*.8-(tile.x-s.regions[tile.r].x+tile.y-s.regions[tile.r].y)*.055));}
   const k=tile.kind==='water'?`water:${Math.floor(t*.6+tile.v)%3}`:`land:${tile.r}:${tile.v}`;this.draw(k,p.x,p.y,1,alpha);
   if(tile.z){this.draw(`ore:${tile.r}:0`,p.x,p.y+12,.9,alpha);this.draw(k,p.x,p.y,1,alpha);}
   if(tile.kind==='empty'&&(tile.x-s.regions[tile.r].x===7||tile.y-s.regions[tile.r].y===7))this.sprite('stone_path',p.x,p.y,0,.55,alpha*.6);
   if(tile.kind==='tree')objects.push({tile:tile.id,x:p.x,y:p.y,key:`flora:${tile.r}:${tile.v}`,scale:1,w:72,h:120,alpha});
   else if(tile.kind==='ore')objects.push({tile:tile.id,x:p.x,y:p.y,key:`ore:${tile.r}:${tile.v}`,scale:1,w:45,h:45,alpha});
   else if(tile.kind==='herb')objects.push({tile:tile.id,x:p.x,y:p.y,key:`herb:${tile.r}:${tile.v}`,scale:.9,w:32,h:24,alpha});
   else if(tile.kind==='landmark')objects.push({tile:tile.id,x:p.x,y:p.y,key:`landmark:${tile.r}`,scale:1,w:90,h:150,alpha});
   else if(tile.kind==='discovery'){const d=s.discoveries[tile.discovery];objects.push({tile:tile.id,x:p.x,y:p.y,type:d.rarity==='extraordinary'?'star_arch':d.rarity==='rare'?'monument':d.rarity==='uncommon'?'well':'crate',scale:d.rarity==='minor'?.7:.9,w:65,h:95,alpha:d.claimed?.6:alpha,discovery:d});}
  }
  for(const b of s.buildings){const p=iso(b.x+.5,b.y+.5);if(visible(p.x,p.y))objects.push({building:b.id,x:p.x,y:p.y,type:BUILD[b.type].sprite,scale:.8,w:75,h:130,alpha:1,b});}
  objects.sort((a,b)=>a.y-b.y||a.x-b.x);
  for(const o of objects){if(o.key)this.draw(o.key,o.x,o.y,o.scale,o.alpha);else this.sprite(o.type,o.x,o.y,t,o.scale,o.alpha);this.pickObjects.push(o);
   if(o.tile!==undefined){const tile=s.tiles[o.tile];if(tile.kind==='landmark'){const r=s.regions[tile.r];if(!r.landmarkClaimed||r.restored){c.fillStyle=r.restored?'#99e0c8':'#f4df9b';c.font='bold 15px Georgia';c.textAlign='center';c.fillText(r.restored?'✦':'◇',o.x,o.y-o.h-3);}}if(o.discovery&&!o.discovery.claimed){c.fillStyle=o.discovery.rarity==='extraordinary'?'#d6b5f0':o.discovery.rarity==='rare'?'#ead283':'#faf5d9';c.font='15px Georgia';c.textAlign='center';c.fillText('✧',o.x,o.y-70-(s.settings.reducedMotion?0:Math.sin(t*2+o.x)*3));}}
   if(o.b&&o.b.status==='Working'&&!s.settings.reducedMotion){c.fillStyle='#eacb79';for(let i=0;i<2;i++){let phase=(t*.6+i*.5)%1;c.globalAlpha=(1-phase)*.5;c.fillRect(o.x+7+i*8,o.y-35-phase*20,3,3);}c.globalAlpha=1;}
  }
  if(night(s)){c.globalCompositeOperation='multiply';c.fillStyle='rgba(57,74,106,.18)';for(const r of s.regions.filter(r=>r.unlocked)){const p=iso(r.x+7,r.y+7);this.diamond(p.x,p.y,N*32,N*16,'rgba(57,74,106,.15)',false);}c.globalCompositeOperation='source-over';
   for(const b of s.buildings.filter(b=>['outpost','lantern','hearth','resonator'].includes(b.type))){const p=iso(b.x+.5,b.y+.5);let g=c.createRadialGradient(p.x,p.y-25,0,p.x,p.y-25,65);g.addColorStop(0,'rgba(255,207,109,.28)');g.addColorStop(1,'rgba(255,207,109,0)');c.fillStyle=g;c.fillRect(p.x-65,p.y-90,130,130);}}
  if(!s.settings.reducedMotion&&s.settings.quality!=='low')for(const r of s.regions.filter(r=>r.unlocked)){
   const col=['#f1e3a3','#e7d394','#d39a6a','#eef1d9','#d8e5e3','#ffffff','#8dc8ac','#f4c2d8','#cbb0ef','#f0a55f','#c6d5f3','#c4f4e9'][r.id];
   for(let i=0;i<9;i++){const x=r.x+hash(i,r.id,14)*14,y=r.y+hash(i,r.id,91)*14,p=iso(x,y);if(!visible(p.x,p.y,20))continue;const phase=(t*(r.id===9?.12:.04)+i*.113)%1;c.globalAlpha=Math.sin(phase*Math.PI)*.7;c.fillStyle=col;c.fillRect(p.x+Math.sin(t*.4+i)*8,p.y-(r.id===5?(1-phase):phase)*70,2,2);}
   c.globalAlpha=1;
  }
  // Soft cloud scallops spill from locked land onto the explored frontier.
  for(const r of s.regions.filter(r=>r.unlocked))for(let side=0;side<4;side++){const dx=[1,-1,0,0][side],dy=[0,0,1,-1][side];if(s.regions.some(n=>n.unlocked&&n.x===r.x+dx*N&&n.y===r.y+dy*N))continue;
   for(let i=0;i<N;i++){let x=r.x+(dx===1?N:dx===-1?0:i+.5),y=r.y+(dy===1?N:dy===-1?0:i+.5),p=iso(x,y);if(!visible(p.x,p.y,80))continue;let wave=s.settings.reducedMotion?0:Math.sin(t*.2+i)*2;const cx=p.x+dx*15-dy*15,cy=p.y+dx*8+dy*8+wave;c.save();c.translate(cx,cy);c.scale(1,.46);const mist=c.createRadialGradient(0,0,3,0,0,42);mist.addColorStop(0,'rgba(242,242,231,.94)');mist.addColorStop(.48,'rgba(240,241,229,.7)');mist.addColorStop(1,'rgba(240,241,229,0)');c.fillStyle=mist;c.fillRect(-43,-43,86,86);c.restore();}
  }
  for(const r of s.regions.filter(r=>frontier(s,r.id))){const neighbor=s.regions.find(n=>n.unlocked&&Math.abs(n.x-r.x)+Math.abs(n.y-r.y)===N);const p=iso((r.x+neighbor.x)/2+7,(r.y+neighbor.y)/2+7);p.x+=(neighbor.x-r.x)/N*40;p.y+=(neighbor.y-r.y)/N*20;this.markers.push({x:p.x,y:p.y,id:r.id});this.diamond(p.x,p.y-15,18,25,'#304d4b',true);c.strokeStyle='#d7be7a';c.lineWidth=2;c.stroke();c.fillStyle='#f6e7b6';c.font='19px Georgia';c.textAlign='center';c.fillText(r.surveyed?'✦':'?',p.x,p.y-9);c.font='11px Atkinson, sans-serif';c.fillStyle='#36504c';c.fillText(r.surveyed?BIOMES[r.id].name:'Uncharted frontier',p.x,p.y+26);}
  const selected=this.selection!==null?s.tiles[this.selection]:null;const h=this.placeType?this.hover:selected;
  if(h&&s.regions[h.r].unlocked){const p=iso(h.x+.5,h.y+.5);this.diamond(p.x,p.y-h.z,31,15,this.placeType?(h.kind==='empty'?'rgba(130,220,176,.35)':'rgba(208,116,95,.4)'):'rgba(255,238,180,.16)',true);c.lineWidth=1.5;c.strokeStyle='#f7e1a0';c.stroke();if(this.placeType)this.sprite(BUILD[this.placeType].sprite,p.x,p.y-h.z,t,.8,.55);}
  for(let i=this.particles.length-1;i>=0;i--){const p=this.particles[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.life<=0){this.particles.splice(i,1);continue;}c.globalAlpha=Math.min(1,p.life*2);c.fillStyle=p.color;if(p.text){c.font='bold 15px Atkinson';c.textAlign='center';c.fillText(p.text,p.x,p.y-30);}else c.fillRect(p.x,p.y,3,3);c.globalAlpha=1;}
  c.setTransform(dpr,0,0,dpr,0,0);
 }
 diamond(x,y,w,h,color,center=true){const c=this.ctx;c.beginPath();c.moveTo(x,y-h);c.lineTo(x+w,y);c.lineTo(x,y+h);c.lineTo(x-w,y);c.closePath();c.fillStyle=color;c.fill();}
}
