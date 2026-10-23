"""UI 1.1 integration checks against the audited production build."""
import json, os
from playwright.sync_api import sync_playwright

os.makedirs('test-results',exist_ok=True)
errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 ctx=browser.new_context(viewport={'width':1440,'height':1000})
 page=ctx.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:4173/?qa',wait_until='networkidle')
 page.wait_for_timeout(180);page.screenshot(path='test-results/ui-title.png')
 page.get_by_role('button',name='Begin a new expedition').click()
 page.get_by_role('button',name='Set out into the white').click()
 page.wait_for_timeout(180);page.screenshot(path='test-results/ui-world.png')
 page.get_by_role('button',name='Craft',exact=True).click()
 search=page.get_by_role('searchbox',name='Search recipes')
 search.click();search.press_sequentially('plank',delay=30)
 assert search.input_value()=='plank'
 assert page.evaluate('document.activeElement.dataset.search')=='craft','search caret must survive filtering'
 assert page.locator('.recipe-entry').count()==1
 assert page.locator('.ingredient-name').inner_text()=='Timber'
 page.get_by_role('button',name='×5',exact=True).click()
 assert page.locator('.ingredient strong').inner_text().endswith('/10')
 search.fill('');page.get_by_role('button',name='All recipes',exact=True).click()
 assert page.locator('.recipe-entry').count()==18
 assert page.locator('.locked-entry').count()>0
 page.wait_for_timeout(180);page.screenshot(path='test-results/ui-workshop.png')
 page.locator('[data-action="showtech:metal"]').first.click()
 assert page.locator('#tech-metal').is_visible()
 assert page.locator('#tech-metal').bounding_box()['y']<950
 assert page.locator('#tech-metal [data-action="research:metal"]').is_disabled()
 page.locator('#tech-metal [data-action="showtech:survey"]').click()
 assert page.locator('#tech-survey').is_visible()
 page.wait_for_timeout(180);page.screenshot(path='test-results/ui-research.png')
 page.get_by_role('button',name='Satchel',exact=True).click()
 page.get_by_role('searchbox',name='Search supplies').fill('copper')
 assert page.locator('.inventory-item').count()==2
 page.locator('.inventory [data-action="resource:copper"]').click()
 assert page.get_by_role('dialog').get_attribute('aria-labelledby')=='modal-title'
 assert page.locator('#modal-title').inner_text()=='Copper ore'
 page.get_by_role('button',name='Pin to supplies',exact=True).click()
 assert page.locator('.resource-ribbon [data-action="resource:copper"]').count()==1
 page.keyboard.press('Tab');assert page.evaluate('!!document.activeElement.closest(".modal")'),'modal keyboard focus stays inside dialog'
 page.wait_for_timeout(180);page.screenshot(path='test-results/ui-resource.png')
 page.keyboard.press('Escape');assert not page.locator('.modal').count()
 page.get_by_role('button',name='Close panel').click()
 page.get_by_role('button',name='Settings',exact=True).click()
 page.locator('[data-action="setting:largeText"]').click()
 assert page.locator('body').get_attribute('class').find('large-text')>=0
 page.get_by_role('button',name='View credits',exact=True).click()
 assert page.get_by_text('Asset audit complete',exact=True).is_visible()
 for url in ['ASSET_LICENSES.md','asset-manifest.json','licenses/VT323-OFL.txt']:
  r=ctx.request.get('http://127.0.0.1:4173/'+url);assert r.ok,url
 page.wait_for_timeout(180);page.screenshot(path='test-results/ui-credits.png')
 page.get_by_role('button',name='Close panel').click()
 page.get_by_role('button',name='Save world').click()
 page.wait_for_function('!document.querySelector("[data-save-status]") || document.querySelector("[data-save-status]").textContent!=="Saving…"')
 page.reload(wait_until='networkidle');page.get_by_role('button',name='Continue your journey').click()
 assert page.locator('.resource-ribbon [data-action="resource:copper"]').count()==1
 assert page.evaluate('__game.state.settings.largeText') is True
 # Offline recovery includes actual game media and required license notices.
 page.evaluate('async()=>{await navigator.serviceWorker.ready;}')
 page.wait_for_function('!!navigator.serviceWorker.controller')
 ctx.set_offline(True);page.goto('http://127.0.0.1:4173/',wait_until='load')
 page.get_by_role('button',name='Continue your journey').click()
 page.locator('.dock').wait_for(state='visible',timeout=5000)
 assert page.evaluate("async()=>{let r=await fetch('./licenses/VT323-OFL.txt');return r.ok}")
 ctx.set_offline(False);ctx.close()
 for width,height,label in [(844,390,'landscape'),(390,844,'portrait')]:
  context=browser.new_context(viewport={'width':width,'height':height},device_scale_factor=2,is_mobile=True,has_touch=True)
  pg=context.new_page();pg.on('pageerror',lambda e:errors.append(str(e)))
  pg.goto('http://127.0.0.1:4173/?qa',wait_until='networkidle');pg.get_by_role('button',name='Begin a new expedition').tap();pg.get_by_role('button',name='Set out into the white').tap()
  pg.get_by_role('button',name='Satchel',exact=True).tap();pg.get_by_role('searchbox',name='Search supplies').fill('stone')
  pg.locator('.inventory [data-action="resource:stone"]').tap()
  pg.get_by_role('button',name='Unpin from supplies').tap()
  assert 'stone' not in pg.evaluate('__game.state.settings.pinnedResources'),'one tap must activate exactly once'
  pg.get_by_role('button',name='Pin to supplies').tap()
  assert pg.evaluate('__game.state.settings.pinnedResources.filter(x=>x==="stone").length')==1
  pg.get_by_role('button',name='Back to the expedition').tap();pg.get_by_role('button',name='Close panel').tap()
  pg.get_by_role('button',name='Build',exact=True).tap();pg.get_by_role('button',name='All structures',exact=True).tap()
  # No horizontal page/panel overflow at either phone orientation.
  assert pg.evaluate('document.documentElement.scrollWidth<=innerWidth')
  assert pg.locator('.panel-body').evaluate('(e)=>e.scrollWidth<=e.clientWidth+1')
  pg.wait_for_timeout(180);pg.screenshot(path=f'test-results/ui-phone-{label}.png')
  context.close()
 browser.close()
assert not errors,errors
report={'browserErrors':errors,'searchAndCaret':'pass','recipeBatchAndLocks':'pass','researchLinks':'pass','resourcePinPersistence':'pass','modalKeyboard':'pass','largeTextPersistence':'pass','creditsAndNotices':'pass','offlineGameAndLicenseNotices':'pass','phoneTouchSingleActivationAndLayout':'pass'}
open('test-results/ui-report.json','w').write(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
