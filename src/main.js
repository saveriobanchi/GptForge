import {glyph,compassRose,NAV,PANEL_META} from './ui-kit.js';
import {renderCatalog,resourceDialog} from './catalog-ui.js';
import {TITLE,RES,BIOMES,BUILD,TECH,RECIPES,OBJECTIVES,REGION_SIZE as N} from './data.js';
import * as Sim from './sim.js';
import {WorldView,iso} from './render.js';
import {SaveStore} from './storage.js';
import {Sound} from './audio.js';
const root=document.querySelector('#app'),canvas=document.querySelector('#world');
const store=new SaveStore(),sound=new Sound();let s=Sim.newGame(),running=false,panel=null,selectedRegion=0,selectedTile=null,selectedBuilding=null,saved=null,batch=1,toastTimer=0,saveTimer=0,uiTimer=0,paused=false,modal=null,saveBusy=false,interacting=false,selectedResource='wood',techFocus=null,lastRenderedModal=null,lastRenderedPanel=null;
const queries={},filters={craft:'known',build:'known',research:'all',inventory:'all',production:'all',journal:'landmarks'};
document.addEventListener('pointerdown',()=>interacting=true,{capture:true});
document.addEventListener('pointerup',()=>setTimeout(()=>interacting=false,100),{capture:true});
document.addEventListener('pointercancel',()=>interacting=false,{capture:true});
const view=new WorldView(canvas,s,tap);await Promise.all([view.load(),store.open()]);saved=await store.load();
for(const [name,key]of [['frame','panel'],['gold-frame','btnp'],['button-frame','btn'],['slot-frame','slot']])document.documentElement.style.setProperty('--'+name,'url("'+view.icon('uitex:'+key)+'")');
const icons=new Map(),esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=(type,cls='')=>{if(!icons.has(type))icons.set(type,view.icon(type));const url=icons.get(type);return url?`<img class="art-icon ${cls}" src="${url}" alt="">`:`<span class="rune ${cls}">◇</span>`;};
function pinnedResources(){return Array.isArray(s.settings.pinnedResources)?[...new Set(s.settings.pinnedResources)].filter(k=>RES[k]).slice(-5):['wood','stone','fiber','knowledge'];}
const resource=(id,n)=>`<button class="resource" data-action="resource:${id}" aria-label="${esc(RES[id][0])} details">${icon(RES[id][1])}<span><small>${RES[id][0]}</small><b data-count="${id}">${n===undefined?Math.floor(s.inventory[id]||0):n}</b></span></button>`;
const cost=(c,m=1)=>`<div class="cost" aria-label="Required supplies">${Object.entries(c).map(([id,n])=>`<span data-cost="${id}:${n*m}" class="ingredient ${(s.inventory[id]||0)<n*m?'missing':''}">${icon(RES[id][1])}<span class="ingredient-name">${RES[id][0]}</span><strong><b data-owned>${Math.floor(s.inventory[id]||0)}</b><i>/</i>${n*m}</strong></span>`).join('')}</div>`;
const button=(label,action,disabled=false,cls='')=>`<button class="${cls}" data-action="${action}" ${disabled?'disabled':''}>${label}</button>`;
const bar=(a,b,key='')=>`<div class="progress" data-progress="${key}"><i style="width:${Math.min(100,a/b*100)}%"></i></div>`;
function objective(){const u=s.regions.filter(r=>r.unlocked).length;if(s.completed)return ['A world made whole','The Horizon Array is awake. Perfect your industry, restore the old routes, and research The Second Horizon.'];if(!s.tech.includes('survey'))return OBJECTIVES[s.buildings.some(b=>b.type==='surveyor')?1:0];if(!s.regions[2].unlocked)return OBJECTIVES[1];if(!s.buildings.some(b=>b.type==='harvester'))return OBJECTIVES[2];if(!s.regions[3].unlocked)return OBJECTIVES[3];if(!s.regions[4].unlocked||!s.regions[6].unlocked)return OBJECTIVES[4];if(!s.regions[8].unlocked)return OBJECTIVES[5];if(!s.regions[9].unlocked)return OBJECTIVES[6];if(u<12)return OBJECTIVES[7];return OBJECTIVES[8];}
function toast(text,type=''){let el=document.querySelector('#toast');if(!el)return;el.textContent=text;el.className='toast show '+type;clearTimeout(toastTimer);toastTimer=setTimeout(()=>document.querySelector('#toast')?.classList.remove('show'),4200);}
async function save(quiet=false){if(saveBusy)return;saveBusy=true;try{s.camera={...view.camera};await store.save(s);saved={state:Sim.clone(s)};if(!quiet)toast('World saved on this device.');}catch(e){toast('Saving failed. Export your world from Settings.','error');}finally{saveBusy=false;}}
function begin(state,away=0){s=state;view.setState(s);sound.enabled=s.settings.sound;sound.music=s.settings.music;running=true;paused=false;modal=null;panel=null;selectedRegion=0;selectedTile=null;selectedBuilding=null;renderUI();if(away>20)toast(`Welcome back. Your outposts worked for ${Math.floor(away/60)} minutes while you were away.`);save(true);}
function open(p){panel=panel===p?null:p;selectedBuilding=null;selectedTile=null;view.selection=null;renderUI();sound.play();}
function title(kicker,title,desc=''){return `<div class="eyebrow">${kicker}</div><h2>${title}</h2>${desc?`<p class="lede">${desc}</p>`:''}`;}
function catalogContext(){return {s,panel,selectedRegion,batch,query:queries[panel]||'',filter:filters[panel]||'all',pinned:pinnedResources(),objective:objective(),resourceId:selectedResource,icon,cost,button,bar};}
function panelContent(){
 const catalog=renderCatalog(catalogContext());if(catalog!==null)return catalog;
 if(panel==='region')return regionPanel(selectedRegion);
 if(panel==='tile')return tilePanel(selectedTile);
 if(panel==='building')return buildingPanel(selectedBuilding);
 return '';
}
function nextBearing(){
 if(!s.tech.includes('survey'))return !s.buildings.some(b=>b.type==='surveyor')?{panel:'build',label:'Build a survey tower'}:{tech:'survey',label:'Study cartography'};
 if(!s.regions[2].unlocked)return {region:2,label:s.regions[2].surveyed?'Equip the Copperbark expedition':'Survey a new frontier'};
 if(!s.tech.includes('metal'))return {tech:'metal',label:'Discover Copper & Fire'};
 if(!s.buildings.some(b=>b.type==='harvester'))return {panel:'build',label:'Automate your first harvest'};
 for(const [r,tech]of [[3,'bridge'],[4,'climbing'],[6,'wading'],[7,'botany'],[5,'insulation'],[8,'respiration'],[9,'heat'],[10,'astronomy'],[11,'aether']])if(!s.regions[r].unlocked)return s.tech.includes(tech)?{region:r,label:'Chart '+BIOMES[r].name}:{tech,label:TECH[tech].name};
 return {panel:s.completed?'research':'journal',label:s.completed?'Discover the Second Horizon':'Restore the Horizon Array'};
}
function activity(){
 const items=[];if(s.research)items.push({name:TECH[s.research.id].name,kind:'Research',panel:'research',key:'research',icon:'research',progress:s.research.progress,total:TECH[s.research.id].time});
 if(s.expedition)items.push({name:BIOMES[s.expedition.id].name,kind:'Expedition',panel:'atlas',key:'expedition',icon:'compass',progress:s.expedition.progress,total:14});
 if(s.crafts[0]){const c=s.crafts[0];items.push({name:RECIPES[c.id].name+' ×'+c.count,kind:'Workshop',panel:'craft',key:'craft:0',icon:'craft',progress:c.progress,total:RECIPES[c.id].time*c.count});}
 return items.slice(0,2).map(a=>`<button class="activity-item" data-action="open:${a.panel}">${glyph(a.icon,17)}<span><small>${a.kind}</small><b>${a.name}</b></span><em data-countdown="${a.key}">${Math.max(0,Math.ceil(a.total-a.progress))}s</em>${bar(a.progress,a.total,a.key)}</button>`).join('');
}
function regionPanel(id){const r=s.regions[id],b=BIOMES[id],unlocked=r.unlocked;
 if(!unlocked&&!r.surveyed)return title('At the edge of the known','An uncharted frontier','Pale contours stir beyond the survey seal. A short field survey will identify the route and its requirements.')+`<div class="frontier-illustration">◈</div>${r.survey>0?`<p>Survey team in the field…</p>${bar(r.survey,10,'survey:'+id)}`:`<p>Requires The Cartographer’s Craft.</p>${cost({wood:4,fiber:2})}${button('Survey the frontier','survey:'+id,!s.tech.includes('survey')||!Sim.canAfford(s,{wood:4,fiber:2}),'primary wide')}`}`;
 return title(unlocked?'Region '+String(id+1).padStart(2,'0')+' · Revealed':'A new horizon',b.name,b.sub)+`<div class="biome-rule" style="--biome:${b.color}"><span>Field conditions</span><p>${b.mechanic}</p></div><h3 class="section-label">${unlocked?'Regional resources':'Surveyed opportunities'}</h3><div class="resource-names">${b.resources.map(k=>`<span>${icon(RES[k][1])}${RES[k][0]}</span>`).join('')}</div>`+(unlocked?`<div class="notice"><h3>${b.landmark}</h3><p>${r.landmarkClaimed?b.story:'An ancient silhouette waits near the heart of this region. Investigate it to recover knowledge.'}</p>${button('Find landmark','landmark:'+id)}</div><div class="button-row">${button('Center region','focus:'+id)}${button(s.buildings.some(b=>b.r===id&&b.type==='outpost')?'Build infrastructure':'Establish an outpost','regionalbuild:'+id,false,'primary')}</div>${id===11?`<h3 class="section-label">The Horizon Array</h3><p>${s.regions.filter(r=>r.restored).length}/12 landmarks restored.</p>${s.completed?'<div class="notice">The Array is awake. A new horizon is yours.</div>':`${cost({charge:10,pearl:12,lens:6})}${button('Awaken the Horizon Engine','finish',!s.regions.every(r=>r.restored)||!Sim.canAfford(s,{charge:10,pearl:12,lens:6}),'primary wide')}`}`:''}`:`<div class="notice"><small>Required field technology</small><h3>${TECH[b.gate].name}</h3><p>${s.tech.includes(b.gate)?'Your expedition is equipped.':TECH[b.gate].desc}</p>${!s.tech.includes(b.gate)?button('Open research atlas','open:research'):''}</div><h3 class="section-label">Expedition supplies</h3>${cost(b.cost)}${s.expedition?.id===id?`<p>The expedition is opening a route…</p>${bar(s.expedition.progress,14,'expedition')}`:button(s.expedition?'Another expedition is underway':'Launch expedition · 14s','unlock:'+id,!!s.expedition||!s.tech.includes(b.gate)||!Sim.canAfford(s,b.cost),'primary wide')}`);
}
function tilePanel(id){const t=s.tiles[id];if(!t)return '';const b=BIOMES[t.r],r=s.regions[t.r];
 if(t.kind==='landmark')return title(b.name,b.landmark,r.landmarkClaimed?b.story:'A remnant of the world before the veil. Investigate its history and recover its knowledge.')+`<div class="object-portrait">${icon('monument')}</div>`+(!r.landmarkClaimed?`${cost({})}${button('Investigate landmark','claimlandmark:'+t.r,false,'primary wide')}`:`<span class="tag">Recorded in your journal</span><p>${r.restored?'A restored light joins the Horizon Array.':'After learning Beyond the White, restore this landmark to reconnect the ancient array.'}</p>${!r.restored?`${cost({charge:3,gear:2})}${button('Restore landmark','restore:'+t.r,!s.tech.includes('aether')||!Sim.canAfford(s,{charge:3,gear:2}),'primary wide')}`:''}`);
 if(t.kind==='discovery'){const d=s.discoveries[t.discovery];return title(b.name+' · '+d.rarity+' discovery',d.name,d.claimed?'The site has been carefully recorded. Its discoveries now live in your journal.':'Something survived here, sheltered from the passing years. Recover its fragments and decipher what remains.')+`<div class="object-portrait">${icon(d.rarity==='extraordinary'?'star_arch':d.rarity==='rare'?'monument':'well')}</div>${button(d.claimed?'Already investigated':'Investigate discovery','claim:'+d.id,d.claimed,'primary wide')}`;}
 if(['tree','ore','herb'].includes(t.kind))return title(b.name,RES[t.resource][0],'A renewable field resource. Manual harvests improve with Precision Field Tools; harvesters later gather it automatically.')+`<div class="object-portrait">${icon(RES[t.resource][1])}</div><div class="setting"><span>Available harvests</span><b data-stock="${t.id}">${t.stock} / 5</b></div><p class="hint">One harvest replenishes every 12 seconds.</p>${button('Gather '+RES[t.resource][0],'gather:'+id,t.stock<1,'primary wide')}`;
 return regionPanel(t.r);
}
function buildingPanel(id){const b=s.buildings.find(b=>b.id===id);if(!b)return title('Fieldworks','Structure removed');const d=BUILD[b.type];return title(BIOMES[b.r].name,d.name,d.desc)+`<div class="object-portrait">${icon(d.sprite)}</div><div class="setting"><span>Level ${b.level} / 4</span><b data-status="${b.id}">${b.status||'Connected'}</b></div>${d.time?bar(b.progress,d.time,'building:'+b.id):''}${d.extract?`<label class="select-label">Harvest resource<select data-change="target:${b.id}">${BIOMES[b.r].resources.map(k=>`<option value="${k}" ${k===b.target?'selected':''}>${RES[k][0]}</option>`).join('')}</select></label>`:''}${b.type==='foundry'?`<label class="select-label">Smelting recipe<select data-change="recipe:${b.id}">${['copperbar','ironbar'].map(k=>`<option value="${k}" ${k===b.recipe?'selected':''}>${RECIPES[k].name}</option>`).join('')}</select></label>`:''}<p>Each upgrade increases production speed or power output by 50% of the base rate.</p>${b.level<4?`${cost(Sim.upgradeCost(b))}${button('Upgrade to level '+(b.level+1),'upgrade:'+b.id,!Sim.canAfford(s,Sim.upgradeCost(b)),'primary wide')}`:'<span class="tag">Fully upgraded</span>'}<div class="button-row">${button(b.enabled?'Pause operation':'Resume operation','toggle:'+b.id)}${button('Find in world','findbuilding:'+b.id)}${button('Dismantle · 60% refund','remove:'+b.id)}</div>`;}
function renderUI(){
 const newlyOpenedModal=!!modal&&modal!==lastRenderedModal;lastRenderedModal=modal;const newlyOpenedPanel=panel!==lastRenderedPanel;lastRenderedPanel=panel;
 const focusModal=()=>{if(newlyOpenedModal)requestAnimationFrame(()=>root.querySelector('.modal input:not([hidden]),.modal button:not(.modal-close)')?.focus({preventScroll:true}));};
 const previousToast=document.querySelector('#toast')?.outerHTML,scroll=newlyOpenedPanel?0:document.querySelector('.panel-body')?.scrollTop||0;
 const focused=document.activeElement,searchKey=focused?.dataset.search,caret=focused?.selectionStart,focusAction=focused?.dataset.action;
 document.body.classList.toggle('observe',view.observe);document.body.classList.toggle('panel-open',running&&!!panel);document.body.classList.toggle('large-text',!!s.settings.largeText);document.body.classList.toggle('reduced-motion',!!s.settings.reducedMotion);document.body.dataset.panel=panel||'';
 if(!running){root.innerHTML=`<div class="title-screen"><div class="title-vignette"></div><div class="title-copy"><div class="title-edition"><span></span>THE WAYFARER’S EDITION</div><div class="brand-sigil">${compassRose(112)}</div><span class="title-overline">A WORLD WAITING TO BE KNOWN</span><h1>AETHERFORGE</h1><div class="subtitle">WHITE HORIZON</div><p>Begin with a clearing.<br>Let curiosity carry you beyond the white.</p>${saved?`<div class="saved-expedition">${glyph('flag',20)}<span><b>Your expedition awaits</b><small>${saved.state.regions.filter(r=>r.unlocked).length} regions charted · Day ${Math.floor(saved.state.time/360)+1} · Seed ${saved.state.seed}</small></span></div>`:''}<div class="menu-actions">${saved?button('Continue your journey'+glyph('arrow',17),'continue',false,'primary'):''}${button('Begin a new expedition'+glyph('arrow',17),'new',false,saved?'':'primary')}${button(glyph('journal',17)+' Field guide','guide')}</div><div class="title-footnote">${glyph('compass',16)}<span>Twelve hidden biomes. One connected world.</span></div></div><div class="title-world-label"><span class="location-cross">+</span><div>HEARTHGROVE<small>The first page of your atlas.</small></div></div><span class="title-version">WHITE HORIZON · 1.1</span></div><div id="toast" class="toast"></div>${modalHTML()}`;focusModal();return;}
 const u=s.regions.filter(r=>r.unlocked).length,p=Sim.power(s),obj=objective(),bearing=nextBearing(),known=s.regions[selectedRegion].unlocked||s.regions[selectedRegion].surveyed,meta=PANEL_META[panel]||PANEL_META.region;
 root.innerHTML=`<header class="topbar"><button class="brand" data-action="open:atlas" aria-label="Open world atlas">${compassRose(42)}<span>AETHERFORGE<small>WHITE HORIZON</small></span></button><div class="resource-ribbon" aria-label="Pinned expedition supplies">${pinnedResources().map(k=>resource(k)).join('')}<button class="more-resources" data-action="open:inventory" aria-label="Open all supplies">${glyph('plus',18)}</button></div><div class="top-actions"><button data-action="pause" class="clock" aria-label="${paused?'Resume':'Pause'} world">${glyph(paused?'play':Sim.night(s)?'moon':'sun',20)}<span>Day ${Math.floor(s.time/360)+1}<small>${paused?'Paused':Sim.weather(s)}</small></span></button><button data-action="save" class="save-button" aria-label="Save world">${glyph('save',19)}<span data-save-status>${saveBusy?'Saving…':'Saved'}</span></button><button data-action="open:settings" class="settings-button" aria-label="Settings">${glyph('settings',21)}</button></div></header>
 <aside class="bearing"><div class="bearing-heading">${glyph('flag',15)}<span>YOUR NEXT BEARING</span><span class="bearing-index">${String(u).padStart(2,'0')} / 12</span></div><h3>${obj[0]}</h3><p>${obj[1]}</p><button data-action="nextstep">${bearing.label}${glyph('arrow',16)}</button></aside>
 <div class="world-caption"><span class="region-coordinate">${String(selectedRegion+1).padStart(2,'0')}</span><div><span class="eyebrow">${known?'EXPEDITION REGION':'AT THE FRONTIER'}</span><strong>${known?BIOMES[selectedRegion].name:'Uncharted frontier'}</strong><small>${known?BIOMES[selectedRegion].sub:'The white holds its secrets.'}</small></div></div>
 <div class="camera-tools"><button data-action="zoom:1.25" aria-label="Zoom in">${glyph('plus',18)}</button><button data-action="zoom:0.8" aria-label="Zoom out">${glyph('minus',18)}</button><button data-action="focus:${selectedRegion}" aria-label="Center region" class="home-camera">${glyph('compass',20)}</button><button data-action="observe" aria-label="Toggle observe mode" class="observe-btn">${glyph('eye',20)}</button></div>
 <button class="power-badge ${p.ratio<1?'warning':''}" data-action="open:production">${glyph('power',17)}<b data-energy>${Math.floor(p.supply)} / ${Math.ceil(p.demand)}</b><small>POWER</small></button>
 <div class="activity-strip" aria-label="Expedition activity">${activity()}</div>
 <nav class="dock" aria-label="Game navigation">${NAV.map(([id,g,label,key])=>`<button aria-label="${label}" aria-expanded="${panel===id}" aria-controls="field-panel" data-action="open:${id}" class="${panel===id?'active':''}">${glyph(g,24)}<span>${label}</span>${key?`<kbd>${key}</kbd>`:''}</button>`).join('')}</nav>
 ${view.placeType?`<div class="placement-banner">${icon(BUILD[view.placeType].sprite)}<span><small>CONSTRUCTION MODE</small><b>${BUILD[view.placeType].name}</b><em>Tap clear land · Drag to look around</em></span>${button('Done','cancelplace',false,'primary')}</div>`:''}
 ${panel?`<aside id="field-panel" class="panel ${newlyOpenedPanel?'entering':''} ${['atlas','research','craft','build','inventory','journal','production','settings','credits'].includes(panel)?'wide-panel':''}" aria-label="${panel}"><div class="panel-cap"><span class="panel-emblem">${glyph(meta[2],24)}</span><div><b>${meta[0]}</b><strong>${({atlas:'World atlas',inventory:'Expedition stores',craft:'Workshop',build:'Fieldworks',research:'Research atlas',production:'Production ledger',journal:'Wayfarer’s journal',settings:'Settings',credits:'Makers & licenses',region:'Regional survey',tile:'Field inspection',building:'Structure'})[panel]||meta[1]}</strong></div><button class="close" data-action="close" aria-label="Close panel">${glyph('close',19)}</button></div><div class="panel-body">${panelContent()}</div><div class="panel-foot"><span>EXPEDITION FIELD NOTES</span><span>${glyph('compass',13)} ${String(selectedRegion+1).padStart(2,'0')} / 12</span></div></aside>`:''}
 ${paused?`<div class="paused-label">${glyph('pause',19)}<span>Take a breath. The world is paused.</span>${button('Resume','pause',false,'primary')}</div>`:''}<div id="toast" class="toast" role="status" aria-live="polite"></div>${modalHTML()}`;
 if(previousToast&&previousToast.includes('toast show'))document.querySelector('#toast').outerHTML=previousToast;
 if(panel)document.querySelector('.panel-body').scrollTop=scroll;
 if(searchKey){const input=[...root.querySelectorAll('[data-search]')].find(e=>e.dataset.search===searchKey);if(input){input.focus({preventScroll:true});if(input.type==='search')input.setSelectionRange(caret,caret);}}
 else if(focusAction){const same=[...root.querySelectorAll('[data-action]')].find(e=>e.dataset.action===focusAction&&!e.disabled);same?.focus({preventScroll:true});}
 focusModal();
 if(techFocus){const id=techFocus;techFocus=null;requestAnimationFrame(()=>document.getElementById('tech-'+id)?.scrollIntoView({block:'center',behavior:s.settings.reducedMotion?'instant':'smooth'}));}
}
function refreshUI(){
 for(const el of root.querySelectorAll('[data-status]')){const b=s.buildings.find(b=>b.id===Number(el.dataset.status));if(b)el.textContent=b.status||'Connected';}
 for(const el of root.querySelectorAll('[data-stock]'))el.textContent=s.tiles[el.dataset.stock].stock+' / 5';
 for(const el of root.querySelectorAll('[data-count]'))el.textContent=Math.floor(s.inventory[el.dataset.count]||0);
 for(const el of root.querySelectorAll('[data-cost]')){const[k,n]=el.dataset.cost.split(':');el.classList.toggle('missing',(s.inventory[k]||0)<Number(n));const count=el.querySelector('[data-owned]');if(count)count.textContent=Math.floor(s.inventory[k]||0);}
 const clock=root.querySelector('.clock span');if(clock)clock.innerHTML=`Day ${Math.floor(s.time/360)+1}<small>${paused?'Paused':Sim.weather(s)}</small>`;
 const energy=Sim.power(s);for(const el of root.querySelectorAll('[data-energy]'))el.textContent=Math.floor(energy.supply)+' / '+Math.ceil(energy.demand);for(const el of root.querySelectorAll('[data-efficiency]'))el.innerHTML=Math.floor(energy.ratio*100)+'<small>% efficiency</small>';for(const el of root.querySelectorAll('[data-save-status]'))el.textContent=saveBusy?'Saving…':'Saved';
 for(const el of root.querySelectorAll('[data-countdown]')){const[k,id]=el.dataset.countdown.split(':');let n=0;if(k==='research'&&s.research)n=TECH[s.research.id].time-s.research.progress;if(k==='expedition'&&s.expedition)n=14-s.expedition.progress;if(k==='craft'&&s.crafts[id])n=RECIPES[s.crafts[id].id].time*s.crafts[id].count-s.crafts[id].progress;el.textContent=k==='craft'&&Number(id)>0?'Queued':Math.max(0,Math.ceil(n))+'s';}
 for(const el of root.querySelectorAll('[data-progress]')){const[k,id]=el.dataset.progress.split(':');let a=0,b=1;if(k==='research'&&s.research){a=s.research.progress;b=TECH[s.research.id].time;}if(k==='expedition'&&s.expedition){a=s.expedition.progress;b=14;}if(k==='survey'){a=s.regions[id].survey;b=10;}if(k==='craft'&&s.crafts[id]){a=s.crafts[id].progress;b=RECIPES[s.crafts[id].id].time*s.crafts[id].count;}if(k==='building'){const t=s.buildings.find(b=>b.id===Number(id));if(t){a=t.progress;b=BUILD[t.type].time;}}const i=el.querySelector('i');if(i)i.style.width=Math.min(100,a/b*100)+'%';}
 for(const el of root.querySelectorAll('button[data-action]')){const[a,id]=el.dataset.action.split(':');let disabled;
  if(a==='craft'){const r=RECIPES[id];disabled=!!r.tech&&!s.tech.includes(r.tech)||s.crafts.length>=20||!Sim.canAfford(s,Object.fromEntries(Object.entries(r.in).map(([k,v])=>[k,v*batch])));}
  if(a==='place'){const d=BUILD[id],r=s.regions[selectedRegion],outpost=s.buildings.some(b=>b.r===r.id&&b.type==='outpost');disabled=!r.unlocked||!Sim.canAfford(s,d.in)||!!d.tech&&!s.tech.includes(d.tech)||d.region!==undefined&&d.region!==r.id||(id==='outpost'?outpost:!outpost);}
  if(a==='research'){const t=TECH[id];disabled=s.tech.includes(id)||!!s.research||!Sim.canAfford(s,t.in)||!(t.needs||[]).every(k=>s.tech.includes(k))||t.final&&!s.completed;}
  if(a==='unlock')disabled=!!s.expedition||!s.tech.includes(BIOMES[id].gate)||!Sim.canAfford(s,BIOMES[id].cost);
  if(a==='survey')disabled=!s.tech.includes('survey')||!Sim.canAfford(s,{wood:4,fiber:2});
  if(a==='gather')disabled=s.tiles[id].stock<1;
  if(a==='upgrade'){const b=s.buildings.find(b=>b.id===Number(id));disabled=!b||!Sim.canAfford(s,Sim.upgradeCost(b));}
  if(a==='restore')disabled=!s.tech.includes('aether')||!Sim.canAfford(s,{charge:3,gear:2});
  if(disabled!==undefined)el.disabled=disabled;
 }
}
function modalHTML(){if(!modal)return '';let inner='';if(modal==='resource')inner=resourceDialog(catalogContext(),selectedResource)+button('Back to the expedition','modalclose',false,'wide modal-back');if(modal==='new')inner=title('The beginning of a journey','A world of your own','Every seed is a complete, connected world. Discoveries vary; the path forward is always possible.')+`<label class="select-label">World seed<input id="seed" type="number" value="${Math.floor(Math.random()*99999999)}" min="0" max="4294967295"></label><p>Starting a new expedition replaces the current device save. Export your world first if you want to keep it.</p><div class="button-row">${button('Set out into the white','start',false,'primary')}${button('Back','modalclose')}</div>`;
 if(modal==='guide')inner=title('A few notes for the road','Follow your curiosity','You guide an expedition, without a walking avatar. Everything you need begins in Hearthgrove.')+`<ol class="guide"><li>Tap trees, stone, or grasses to gather. They replenish naturally.</li><li>Build a survey tower. Knowledge unlocks the research atlas.</li><li>Learn The Cartographer’s Craft. Survey a gold frontier seal, then equip an expedition.</li><li>Investigate glowing ruins and landmarks. Their knowledge fuels your next breakthrough.</li><li>Build an outpost in every new region. Automate resources with harvesters and windmills.</li><li>Follow the journal’s bearings. Restore twelve landmarks and awaken the Horizon Array.</li></ol><p>Drag to pan. Pinch or scroll to zoom. The Atlas brings you home. Your world autosaves locally.</p>${button('The horizon awaits','modalclose',false,'primary wide')}`;
 if(modal==='ending')inner=title('The Horizon Array','The world remembers you','One by one, the ancient lights answer. The veil opens to a sky alive with the paths you made. What was unknown is now a home.')+`<div class="ending-sigil">✧</div><p>Twelve regions connected. Twelve histories restored. The Second Horizon research is now available, and your industry continues.</p>${button('Return to your world','modalclose',false,'primary wide')}`;
 return `<div class="modal-shade"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" data-action="modalclose" aria-label="Close dialog">${glyph('close',19)}</button>${inner.replace('<h2>','<h2 id="modal-title">')}</section></div>`;}
