# Aetherforge: White Horizon

An isometric exploration and infrastructure game, developed separately in **GptForge**. Begin in Hearthgrove, surrounded by an ivory unknown. Survey frontiers, equip expeditions, build regional industry, and restore twelve ancient landmarks to awaken the Horizon Array.

## Play

**Live game:** https://aetherforge-white-horizon.banchisaverio.chatgpt.site (owner-private Sites hosting; sign in with the owning ChatGPT account).

**Download the verified browser build:** https://github.com/saveriobanchi/GptForge/actions/runs/40031165692/artifacts/12535780007

The production browser build is also generated locally in `dist/`. GitHub Actions passed installation, all simulation tests, production compilation and browser QA. Initial GitHub Pages activation was denied with `Resource not accessible by integration`; the game was successfully published to Sites instead. To enable the optional Pages mirror, open **Settings → Pages → Build and deployment → Source: GitHub Actions**, then rerun the workflow. No repository visibility change is needed. See [deployment details](docs/DEPLOYMENT.md).

```sh
npm ci
npm test
npm run build
npm start
```

Open **http://localhost:4173**. No runtime account, API key, external CDN or backend is required. Use Safari/Chrome's **Add to Home Screen** for an app-like presentation. Saves are local to each browser; export/import in Settings transfers a world between devices.

**Controls:** tap/click to gather or inspect; drag to pan; pinch/wheel to zoom. `B` build, `C` craft, `R` research, `M` atlas, `I` satchel, `J` journal, `Space` pause, `Esc` back. Buildings are placed on empty ground; each region needs one outpost to connect its machines. Inspect harvesters to change their resource and foundries to change their recipe.

## A connected world

Twelve playable biomes: Hearthgrove, Amberstep Plains, Copperbark Wilds, Saltwind Estuary, Grayspire Highlands, Frostmere, Vesperfen, Luminbloom Glade, Mycelian Deep, Cinderreach, Nightglass Expanse, and Aetherveil.

The game includes renewable gathering, 29 resources, 18 batch crafting recipes, 15 research projects, 19 building types with four upgrade levels, shared outpost logistics, power, automated extraction/processing, tides, weather, day/night effects, cold protection, fungal networks, geothermal energy, 48 weighted discovery sites, twelve authored landmarks, restoration, a main ending, and post-ending research. Two rare sites and one extraordinary site are guaranteed in every seed; critical progression never depends on them.

All menus drive the simulation: inventory, workshop, building, research, world atlas, structure inspection, production ledger, journal, settings, save export/import, new game, and continue.

## Reference and engineering decisions

Inspected [saveriobanchi/Claude-AETHERFORGE](https://github.com/saveriobanchi/Claude-AETHERFORGE) at commit `0ce12bb0b5643c1371f11a1ab9f494741e242a70`. That repository contains `ClaudeMobile`, a **TypeScript/PixiJS browser game**, not a Unity project. The new game adapts its textured block rasteriser, baking pipeline, CC0 textures, building models, isometric geometry, and fonts. New biome art uses the same renderer. The original repository was only read and cloned, never changed.

This deliverable is a browser edition, using the reference's actual web architecture and artwork. It is **not a Unity 6.3 project, Unity WebGL export, or Windows standalone build**. Unity and a Unity build license were unavailable. Canvas 2D consumes three pre-baked sprite atlases; pure JavaScript simulation is independent of rendering and DOM. Outposts provide automatic shared-stock transport rather than physical conveyor belts. See [the inspection and architecture notes](docs/IMPLEMENTATION.md).

## Artwork and licensing

The checked-in `public/art/` contains 1,299 baked frames. Their source renderer is in `src/render/blocks/`; new biome artwork is in `exploration.ts`. The original CC0 texture inputs are losslessly packaged in `art/cc0-source.tar.gz` to keep the checkout compact. `npm run art` unpacks and rebuilds all artwork. Font and asset attribution is retained in [docs/REFERENCE_ASSETS.md](docs/REFERENCE_ASSETS.md), [THIRD_PARTY_ASSETS.md](THIRD_PARTY_ASSETS.md), and `licenses/`.

## Verification

`npm test` checks 100 deterministic seeds, resource coverage, connected geography, locked-region protection, spending/crafting invariants, automated production, biome rules, unique rewards, and save reconstruction. It also completes five full simulated playthroughs using ordinary gathering/crafting/research commands, without granting resources, including every biome, every building and upgrades, restoration, ending and mastery.

`python tests/browser.py` exercises the production build in Chromium: mouse gathering, all major menus, building placement, crafting, save/continue, mobile portrait and landscape navigation, and touch pan/pinch. It writes screenshots and a factual report to `test-results/`. Requires Python Playwright and Chromium. The workflow installs these. Device emulation is not a substitute for physical iPhone Safari verification.
