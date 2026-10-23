// Original, sample-free soundscape: plucked partials, bell harmonics and soft air.
export class Sound{
 constructor(){this.enabled=true;this.music=true;this.last=0;}
 start(){if(!this.ctx)this.ctx=new(window.AudioContext||window.webkitAudioContext)();this.ctx.resume().catch(()=>{});}
 tone(freq,dur=.2,gain=.04,type='sine',delay=0){if(!this.enabled||!this.ctx)return;const c=this.ctx,o=c.createOscillator(),g=c.createGain(),t=c.currentTime+delay;o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+dur+.02);}
 play(kind='tap'){if(kind==='gather'){this.tone(260,.1,.025,'triangle');this.tone(520,.16,.02,'sine',.05);}else if(kind==='discover'||kind==='unlock'){[262,330,392,523,659].forEach((f,i)=>this.tone(f,1.5,.035,'sine',i*.12));}else if(kind==='build'){[130,196,262].forEach((f,i)=>this.tone(f,.25,.025,'triangle',i*.06));}else if(kind==='error')this.tone(140,.12,.02,'triangle');else this.tone(520,.07,.012);}
 update(time,biome=0){if(!this.music||!this.enabled||!this.ctx||time-this.last<4)return;this.last=time;const notes=[130.81,164.81,196,261.63,293.66,329.63];const n=notes[(Math.floor(time/4)+biome)%notes.length];this.tone(n,3.5,.008);this.tone(n*1.5,3,.004,'sine',.3);}
}