function tap(hit){if(!running||modal)return;sound.start();if(!hit)return;
 if(view.placeType){if(hit.tile===undefined)return;const t=s.tiles[hit.tile],ok=Sim.place(s,view.placeType,hit.tile);if(ok){const p=iso(t.x+.5,t.y+.5);view.burst(p.x,p.y,'#eacb79','Built');sound.play('build');save(true);}else{toast('Place on clear land in the correct region. Build an outpost first, and check your supplies.');sound.play('error');}renderUI();return;}
 if(hit.frontier!==undefined){selectedRegion=hit.frontier;panel='region';renderUI();return;}
 if(hit.building!==undefined){selectedBuilding=hit.building;panel='building';selectedRegion=s.buildings.find(b=>b.id===hit.building).r;renderUI();return;}
 if(hit.tile!==undefined){const t=s.tiles[hit.tile];selectedRegion=t.r;selectedTile=t.id;view.selection=t.id;panel='tile';if(['tree','ore','herb'].includes(t.kind))harvest(t.id);else sound.play();renderUI();}
}
function harvest(id){const result=Sim.gather(s,id);if(result.ok){const t=s.tiles[id],p=iso(t.x+.5,t.y+.5);view.burst(p.x,p.y,'#f0d898',result.message);sound.play('gather');}else toast(result.message);}
// Activate UI taps on pointer release. Suppress delayed compatibility clicks after
// multi-touch gestures; those can otherwise be swallowed or delivered twice.
let uiTouch=null,lastUiTouch={action:null,time:0};
root.addEventListener('pointerdown',e=>{const el=e.target.closest('button[data-action]');if(e.pointerType==='touch'&&el&&!el.disabled)uiTouch={id:e.pointerId,el,x:e.clientX,y:e.clientY};});
root.addEventListener('pointermove',e=>{if(uiTouch&&e.pointerId===uiTouch.id&&Math.hypot(e.clientX-uiTouch.x,e.clientY-uiTouch.y)>10)uiTouch=null;});
root.addEventListener('pointercancel',()=>uiTouch=null);
root.addEventListener('pointerup',e=>{const touch=uiTouch;uiTouch=null;if(!touch||e.pointerId!==touch.id||e.target.closest('button[data-action]')!==touch.el)return;lastUiTouch={action:touch.el.dataset.action,time:performance.now()};e.preventDefault();touch.el.click();});
root.addEventListener('click',e=>{const el=e.target.closest('button[data-action]');if(e.isTrusted&&lastUiTouch.action!==null&&performance.now()-lastUiTouch.time<600){e.preventDefault();e.stopImmediatePropagation();}},true);
root.addEventListener('click',async e=>{const el=e.target.closest('[data-action]');if(!el||el.disabled)return;const [action,arg]=el.dataset.action.split(':');sound.start();sound.play();
 switch(action){
 case 'new':case 'newconfirm':modal='new';break;
 case 'guide':modal='guide';break;
 case 'modalclose':modal=null;break;
 case 'start':{const seed=Number(document.querySelector('#seed').value);const fresh=Sim.newGame(Number.isFinite(seed)?seed:20261023);fresh.camera.zoom=innerWidth<700?.55:innerHeight<550?.72:1.15;begin(fresh);return;}
 case 'continue':begin(saved.state,saved.away);if(saved.recovered)toast('Recovered your verified backup.');return;
 case 'open':open(arg);return;
 case 'filter':{const[key,value]=arg.split('|');filters[key]=value;break;}
 case 'showtech':panel='research';queries.research='';filters.research='all';techFocus=arg;break;
 case 'nextstep':{const next=nextBearing();if(next.tech){panel='research';filters.research='all';queries.research='';techFocus=next.tech;}else if(next.region!==undefined){selectedRegion=next.region;panel='region';}else {panel=next.panel;queries[panel]='';if(panel==='build')filters.build='known';}break;}
 case 'resource':selectedResource=arg;modal='resource';break;
 case 'pin':{const pinned=pinnedResources();s.settings.pinnedResources=pinned.includes(arg)?pinned.filter(k=>k!==arg):[...pinned.slice(-4),arg];save(true);break;}
 case 'resourcejump':modal=null;selectedRegion=Number(arg);panel='region';view.focus(selectedRegion,1.15);break;
 case 'resourcecraft':modal=null;panel='craft';filters.craft='known';queries.craft=RECIPES[arg].name;break;
 case 'close':panel=null;selectedTile=null;view.selection=null;break;
 case 'batch':batch=Number(arg);break;
 case 'craft':if(Sim.craft(s,arg,batch)){toast('Added to the crafting queue.');}else toast('Missing ingredients or queue full.');break;
 case 'cancelcraft':Sim.cancelCraft(s,Number(arg));break;
 case 'research':if(Sim.research(s,arg)){toast('Research begun.');save(true);}break;
 case 'survey':if(Sim.survey(s,Number(arg))){toast('The survey team is in the field.');save(true);}break;
 case 'unlock':if(Sim.unlock(s,Number(arg))){toast('The expedition sets out.');save(true);}break;
 case 'place':view.placeType=arg;panel=null;toast('Choose clear land. Drag to move the map.');break;
 case 'cancelplace':view.placeType=null;break;
 case 'gather':harvest(Number(arg));break;
 case 'claim':if(Sim.claim(s,Number(arg))){toast('Discovery recorded. Fragments and knowledge recovered.');sound.play('discover');save(true);}break;
 case 'claimlandmark':if(Sim.landmark(s,Number(arg))){toast('Landmark recorded. Knowledge recovered.');sound.play('discover');save(true);}break;
 case 'restore':if(Sim.restore(s,Number(arg))){toast('Another light joins the Horizon Array.');sound.play('unlock');save(true);}break;
 case 'finish':if(Sim.finish(s)){modal='ending';sound.play('unlock');save(true);}break;
 case 'region':selectedRegion=Number(arg);panel='region';if(s.regions[selectedRegion].unlocked)view.focus(selectedRegion,1.15);break;
 case 'focus':view.focus(Number(arg),innerWidth<700?.85:1.15);break;
 case 'regionalbuild':selectedRegion=Number(arg);view.focus(selectedRegion,1.2);panel='build';break;
 case 'landmark':{const t=s.tiles.find(t=>t.r===Number(arg)&&t.kind==='landmark'),p=iso(t.x+.5,t.y+.5);view.camera.x=p.x;view.camera.y=p.y-40;view.camera.zoom=1.35;selectedTile=t.id;selectedRegion=t.r;view.selection=t.id;panel='tile';break;}
 case 'building':selectedBuilding=Number(arg);panel='building';break;
 case 'findbuilding':{const b=s.buildings.find(b=>b.id===Number(arg)),p=iso(b.x+.5,b.y+.5);view.camera.x=p.x;view.camera.y=p.y-40;view.camera.zoom=1.4;panel=null;break;}
 case 'upgrade':if(Sim.upgrade(s,Number(arg))){sound.play('build');toast('Infrastructure upgraded.');save(true);}break;
 case 'toggle':{const b=s.buildings.find(b=>b.id===Number(arg));b.enabled=!b.enabled;break;}
 case 'remove':if(Sim.remove(s,Number(arg))){panel='production';toast('Structure dismantled. Materials recovered.');save(true);}else toast('Dismantle local machinery before removing its outpost.');break;
 case 'setting':s.settings[arg]=!s.settings[arg];sound.enabled=s.settings.sound;sound.music=s.settings.music;save(true);break;
 case 'quality':s.settings.quality=s.settings.quality==='high'?'low':'high';save(true);break;
 case 'save':await save();return;
 case 'export':{const blob=new Blob([Sim.encode(s)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`white-horizon-${s.seed}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast('World exported.');return;}
 case 'import':document.querySelector('#import-file').click();return;
 case 'menu':await save(true);running=false;panel=null;view.observe=false;document.body.classList.remove('observe');break;
 case 'zoom':view.zoom(Number(arg));return;
 case 'pause':paused=!paused;break;
 case 'observe':view.observe=!view.observe;document.body.classList.toggle('observe',view.observe);toast('Observe mode. Tap ◉ or press Esc to return.');return;
 case 'fullscreen':if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>toast('Use Add to Home Screen for full screen on iPhone.'));else document.exitFullscreen?.();return;
 }
 renderUI();
});
root.addEventListener('input',e=>{const key=e.target.dataset.search;if(key){queries[key]=e.target.value;renderUI();}});
root.addEventListener('change',async e=>{if(e.target.id==='import-file'){const file=e.target.files[0];if(!file)return;try{const next=Sim.decode(await file.text());await store.save(next);begin(next);toast('World imported.');}catch(err){toast('Import rejected: '+err.message,'error');}return;}
 const value=e.target.dataset.change;if(!value)return;const[k,id]=value.split(':'),b=s.buildings.find(b=>b.id===Number(id));if(!b)return;if(k==='target'&&BIOMES[b.r].resources.includes(e.target.value))b.target=e.target.value;if(k==='recipe'&&['copperbar','ironbar'].includes(e.target.value))b.recipe=e.target.value;renderUI();});
window.addEventListener('keydown',e=>{
 if(e.key==='Escape'){e.preventDefault();if(modal){modal=null;renderUI();return;}panel=null;view.placeType=null;view.observe=false;renderUI();return;}
 if(e.key==='Tab'&&modal){const elements=[...root.querySelectorAll('.modal button:not(:disabled),.modal input,.modal a[href]')].filter(el=>el.offsetParent!==null),first=elements[0],last=elements.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}return;}
 if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName)||modal)return;
 if(e.key==='/'&&panel){const input=root.querySelector('[data-search]');if(input){e.preventDefault();input.focus();return;}}
 if(!running)return;
 const keys={b:'build',c:'craft',r:'research',m:'atlas',i:'inventory',j:'journal'};
 if(keys[e.key.toLowerCase()])open(keys[e.key.toLowerCase()]);
 if(e.code==='Space'){e.preventDefault();paused=!paused;renderUI();}
 if(e.key==='+')view.zoom(1.2);if(e.key==='-')view.zoom(.8);
});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&running)save(true);});window.addEventListener('pagehide',()=>{if(running){try{localStorage.setItem('aetherforge.white-horizon.v2.current',Sim.encode(s));}catch{}save(true);}});
let last=performance.now(),acc=0;renderUI();function frame(now){const dt=Math.min(.1,(now-last)/1000);last=now;
 if(running&&!paused&&(!modal||modal==='resource')&&!document.hidden){acc+=dt;while(acc>=.1){const before=s.regions.map(r=>r.unlocked),surveyed=s.regions.filter(r=>r.surveyed).length,tech=s.tech.length,crafts=s.crafts.length;Sim.tick(s,.1);acc-=.1;for(const r of s.regions)if(r.unlocked&&!before[r.id]){view.reveals.set(r.id,s.time);selectedRegion=r.id;view.focus(r.id,1.1);toast(`${BIOMES[r.id].name} · a new horizon`);sound.play('unlock');save(true);renderUI();}if(s.regions.filter(r=>r.surveyed).length>surveyed){toast('Frontier survey complete. Open the Atlas to prepare your expedition.');renderUI();}if(s.tech.length>tech){toast('Research complete: '+TECH[s.tech.at(-1)].name);sound.play('discover');renderUI();}if(s.crafts.length<crafts){sound.play('build');renderUI();}}
 sound.update(s.time,selectedRegion);saveTimer+=dt;if(saveTimer>20){saveTimer=0;save(true);}uiTimer+=dt;if(uiTimer>.5){uiTimer=0;refreshUI();}}
 if(!running){view.camera.x=-170;view.camera.y=220;view.camera.zoom=innerWidth<700?.68:1.1;}
 view.render(dt);requestAnimationFrame(frame);
}requestAnimationFrame(frame);
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
if(new URLSearchParams(location.search).has('qa'))window.__game={get state(){return s;},get view(){return view;},sim:Sim,start:state=>begin(state),save,store,open,renderUI};
