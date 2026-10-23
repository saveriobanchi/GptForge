# Verified delivery checks

## Version 1.1 — 2026-10-23

- Asset verification: 627 of 627 texture PNGs independently match decoded pixels in the creators’ official download archives. All five upstream archive SHA-256 values matched. The retained Kenney notice, three official font binaries, all full notices, and derived atlas files are bound by file hashes. The complete current inventory is in `ASSET_MANIFEST.json`; original code remains covered by project-specific owner permission.
- Build gate: all 11 Node tests passed, including deliberate changed-font, unknown-image, changed-lockfile, and unknown-CI-action rejection tests. The existing 100-seed checks and five full ordinary-command completion runs remain green. Production compilation passed with the audit gate enabled.
- Registry security query: npm reported zero known advisories on 2026-10-23. This is a dated registry result, not a guarantee against undiscovered vulnerabilities.
- New UI integration suite: zero page errors; search/caret retention, learned/all filters, batch costs, locked recipe research links, prerequisite navigation, resource details and pin persistence, modal keyboard handling, larger-text persistence, credits/register/license links, offline continue and offline license notices passed.
- New touch UI checks: portrait 390×844 and landscape 844×390; resource pinning activates once per tap, panels have no horizontal overflow, and structure filters remain functional. Actual screenshots: `test-results/ui-*.png`.
- Fixes verified during this pass: an early mouse click could be incorrectly suppressed on fast/offline startup; search/filter rerenders restarted panel entry fades; panel scroll positions leaked between unrelated menus. All three are corrected.
- Physical iPhone Safari, native builds, and long human balancing sessions remain untested.

The complete 1.1 source also passed GitHub Actions run `40037746323`: dependency installation, all Node checks, production compilation, both browser suites and build/QA artifact uploads. Native Sites deployment `appgdep_6adbe8e4624c8191a7c8f861bff8af65` succeeded at 23:08:35 UTC on 2026-10-23.

Nine actual published files were retrieved through the owner-private host authorization and compared byte-for-byte with the tested build: HTML, game code, stylesheet, service worker, provenance register, asset credits, Pixelify copyright/license notice, VT323 font and the first atlas. All matched. No private authorization token was saved to disk or included in reports.

## Original 1.0 delivery (historical)

- Production build: esbuild bundle, static assets and all three atlases emitted successfully.
- Node simulation suite: 9 tests passed. Includes 100 deterministic seeds and five ordinary-command full simulated playthroughs, with all twelve regions, every building type, upgrades, all discoveries, restoration, the ending and post-ending mastery. No resource grants are used in these playthroughs.
- Save checks: checksum rejection, negative inventory rejection, immutable seed reconstruction, one-time rewards, pending expedition reconstruction, infrastructure upgrades, version-1 migration and invalid production target rejection.
- Chromium browser QA: zero page errors; actual mouse gathering, building placement, crafting, save/reload/continue, and all seven navigation sections passed.
- Chromium mobile emulation: 844×390 landscape and 390×844 portrait, touch pan and pinch, menus fitting within viewport, and panel interaction passed. A real touch event sequence exposed delayed compatibility-click issues; pointer-release activation and duplicate-click suppression were implemented and verified.
- Headless desktop sample at 1440×900: 60 animation frames averaged 16.52 ms (maximum 16.80 ms) in the tested initial world. This is an environment-specific sample, not an iPhone performance claim.
- Screenshots in local `test-results/` show actual rendering. The all-region screenshots use a visual QA fixture with regions revealed, while economic completion is independently verified by the simulation bot.
- Reference checkout is clean and no remote write was made to Claude-AETHERFORGE.

Not verified: physical iPhone Safari, Windows standalone execution, native iOS/Android packaging, Unity compilation, long-duration human balancing, and device thermal/battery behavior. Deployment success is reported separately after the host returns a successful result.

## Additional integration and deployment results

The same game source passed GitHub Actions installation, all nine simulation tests, production build and browser QA in run `40031165692`. The verified build and screenshot/report artifacts were uploaded successfully. Only the initial Pages activation failed because the Actions token lacked repository administration permission.

An additional actual-browser interaction check passed research, frontier survey, expedition launch, the Copperbark reveal animation, and saving/reloading immediately after unlock. Supplies for this UI check were prepared using ordinary gathering commands; inventory grants were not used.

The native Sites deployment returned `succeeded` on 2026-10-23 at 22:10 UTC, with owner-private access and URL https://aetherforge-white-horizon.banchisaverio.chatgpt.site. The hosted game and atlases match the verified GitHub game source.
