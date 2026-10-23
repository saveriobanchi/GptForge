"""Browser QA against the production build. Requires Playwright and Chromium."""
import json,os
from playwright.sync_api import sync_playwright
os.makedirs('test-results',exist_ok=True)
errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 context=browser.new_context(viewport={'width':1440,'height':900},device_scale_factor=1)
 page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:4173/?qa',wait_until='networkidle')
 page.get_by_role('button',name='Begin a new expedition').click();page.locator('#seed').fill('1907');page.get_by_role('button',name='Set out into the white').click()
 page.wait_for_timeout(300)
 for tab in ['Explore','Satchel','Craft','Build','Research','Industry','Journal']:
  page.get_by_role('button',name=tab,exact=True).click();assert page.locator('.panel').is_visible(),tab
  page.get_by_role('button',name='Close panel').click()
 # Tap a world resource; selection and gather use the same real canvas gesture.
 hit=page.evaluate("""()=>{let g=__game,t=g.state.tiles.find(t=>t.r===0&&t.kind==='ore'&&t.x>2&&t.y>8),p={x:(t.x-t.y)*32,y:(t.x+t.y+1)*16};let v=g.view.screen(p.x,p.y-15);return {id:t.id,x:v.x,y:v.y};}""")
 before=page.evaluate('__game.state.stats.gathered');page.mouse.click(hit['x'],hit['y']);page.wait_for_timeout(150)
 assert page.evaluate('__game.state.stats.gathered')>before,'mouse gathering'
 page.get_by_role('button',name='Close panel').click()
 # Place a survey tower with real build UI + canvas.
 page.get_by_role('button',name='Build',exact=True).click()
 page.locator('.entry').filter(has=page.get_by_role('heading',name='Survey tower',exact=True)).get_by_role('button',name='Place structure').click()
 pt=page.evaluate("""()=>{let g=__game,t=g.state.tiles.find(t=>t.r===0&&t.kind==='empty'&&t.x===7&&t.y===9),p=g.view.screen((t.x-t.y)*32,(t.x+t.y+1)*16);return p;}""")
 page.mouse.click(pt['x'],pt['y']);assert page.evaluate("__game.state.buildings.some(b=>b.type==='surveyor')")
 page.get_by_role('button',name='Done',exact=True).click()
 # Craft a real recipe and verify result with simulation time advanced through the same tick.
 page.get_by_role('button',name='Craft',exact=True).click();page.locator('.entry').filter(has=page.get_by_role('heading',name='Saw planks',exact=True)).get_by_role('button',name='Craft ×1',exact=True).click()
 page.evaluate('__game.sim.simulate(__game.state,4)');page.wait_for_timeout(800)
 assert page.evaluate('(__game.state.inventory.plank||0)>=3')
 page.get_by_role('button',name='Close panel').click()
 # Save/reload/continue reconstructs seed, inventory, infrastructure.
 page.get_by_role('button',name='Save world').click();page.wait_for_timeout(300)
 snapshot=page.evaluate('({seed:__game.state.seed,buildings:__game.state.buildings.length,plank:__game.state.inventory.plank})')
 page.reload(wait_until='networkidle');page.get_by_role('button',name='Continue your journey').click();page.wait_for_timeout(300)
 assert page.evaluate('__game.state.seed')==snapshot['seed'];assert page.evaluate('__game.state.buildings.length')==snapshot['buildings'];assert page.evaluate('__game.state.inventory.plank')==snapshot['plank']
 page.screenshot(path='test-results/desktop-play.png')
 # Frame-time sample, measured only in this headless environment.
 timing=page.evaluate("""async()=>{let a=[],prev=performance.now();for(let i=0;i<60;i++){let n=await new Promise(requestAnimationFrame);a.push(n-prev);prev=n;}return {meanMs:a.reduce((x,y)=>x+y)/a.length,maxMs:Math.max(...a)};}""")
 # Demonstrate all twelve rendered biomes for visual inspection, without calling it a player playthrough.
 page.evaluate("""()=>{let g=__game;g.state.regions.forEach(r=>r.unlocked=true);g.view.camera.zoom=.36;g.view.camera.x=180;g.view.camera.y=90;}""");page.wait_for_timeout(200);page.screenshot(path='test-results/world-overview.png')
 for r in [3,5,8,9,10,11]:
  page.evaluate(f"document.querySelector('[aria-label=Explore]').click(); document.querySelector('[data-action=\"region:{r}\"]').click(); document.querySelector('[data-action=close]').click()");page.wait_for_timeout(150);page.screenshot(path=f'test-results/biome-{r}.png')
 context.close()
 for width,height,label in [(844,390,'phone-landscape'),(390,844,'phone-portrait')]:
  ctx=browser.new_context(viewport={'width':width,'height':height},device_scale_factor=2,is_mobile=True,has_touch=True)
  pg=ctx.new_page();pg.on('pageerror',lambda e:errors.append(str(e)));pg.goto('http://127.0.0.1:4173/?qa',wait_until='networkidle');pg.get_by_role('button',name='Begin a new expedition').tap();pg.get_by_role('button',name='Set out into the white').tap();pg.wait_for_timeout(250)
  pg.evaluate("window.qaClicks=[];document.addEventListener('click',e=>qaClicks.push(e.target.closest('[data-action]')?.dataset.action))")
  # Touch panning changes camera, without accidentally harvesting.
  before=pg.evaluate('({x:__game.view.camera.x,g:__game.state.stats.gathered})')
  client=ctx.new_cdp_session(pg)
  client.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':width/2,'y':height/2}]})
  client.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':width/2+40,'y':height/2}]})
  client.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
  assert pg.evaluate('__game.view.camera.x')!=before['x'];assert pg.evaluate('__game.state.stats.gathered')==before['g']
  # Pinch changes zoom and never harvests.
  old=pg.evaluate('__game.view.camera.zoom')
  client.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':width/2-30,'y':height/2,'id':1},{'x':width/2+30,'y':height/2,'id':2}]})
  client.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':width/2-30,'y':height/2,'id':1},{'x':width/2+70,'y':height/2,'id':2}]})
  client.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
  pg.wait_for_timeout(300)  # Wait for Chromium to finish delivering the multi-touch gesture.
  assert pg.evaluate('__game.view.camera.zoom')>old
  for tab in ['Explore','Satchel','Craft','Build','Research','Industry','Journal']:
   pg.get_by_role('button',name=tab,exact=True).tap();pg.locator('.panel').wait_for(state='visible',timeout=4000);box=pg.locator('.panel').bounding_box();assert box['x']>=0 and box['x']+box['width']<=width+1;pg.get_by_role('button',name='Close panel').tap()
  pg.get_by_role('button',name='Craft',exact=True).tap();pg.wait_for_timeout(250);pg.screenshot(path=f'test-results/{label}.png');ctx.close()
 browser.close()
assert not errors,errors
result={'browserErrors':errors,'desktop':'pass','mouseGather':'pass','buildPlacement':'pass','crafting':'pass','saveContinue':'pass','touchPanPinch':'pass','mobileLandscapePortraitMenus':'pass','headlessDesktopFrameTiming':timing}
open('test-results/browser-report.json','w').write(json.dumps(result,indent=2));print(json.dumps(result,indent=2))
