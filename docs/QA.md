# Verified delivery checks

- Production build: esbuild bundle, static assets and all three atlases emitted successfully.
- Node simulation suite: 9 tests passed. Includes 100 deterministic seeds and five ordinary-command full simulated playthroughs, with all twelve regions, every building type, upgrades, all discoveries, restoration, the ending and post-ending mastery. No resource grants are used in these playthroughs.
- Save checks: checksum rejection, negative inventory rejection, immutable seed reconstruction, one-time rewards, pending expedition reconstruction, infrastructure upgrades, version-1 migration and invalid production target rejection.
- Chromium browser QA: zero page errors; actual mouse gathering, building placement, crafting, save/reload/continue, and all seven navigation sections passed.
- Chromium mobile emulation: 844×390 landscape and 390×844 portrait, touch pan and pinch, menus fitting within viewport, and panel interaction passed. A real touch event sequence exposed delayed compatibility-click issues; pointer-release activation and duplicate-click suppression were implemented and verified.
- Headless desktop sample at 1440×900: 60 animation frames averaged 16.52 ms (maximum 16.80 ms) in the tested initial world. This is an environment-specific sample, not an iPhone performance claim.
- Screenshots in local `test-results/` show actual rendering. The all-region screenshots use a visual QA fixture with regions revealed, while economic completion is independently verified by the simulation bot.
- Reference checkout is clean and no remote write was made to Claude-AETHERFORGE.

Not verified: physical iPhone Safari, Windows standalone execution, native iOS/Android packaging, Unity compilation, long-duration human balancing, and device thermal/battery behavior. Deployment success is reported separately after the host returns a successful result.
