// Supplementary art, built with the original Aetherforge rasteriser and CC0 textures.
import {Canvas, type Face, type RGB} from './iso';
import {TexLib,Paint} from './tex';
import * as N from './models/nature';
import * as B from './models/buildings';
const defs=[
 ['grass_top','dirt',[1,1,1]],['hay_top','sandstone',[1,.93,.72]],['grass_top','dirt',[1.24,.71,.46]],
 ['sand_ugly_2','sandstone',[1,1,.92]],['slate','schist',[1,1,1.1]],['snow','ice_glacier',[.95,1,1.1]],
 ['mud','serpentine',[.72,1.03,.88]],['grass_top','dirt',[1.4,.67,1.3]],['serpentine','slate',[.8,.6,1.3]],
 ['basalt','obsidian',[.8,.65,.8]],['obsidian','slate',[.65,.72,1.22]],['marble','marble_bricks',[.84,1,1.08]]] as const;
const trees=['oak','beech','maple','palm','pine','pine','willow','beech','fungus','cinder','crystal','aether'];
export function explorationArt(L:TexLib){
 const out:any[]=[];
 const frame=(key:string,fn:(c:Canvas)=>void,ground=true)=>{
  const c=new Canvas(384,384,192,270); c.castOn=ground;fn(c);c.castOn=false;c.finish({ground,outline:ground?1:0,ao:.26});
  out.push([key,{w:c.w,h:c.h,data:c.col,ax:192,ay:286}]);
 };
 const f=(tex:string,tint:RGB=[1,1,1],glow=false):Face=>({tex:L.get('a/'+tex),tint,glow});
 for(let b=0;b<12;b++){
  const [top,side,tint]=defs[b];
  for(let v=0;v<3;v++) frame(`land:${b}:${v}`,c=>{
   const t=tint.map(n=>n*(.96+v*.04)) as RGB;
   c.box([0,0,-.22],[1,1,0],f(top,t),f(side),f(side),1,v);
   if(v===2&&b!==3&&b!==5) for(let i=0;i<2;i++)c.sprite([.2+i*.5,.4,0],{tex:L.get('a/plants/'+(b===9?'mushroom_brown':b===8?'mushroom_red':b===7?'orchid_ground':'grass'))},2,1);
  },false);
  for(let v=0;v<3;v++) frame(`flora:${b}:${v}`,c=>{
   c.S=.83+v*.085;
   if(b===3)N.palm(c,L,5+v,0);
   else if(b===6)N.willow(c,L,4+v,0);
   else if(b===8){
    const stem=f('marble',[.68,.62,.9]),cap=f('amethyst',[.9,.7,1.35]);
    for(let i=0;i<3;i++){const x=.2+(i%2)*.65,y=.2+Math.floor(i/2)*.6,h=1.1+i*.5+v*.16;
     c.box([x-.09,y-.09,0],[x+.09,y+.09,h],stem);
     c.box([x-.5,y-.5,h-.2],[x+.5,y+.5,h+.05],cap);
     c.box([x-.3,y-.3,h+.05],[x+.3,y+.3,h+.32],cap);
     c.light([x,y,h-.15],[.6,.25,1],1.2);
    }
   }else if(b===9){
    c.box([.35,.35,0],[.65,.65,2.8+v*.3],f('basalt'));for(let i=0;i<4;i++)c.box([.2+i*.12,.2,1.3+i*.3],[.48+i*.1,.6,1.65+i*.3],f('basalt_flow',[1.5,.6,.4]));c.light([.5,.5,.4],[1,.32,.05],2);
   }else if(b>=10){
    for(let i=0;i<4;i++){let x=.1+(i%2)*.7,y=.15+Math.floor(i/2)*.6; c.box([x,y,0],[x+.25,y+.25,1.2+(i%3)*.6+v*.3],f(b===10?'amethyst':'ice_glacier',b===10?[.6,.7,1.4]:[.6,1.2,1.15]));c.box([x+.07,y+.07,1.2+(i%3)*.6+v*.3],[x+.18,y+.18,1.55+(i%3)*.6+v*.3],f('marble',[.8,1,1.2]));}c.light([.5,.5,1],[.3,.9,1],2);
   }else N.tree(c,L,trees[b] as N.Wood,17+v,0,0,b===1?[1.25,1.02,.55]:b===2?[1.7,.62,.28]:b===5?[1.2,1.35,1.6]:b===7?[1.9,.65,1.5]:[1,1,1]);
  });
  for(let v=0;v<3;v++)frame(`ore:${b}:${v}`,c=>{
   const rock=f(b===9?'basalt':b===5?'ice_glacier':b>=8?'obsidian':'slate');
   c.box([.04,.1,0],[.9,.85,.38+v*.1],rock);c.box([.25,.2,.35],[.8,.75,.75+v*.12],rock);
   const ore=f(b===2?'stone_generic_ore_nuggets':b===5?'ice_glacier':b>=7?'amethyst':'stone_generic_ore_crystalline',b===9?[2,.6,.2]:b===11?[.5,1.5,1.5]:[1,1,1]);
   for(let i=0;i<3;i++)c.box([.12+i*.24,.72,.1+i*.16],[.28+i*.24,.89,.34+i*.16],ore);if(b>=7)c.light([.5,.5,.5],[.4,.6,1],1);
  });
  for(let v=0;v<3;v++)frame(`herb:${b}:${v}`,c=>{
   const plants=['fern','goldenrod','horsetail','sedge','lupine','oxeye_daisy','fern2','orchid_ground','mushroom_red','mushroom_brown','forget_me_not','aster'];
   const tint:RGB=b===5?[1.2,1.35,1.6]:b===8?[.8,.55,1.4]:b===9?[1.6,.5,.3]:b===10?[.6,.8,1.4]:b===11?[.65,1.25,1.2]:[1,1,1];
   for(let i=0;i<4;i++)c.sprite([.15+(i%2)*.55,.15+Math.floor(i/2)*.55,0],{tex:L.get('a/plants/'+plants[b]),tint},2,1+(v%2));
   if(b===7||b===8||b===11)c.light([.5,.5,.3],[.3,.8,1],1.5);
  });
  frame(`landmark:${b}`,c=>{
   c.S=.88;
   const stone=f(b===9?'basalt':'marble_bricks',b===8?[.75,.65,1]:[1,1,1]),metal=f('slate');
   c.box([-.5,-.5,0],[1.5,1.5,.3],stone);
   for(const [x,y] of [[-.35,-.35],[1.1,-.35],[-.35,1.1],[1.1,1.1]]){
    c.box([x-.15,y-.15,.3],[x+.2,y+.2,2.2+(b%3)*.25],stone);
    c.box([x-.2,y-.2,2.2+(b%3)*.25],[x+.25,y+.25,2.4+(b%3)*.25],metal);
   }
   if(b===0){N.elderTree(c,L);}
   else if(b===1){c.at(-.45,-.45);c.S=.72;B.windmill(c,L,.25);}
   else if(b===2){c.at(-.35,-.35);B.furnace(c,L,.25);c.at(.6,-.3);B.workbench(c,L);}
   else if(b===3){B.well(c,L,0);c.at(-.8,.4);B.lanternPost(c,L);}
   else if(b===4){B.beacon(c,L,.25);c.at(-.4,-.4);B.starNet(c,L,.25);}
   else if(b===5){B.monument(c,L,.25);c.at(-.3,.5);B.crystalLamp(c,L,.25);}
   else if(b===6){c.at(-.4,-.4);B.gazebo(c,L);c.at(.8,.9);B.hedge(c,L);}
   else if(b===7){c.at(-.4,-.4);B.gazebo(c,L);c.at(-.6,.6);B.flowerBed(c,L);c.at(.8,.8);B.crystalLamp(c,L,.3);}
   else if(b===8){
    c.box([-.5,1,1.8],[1.5,1.4,2.3],f('amethyst',[.8,.65,1.4]));c.box([-.3,1.1,2.3],[1.3,1.3,2.6],f('amethyst'));c.at(.2,.1);B.composter(c,L);c.light([.5,.5,1.2],[.6,.2,1],3);
   }else if(b===9){B.crucible(c,L,.25);c.light([.5,.5,.9],[1,.3,.04],3);}
   else if(b===10){c.at(-.5,-.5);B.starArch(c,L,.3);c.at(.3,.3);B.well(c,L,.25);}
   else {c.at(-.35,-.35);B.resonator(c,L,.25);c.light([.5,.5,2],[.3,1,.9],4);}

  });
 }
 for(let v=0;v<3;v++)frame(`water:${v}`,c=>{c.box([0,0,-.22],[1,1,-.1],f('ice_glacier',[.3,.82,1.05]));for(let i=0;i<4;i++)c.box([i*.22,(i*.37+v*.13)%1,-.1],[i*.22+.12,(i*.37+v*.13)%1+.02,-.08],f('marble',[.6,1,1.2]));},false);
 return out;
}
