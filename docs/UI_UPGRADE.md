# White Horizon 1.1

The interface uses the original game’s baked oak, iron and brass UI textures, a spruce/ivory palette, Pixelify display text, Atkinson reading text, and VT323 numerals. The compass rose and tool glyphs are original SVG code. No external UI asset packs were added.

- Main menu: authored compass branding, a saved-expedition summary and direct continue/new-game actions.
- HUD: named, clickable supply slots with up to five persistent resource pins, a contextual next-bearing action, real queue/research/expedition activity, and world navigation.
- Catalogue panels: search that preserves typing focus/caret, remembered filters, visible owned/required costs, batching, empty states, genuine locked progression and links to the needed research.
- Fieldworks: regional prerequisites and current outpost status, with structures that can be built here listed first. Every placement remains a real world operation.
- Research: a connected timeline with prerequisite navigation and current progress. Production: searchable/filterable regional ledger, machine status, cycles, power and pause/inspect actions.
- Atlas/journal: a geographical map with concealed locked sectors, revealed biome artwork, actual discovery records and landmark return actions.
- Comfort: keyboard modal focus containment, Escape handling, reduced interface motion, persistent larger text, coarse-pointer touch targets, safe-area-aware phone layouts, and compact landscape search/filter controls.
- Credits: recorded creators, source links, retained notices and the downloadable file-by-file register. License notices are cached alongside the offline game.

Regression checks found and fixed a first-click suppression bug on fast/offline startup, repeated entry fades while filtering, and scroll positions leaking between different panels. Simulation/save formats and the twelve-biome economy remain compatible with existing worlds.
