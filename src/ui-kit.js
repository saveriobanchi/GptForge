// Original line artwork drawn for White Horizon. No external icon library.
const paths={
 compass:'<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2ZM12 1v3m0 16v3M1 12h3m16 0h3"/>',
 satchel:'<path d="M5 8h14l1 12H4L5 8Zm3 0V5a4 4 0 0 1 8 0v3M4.5 12h15M9 12v3h6v-3"/>',
 craft:'<path d="m4 20 10-10M10 5l5-3 7 7-3 4-9-8ZM3 17l4 4"/>',
 build:'<path d="m2 11 10-8 10 8M5 10v11h14V10M10 21v-7h4v7M3 22h18"/>',
 research:'<path d="M9 2h6m-5 0v7L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L14 9V2M8 14h8M9 18h1m4-2h1"/>',
 industry:'<path d="M3 22V10l6 3V7l6 4V3h4v19H3Zm4-5h2m3 0h2m3 0h1M7 20h2m3 0h2m3 0h1"/>',
 journal:'<path d="M4 3h15v19H4a2 2 0 0 1 0-4h15M6 3v15M9 7h7m-7 4h7"/>',
 settings:'<path d="m9 3 1-2h4l1 2 3 2 2-.2 2 3-1 2v4l1 2-2 3-2-.2-3 2-1 2h-4l-1-2-3-2-2 .2-2-3 1-2v-4L2 8l2-3 2 .2 3-2Z"/><circle cx="12" cy="12" r="4"/>',
 save:'<path d="M4 2h13l4 4v16H3V2h1Zm3 0v7h9V2M7 22v-9h10v9M13 4v3"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
 moon:'<path d="M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z"/>',
 pause:'<path d="M8 5v14M16 5v14"/>',play:'<path d="m8 4 12 8-12 8V4Z"/>',
 power:'<path d="m13 1-9 13h7l-1 9 10-14h-7l0-8Z"/>',
 search:'<circle cx="10" cy="10" r="6.5"/><path d="m15 15 7 7"/>',
 arrow:'<path d="M3 12h17m-6-6 6 6-6 6"/>',
 close:'<path d="m5 5 14 14M5 19 19 5"/>',
 eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/>',
 plus:'<path d="M4 12h16M12 4v16"/>',minus:'<path d="M4 12h16"/>',
 pin:'<path d="m8 3 10 3-3 4 2 6-5-2-8 8 6-10-3-4 1-5Z"/>',
 check:'<path d="m4 12 5 5L21 5"/>',lock:'<rect x="5" y="10" width="14" height="12"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v4"/>',
 flag:'<path d="M5 23V2m0 0h14l-3 5 3 5H5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 leaf:'<path d="M5 19C-2 9 10 2 22 2c0 12-7 24-17 17Zm0 0L17 7M9 15l-1-5m5 1h5"/>',
 archive:'<path d="M3 3h18v5H3V3Zm1 5v14h16V8M9 12h6m-7 5h8"/>',
 shield:'<path d="m12 2 9 4v7c0 6-9 9-9 9S3 19 3 13V6l9-4Z"/><path d="m7 12 3 3 7-7"/>'
};
export const glyph=(name,size=22)=>`<svg class="ui-glyph" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${paths[name]||paths.compass}</svg>`;
export const compassRose=(size=94)=>`<svg class="compass-rose" width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="36" stroke="currentColor" stroke-width=".7"/><circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width=".35"/>${Array.from({length:16},(_,i)=>{const a=i*Math.PI/8;return `<path d="M${50+Math.sin(a)*37} ${50+Math.cos(a)*37} ${50+Math.sin(a)*41} ${50+Math.cos(a)*41}" stroke="currentColor" stroke-width=".6"/>`;}).join('')}<path d="m50 5 8 37 37 8-37 8-8 37-8-37-37-8 37-8 8-37Z" fill="currentColor" opacity=".18"/><path d="m50 15 5 30 30 5-30 5-5 30-5-30-30-5 30-5 5-30Z" stroke="currentColor" stroke-width="1"/><path d="m50 20 5 25-5 5-5-5 5-25Z" fill="currentColor"/><circle cx="50" cy="50" r="3" fill="currentColor"/></svg>`;
export const NAV=[['atlas','compass','Explore','M'],['inventory','satchel','Satchel','I'],['craft','craft','Craft','C'],['build','build','Build','B'],['research','research','Research','R'],['production','industry','Industry',''],['journal','journal','Journal','J']];
export const PANEL_META={atlas:['FIELD ATLAS','Chart the unknown','compass'],inventory:['EXPEDITION STORES','Every resource has a purpose','satchel'],craft:['THE WORKSHOP','Materials become possibilities','craft'],build:['FIELDWORKS','Give the journey a home','build'],research:['RESEARCH ATLAS','Knowledge opens the world','research'],production:['CONNECTED INDUSTRY','Keep the outposts working','industry'],journal:['FIELD JOURNAL','A record of the remarkable','journal'],settings:['EXPEDITION SETTINGS','Make yourself at home','settings'],credits:['CREDITS & LICENSES','The makers behind this world','shield'],region:['REGIONAL SURVEY','At the edge of the known','compass'],tile:['FIELD INSPECTION','A closer look','search'],building:['STRUCTURE INSPECTION','Part of a connected world','build']};
export const matchText=(query,...parts)=>parts.join(' ').toLowerCase().includes(query.toLowerCase().trim());
