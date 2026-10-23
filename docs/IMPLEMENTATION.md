# Inspection and implementation record

## Source actually inspected

Repository `saveriobanchi/Claude-AETHERFORGE`, main commit `0ce12bb0b5643c1371f11a1ab9f494741e242a70`. Inspected README, ClaudeMobile README, architecture, package manifest, attribution, block rasteriser, material library, terrain/nature/building models, art catalogue, atlas runtime, palette, camera, gesture handlers, biome content, and deployment workflow. The source checkout remains clean.

The repository is a mobile-first web implementation. No Unity ProjectSettings, Unity scenes, URP materials, or Unity version file exists there. Its package declares PixiJS 8.21, TypeScript 5.9, Vite 7.3, and Capacitor 7.4. The actual projection is `(x-y)*32, (x+y)*16-z*32`, giving 64x32 tile geometry. “64 PPU” is not a meaningful Unity setting in this browser source.

Rendering: CPU-baked textured block faces, z-buffer, warm top lighting, violet side shade, sun shadows, AO, emissive lights and outlines. Original textures are 16x16, projected at two pixels per texel. The original world is a floating island expanded tile by tile, with real conveyors, a global breeze power pool and four biome modifiers. Original UI uses DOM/CSS and baked material frames. Original input uses pointer capture, pan/pinch, wheel, long press; camera supports easing/inertia. Original persistence uses IndexedDB/localStorage, migrations and backups; CI deploys Pages and builds an Android wrapper.

## New architecture

- `src/data.js`: biome ecology, authored landmarks, resources, recipes, technologies and structure definitions.
- `src/sim.js`: deterministic world/discovery generation, all economic commands, fixed-step simulation, production, progression, restoration and save validation.
- `src/render.js`: atlas consumption, depth sorting, visibility culling, camera, pointer/touch input, the ivory veil and reveal effects.
- `src/main.js`: connected UI, onboarding bearings, command routing, feedback and autosave orchestration.
- `src/storage.js`: atomic IndexedDB writes with verified previous backup, localStorage fallback and page-hide recovery; bounded offline simulation.
- `src/audio.js`: original lightweight synthesized soundscape.
- `src/render/blocks/exploration.ts`: new biome-specific terrain, vegetation, ore and landmark models using the adapted renderer.

The world has 2,352 tile positions in twelve contiguous/branching 14x14 regions, all generated from a persisted 32-bit seed. Trees, rocks and herbs replenish; guaranteed resource nodes ensure no seed deadlocks. Each biome has three terrain, flora and mineral variants, plus a signature landmark. The veil conceals all locked gameplay content; frontier markers sit on accessible territory. Resource logistics are abstracted through regional outposts and shared stock. Storage is uncapped so mandatory production cannot be lost through overflow. Warehouses improve offline allowance. Day length is six minutes; tide phase is independent.

Saves use a named format, version 2, checksum, immutable geography reconstruction, range validation and a verified backup. Version 1 of this game's schema migrates settings and completion fields. Aetherforge's original island saves are intentionally incompatible. Export before replacing a world. Autosave is asynchronous; explicit save/export is provided for browsers whose close-time events are restricted.

## Scope and limits

This is a complete browser progression game with an attainable ending and persistent infrastructure. It is not represented as a commercial release or a Unity build. There is no native Windows executable or iOS binary. Native Safari and physical iPhone GPU, thermal, safe-area and audio behavior require device testing. The current map has twelve authored biome sectors rather than unlimited generation. Transport is shared-stock outpost logistics, not animated item conveyors. There is no multiplayer or cloud save.

The simulation bot proves economic reachability, not subjective fun or hours of human balancing. Browser tests verify actual interactions and rendering in Chromium emulation; screenshots of fully revealed biomes are visual QA fixtures rather than evidence of manual progression. The final delivery report distinguishes verified deployment from a configured workflow.
