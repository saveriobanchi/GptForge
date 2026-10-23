# Asset licenses and provenance

Audit date: **2026-10-23**. Scope: the current White Horizon distribution and the source inputs included in this repository.

**627 PNG texture files and 1 upstream notice file were matched or verified; all three shipped fonts were sourced from the official Google Fonts repository.** Every included external asset is listed below. Exact local and upstream hashes, archive member paths, dependencies, and the verification method are in [ASSET_MANIFEST.json](ASSET_MANIFEST.json).

## What changed from the previous delivery

- The previous delivery retained upstream attribution but had no complete independent asset audit or ASSET_LICENSES.md. This audit closes that gap; it does not retroactively claim that the earlier process was complete.
- The Assorted pack reference was corrected from a single-texture page to JoeEnderman’s full collection and both original download archives. Every retained texture matched the upstream pixels.
- Pixelify Sans and Atkinson Hyperlegible matched official font bytes exactly. Their official license notices were refreshed. The older VT323 WOFF2 was removed from the current distribution and replaced with the unchanged, officially sourced TTF.
- No ripped game assets, sampled music, unknown-owner images, or unverified new asset packs were added. Interface vectors and audio are original project code.

## Permission checks for the actual use

| Material | Commercial game | Modifications | Static web distribution | Public GitHub redistribution | Conditions |
| --- | --- | --- | --- | --- | --- |
| CC0 1.0 textures | Permitted | Permitted | Permitted | Permitted | No attribution obligation; creators are credited voluntarily. CC0 legal text is retained in licenses/CC0-1.0.txt. |
| SIL OFL 1.1 fonts | Permitted as part of the game | Permitted subject to OFL/RFN rules | Permitted | Permitted | Retain copyright and complete OFL notice. Fonts may not be sold by themselves. Modified fonts must obey any Reserved Font Name rules. Current font bytes are unmodified. |
| MIT build/QA tools and actions | Permitted | Permitted | Permitted if redistributed | Permitted if redistributed | Retain copyright and permission notices with copies/substantial portions. Build and QA tools are not runtime game dependencies. Notices are included anyway. |
| Apache 2.0 Playwright QA | Permitted | Permitted with notices/change marking | Permitted subject to Apache terms | Permitted subject to Apache terms | External QA tool, not copied into the browser game. Its original license notice is retained. |
| PSF 2.0 QA components | Permitted | Permitted under license terms | Permitted under license terms | Permitted under license terms | External QA-only packages; preserve their full notices if redistributing them. No endorsement is granted. |
| Owner-original Aetherforge code/models | Owner-authorized for this game | Owner-authorized for this game | Owner-authorized for this game | Owner requested this repository | Not a blanket third-party commercial license or an open-source license grant. Original repository is unchanged. |

## Verified texture sources

### A1 — 16x16 Block Texture Set

Creator: **ARoachIFoundOnMyPillow**. Source: [https://opengameart.org/content/16x16-block-texture-set](https://opengameart.org/content/16x16-block-texture-set). License: **CC0-1.0** ([legal text](licenses/CC0-1.0.txt)). Required credit: **none**. Voluntary credit: ARoachIFoundOnMyPillow.

Author: ARoachIFoundOnMyPillow. License(s): CC0. “Some 16x16 block and plant textures that I’ve made…”

Files were losslessly re-encoded upstream of this project; the decoded content was verified against the creator archives. Names with an `_alt` suffix are local collision renames; their exact original members are recorded in the JSON manifest.

| Local file | Creator | Verified source | License | Required credit |
| --- | --- | --- | --- | --- |
| `art/cc0/blocks-a/!TILEMAP.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/amethyst.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/basalt.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/basalt_flow.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/beech_leaves.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/beech_log_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/beech_log_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/beech_planks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/cobblestone.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/cobblestone_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/cobblestone_bricks_mossy.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/cobblestone_mossy.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_brain.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_brain_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_cauliflower.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_cauliflower_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_pore.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_pore_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_star.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/coral_block_star_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/diorite.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/diorite_dirty.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/dirt.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/eucalyptus_leaves.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/eucalyptus_log_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/eucalyptus_log_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/eucalyptus_planks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/farmland.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/gabbro.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/glass.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/granite.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/granite_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/grass_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/grass_snowy_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/grass_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/gravel.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/hay_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/hay_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/ice_glacier.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/ice_icicles.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/limestone.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/limestone_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/maple_leaves.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/maple_log_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/maple_log_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/maple_planks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/marble.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/marble_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/marble_bricks2.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/marble_bricks3.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/mud.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/mud_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/mud_cracked.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/oak_leaves.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/oak_log_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/oak_log_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/oak_planks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/obsidian.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/pine_leaves.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/pine_log_side.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/pine_log_top.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/pine_planks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/agapanthus.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/aloe.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/amethyst_crystal.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/aster.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/bird_of_paradise.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/bottlebrush.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/cactus_cholla.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/cactus_pricklypear.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/cattail.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_brain.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_brain_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_cauliflower.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_cauliflower_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_pore.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_pore_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_star.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/coral_star_bleached.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/creosote.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/carrots_stage1.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/carrots_stage2.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/carrots_stage3.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/carrots_stage4.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/wheat_stage1.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/wheat_stage2.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/wheat_stage3.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/wheat_stage4.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/crops/wheat_stage5.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/dandelion.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/dicot.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/fern.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/fern2.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/fiddleneck.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/forget_me_not.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/ginger.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/goldenrod.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/grass.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/grass2.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/grass3.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/grass_tall.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/grass_tall_flowering.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/horsetail.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/iris_yellow.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/lily.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/limestone_stromatolite.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/lupine.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/manzanita.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/mayflower.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/monstera.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/mugwort.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/mushroom_brown.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/mushroom_red.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/mustard.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/nightshade.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/orchid_ground.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/orchid_waxlip.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/oxeye_daisy.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/pimpernel.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sagebrush.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sapling_beech.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sapling_eucalyptus.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sapling_maple.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sapling_oak.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sapling_pine.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sea_thrift.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/sedge.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/spiderweb.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/thistle.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/plants/waterlily.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/rhyolite.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/rhyolite_tiles.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sand_ugly.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sand_ugly_2.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sand_ugly_3.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sandstone.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sandstone_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sandstone_carved.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/sandstone_tiles.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/schist.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/serpentine.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/serpentine_bricks.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/serpentine_carved.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/slate.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/slate_tiles.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/snow.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/stone_generic.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/stone_generic_ore_crystalline.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |
| `art/cc0/blocks-a/stone_generic_ore_nuggets.png` | ARoachIFoundOnMyPillow | [A1] | CC0-1.0 | None |

### A2 — 16*16 Block Textures

Creator: **ARoachIFoundOnMyPillow**. Source: [https://opengameart.org/content/1616-block-textures](https://opengameart.org/content/1616-block-textures). License: **CC0-1.0** ([legal text](licenses/CC0-1.0.txt)). Required credit: **none**. Voluntary credit: ARoachIFoundOnMyPillow.

Author: ARoachIFoundOnMyPillow. License(s): CC0. “Some 16x16 block textures I created over the years…”

Files were losslessly re-encoded upstream of this project; the decoded content was verified against the creator archives. Names with an `_alt` suffix are local collision renames; their exact original members are recorded in the JSON manifest.

| Local file | Creator | Verified source | License | Required credit |
| --- | --- | --- | --- | --- |
| `art/cc0/blocks-b/Limestone.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/Shale.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/Snakewood_side.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/Snakewood_side_no_vine.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/Snakewood_top.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/andesite.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/cobblestone.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/diorite.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/dirt.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/ginkgo_leaves.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/granite.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/gravel.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/hell_rock.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/hell_rock_2.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/layer_rock.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/mossy_cobblestone.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/mudstone.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/old_clay.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/old_dirt.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/old_grass_side.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/old_grass_top.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/sand.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |
| `art/cc0/blocks-b/stone.png` | ARoachIFoundOnMyPillow | [A2] | CC0-1.0 | None |

### A3 — Assorted Minecraft style textures

Creator: **JoeEnderman**. Source: [https://opengameart.org/content/assorted-minecraft-style-textures](https://opengameart.org/content/assorted-minecraft-style-textures). License: **CC0-1.0** ([legal text](licenses/CC0-1.0.txt)). Required credit: **none**. Voluntary credit: JoeEnderman.

Author: JoeEnderman. License(s): CC0. “I was making a texture pack… here are a bunch of assorted CC0 pieces.”

Files were losslessly re-encoded upstream of this project; the decoded content was verified against the creator archives. Names with an `_alt` suffix are local collision renames; their exact original members are recorded in the JSON manifest.

| Local file | Creator | Verified source | License | Required credit |
| --- | --- | --- | --- | --- |
| `art/cc0/assorted/Aspen wood planks.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Cayenne pepper.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Devil's down alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Devil's down.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Hades Hinge.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Murexium mineral.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Murexium ore.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/Thai chilis.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/animalia_guano_bucket.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/animalia_milk_bucket.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/apple eaten.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/apple gold.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/apple green 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/apple redo.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/badland_bowl.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/badland_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/badland_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bambooforest_bamboo_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bambooforest_bamboo_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/banana 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bell pepper.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/blue banana 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/blue potato.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/blue tomato.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bread hunger.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bronze ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bubble.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bucket.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bucket_cactus.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bucket_lava.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bucket_overlay.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bucket_river_water.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/bucket_water.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/carrot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/cherry blossom wood plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/cherry.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/chicken_noodle_soup.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/coins_bucket_scrap_gold.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/copper ingot 1.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/copper ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/corn.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/crystal 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/crystal.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/dark wood plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_acacia_sapling.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_acacia_tree_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_acacia_wood.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_apple.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_apple_gold.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_aspen_sapling.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_aspen_tree.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_aspen_wood.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_bronze_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_bronze_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_coal_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_coal_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_cobble.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_copper_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_copper_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_copper_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_coral_skeleton.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_desert_sand_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_desert_sand_alt_2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_desert_sandstone.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_desert_sandstone_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_desert_sandstone_brick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_diamond.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_diamond_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_diamond_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_diamond_block_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_dry_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_dry_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_glass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_glass_detail.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_gold_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_gold_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_gold_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_grass_side_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_iron_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_junglesapling.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_junglewood.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mese_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mese_block_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mese_crystal.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mese_crystal_fragment.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_coal.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_copper.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_diamond.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_diamond_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_gold.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_iron.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_mese.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mineral_tin.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_mossycobble.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_obsidian.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_obsidian_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_obsidian_brick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_obsidian_glass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_obsidian_shard.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_pine_sapling.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_pine_wood.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_sand_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_sandstone.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_sapling.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_silver_sand_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_silver_sandstone.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_snowball.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_steel_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_steel_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_stick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tin_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tin_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tin_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_bronzeaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_bronzepick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_bronzeshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_bronzesword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_diamondaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_diamondpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_diamondshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_diamondsword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_goldaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_goldpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_goldshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_goldsword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_meseaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_mesepick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_meseshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_mesesword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_steelaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_steelpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_steelshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_steelsword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_stoneaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_stonepick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_stoneshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_stonesword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_woodaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_woodpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_woodshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_tool_woodsword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_torch_2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_torch_3.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_torch_4.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_torch_on_floor.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_torch_on_floor_animated.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_torch_on_floor_animated_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/default_wood.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/dorwinion_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/dorwinion_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ebiomes_birch_tree.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ebiomes_bucket_peas.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ebiomes_bucket_peas_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ebiomes_bucket_swamp_water.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ebiomes_downy_birch_tree.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ebony plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/emerald.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_bowl.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_charcoal_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_grass_bamboo_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_grass_bamboo_top.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_hearty_stew.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_illumishroom_cyan.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_illumishroom_green.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_illumishroom_red.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_mushroom_soup.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_strawberry.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ethereal_teriyaki_beef.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_bread.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_bronzehoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_diamondhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_goldhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_mesehoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_steelhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_stonehoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/farming_tool_woodhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_chrysanthemum_green.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_dandelion_white.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_dandelion_yellow.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_geranium.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_mushroom_brown.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_mushroom_brown_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_mushroom_red.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_rose.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_tulip.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_tulip_black.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/flowers_viola.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/fractal.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/frost_land_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/frost_land_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/glass bottle 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/glass bottle.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/glazed terracotta.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/glazed terracotta_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/glow mushroom poisonous cap.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/gold wood plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/granite.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/granite_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/granite_brick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/green tomato.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/heart.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/heart_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/japaneseforest_japanese_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/japaneseforest_japanese_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/lilac.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/lott_mapgen_bucket_mordor_water.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/lottachievements_crowned_skull.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/lottacievements_skull.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mesecraft_furniture_breadslice.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mini pumpkin.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/more_ores_mineral_mithril.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/more_ores_mineral_silver.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/morel mushroom.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_mithril_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_mithril_block_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_mithril_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_mithril_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_silver_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_silver_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_silver_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_mithrilaxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_mithrilhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_mithrilpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_mithrilshovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_mithrilsword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_silveraxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_silverhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_silverpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_silvershovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/moreores_tool_silversword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mug.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom brown.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom button.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom grey.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom poison.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom red.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/mushroom_soup.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_brick_deep.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_brick_deep_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_glowstone.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_glowstone_deep.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_hinge_wood.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_ignishroom_woodwood orange.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_murexium_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_murexium_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_nether_ingot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_nether_lump.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_rack.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_rack_deep.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_rack_deep_alt_2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_sand.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_sand_alt.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_murexium_axe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_murexium_hoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_murexium_pick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_murexium_shovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_murexium_sword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_netheraxe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_netherhoe.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_netherpick.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_nethershovel.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nether_tool_nethersword.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nightshade_nightshade_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/nightshade_nightshade_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/potato.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/prairie_grass.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/prairie_grass_side.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/purple carrot.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/red banana.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/red wood plank 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/robin egg.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/ruby.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/sliced bread.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/sponge.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/sponge_wet.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stairs_glass_outer_stairside.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stairs_glass_split.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stairs_glass_stairside.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stairs_obsidian_glass_stairside.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stairst_obsidian_glass_outer_stairside.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stairst_obsidian_glass_split.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stamina_hud_bg.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stamina_hud_fg.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/stamina_hud_poison.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/technic_bucket_corium.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/tomato.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/tomato_soup.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/turnip 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/wood acacia plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/wood plank 2.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/wood plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/wood weathered plank.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/xcopper_oxidized_block.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/xpanes_edge.png` | JoeEnderman | [A3] | CC0-1.0 | None |
| `art/cc0/assorted/xpanes_edge_obsidian.png` | JoeEnderman | [A3] | CC0-1.0 | None |

### A4 — Voxel Pack

Creator: **Kenney**. Source: [https://kenney.nl/assets/voxel-pack](https://kenney.nl/assets/voxel-pack). License: **CC0-1.0** ([legal text](licenses/CC0-1.0.txt)). Required credit: **none**. Voluntary credit: Kenney.

Official Kenney asset page: Voxel Pack. License: Creative Commons CC0. Original License.txt is retained.

Files were losslessly re-encoded upstream of this project; the decoded content was verified against the creator archives. Names with an `_alt` suffix are local collision renames; their exact original members are recorded in the JSON manifest.

| Local file | Creator | Verified source | License | Required credit |
| --- | --- | --- | --- | --- |
| `art/cc0/kenney-voxel/Items/apple.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/arrow.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/axe_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/axe_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/axe_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/axe_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/axe_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/boat.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/bow.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/bowArrow.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/bowl.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/fish.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/fish_cooked.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/fishingPole.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/flail_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/flail_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/flail_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/flail_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/flail_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hammer_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hammer_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hammer_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hammer_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hammer_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hoe_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hoe_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hoe_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hoe_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/hoe_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/minecart.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_coal.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_emerald.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_ironAlt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_ruby.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/ore_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/pick_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/pick_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/pick_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/pick_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/pick_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/seed.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/shovel_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/shovel_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/shovel_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/shovel_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/shovel_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/stew.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/sword_bronze.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/sword_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/sword_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/sword_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/sword_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Items/wheat.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/License.txt` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/clouds.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/moon.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/skybox_bottom.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/skybox_side.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/skybox_sideClouds.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/skybox_sideHills.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/skybox_top.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Other/sun.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/square_blue.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/square_orange.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/square_red.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/square_white.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/swirl_blue.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/swirl_orange.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/swirl_red.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Particles/swirl_white.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/brick_grey.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/brick_red.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cactus_inside.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cactus_side.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cactus_top.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cotton_blue.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cotton_green.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cotton_red.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/cotton_tan.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/dirt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/dirt_grass.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/dirt_sand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/dirt_snow.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/fence_stone.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/fence_wood.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/glass.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/glass_frame.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass1.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass2.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass3.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass4.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass_brown.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass_tan.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/grass_top.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/gravel_dirt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/gravel_stone.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/greysand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/greystone.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/greystone_ruby.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/greystone_ruby_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/greystone_sand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/ice.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/lava.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/leaves.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/leaves_orange.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/leaves_orange_transparent.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/leaves_transparent.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/mushroom_brown.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/mushroom_red.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/mushroom_tan.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/oven.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/redsand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/redstone.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/redstone_emerald.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/redstone_emerald_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/redstone_sand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/rock.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/rock_moss.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/sand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/snow.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_browniron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_browniron_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_coal.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_coal_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_diamond.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_diamond_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_dirt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_gold.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_gold_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_grass.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_iron.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_iron_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_sand.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_silver.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_silver_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/stone_snow.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/table.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/track_corner.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/track_corner_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/track_straight.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/track_straight_alt.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/trunk_bottom.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/trunk_mid.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/trunk_side.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/trunk_top.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/trunk_white_side.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/trunk_white_top.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/water.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/wheat_stage1.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/wheat_stage2.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/wheat_stage3.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/wheat_stage4.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/wood.png` | Kenney | [A4] | CC0-1.0 | None |
| `art/cc0/kenney-voxel/Tiles/wood_red.png` | Kenney | [A4] | CC0-1.0 | None |

## Fonts

Official repository snapshot: `google/fonts@e7db6ca603fd4862010383ff17ffd6cc4ffac1c0`. All three font binaries are byte-identical to the cited official files.

| Local file | Creator | Exact source | License and required notice |
| --- | --- | --- | --- |
| `public/fonts/PixelifySans.ttf` | The Pixelify Sans Project Authors (Stefie Justprince) | [Official font](https://raw.githubusercontent.com/google/fonts/e7db6ca603fd4862010383ff17ffd6cc4ffac1c0/ofl/pixelifysans/PixelifySans%5Bwght%5D.ttf) | OFL-1.1; retain [`licenses/PixelifySans-OFL.txt`](licenses/PixelifySans-OFL.txt) with copyright. |
| `public/fonts/AtkinsonHyperlegible.ttf` | Braille Institute of America, Inc. | [Official font](https://raw.githubusercontent.com/google/fonts/e7db6ca603fd4862010383ff17ffd6cc4ffac1c0/ofl/atkinsonhyperlegible/AtkinsonHyperlegible-Regular.ttf) | OFL-1.1; retain [`licenses/AtkinsonHyperlegible-OFL.txt`](licenses/AtkinsonHyperlegible-OFL.txt) with copyright. |
| `public/fonts/VT323.ttf` | The VT323 Project Authors (Peter Hull) | [Official font](https://raw.githubusercontent.com/google/fonts/e7db6ca603fd4862010383ff17ffd6cc4ffac1c0/ofl/vt323/VT323-Regular.ttf) | OFL-1.1; retain [`licenses/VT323-OFL.txt`](licenses/VT323-OFL.txt) with copyright. |

Font files are redistributed intact as part of the game and source repository; no standalone-font sale or font-name modification is involved. License notices are copied into the deployed `licenses/` directory and linked through Settings → Credits.

## Original and generated work

- **World sprites and terrain:** baked by the owner-authorized block renderer and models plus the verified CC0 textures above. `public/art/sheet*.png` are composites of those sources. Supplementary biome models and effects were authored for White Horizon.
- **UI icons, compass rose and app icon:** original SVG paths/code in `src/ui-kit.js` and `public/icon.svg`, created for this project. No external icon set or illustration service was used.
- **Audio:** original runtime synthesis in `src/audio.js`; no audio samples, recordings, or third-party music files are distributed.
- **Project code:** the original source repository and its fixed reference commit are recorded in the JSON manifest; the user explicitly authorized reuse in this separate game. Public availability is not treated as a blanket license for unrelated third parties.

## Build and QA dependencies

There are no third-party runtime JavaScript packages in the browser bundle. All npm package-lock entries, including esbuild’s optional architecture packages, are listed below. QA libraries and CI actions are separately identified; the host OS and browser binaries are installed externally and are not redistributed in this game.

| Dependency | Version | Creator / source | License | Required credit / scope |
| --- | --- | --- | --- | --- |
| `@esbuild/aix-ppc64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2faix-ppc64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/android-arm` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fandroid-arm/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/android-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fandroid-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/android-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fandroid-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/darwin-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fdarwin-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/darwin-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fdarwin-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/freebsd-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2ffreebsd-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/freebsd-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2ffreebsd-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-arm` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-arm/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-ia32` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-ia32/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-loong64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-loong64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-mips64el` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-mips64el/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-ppc64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-ppc64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-riscv64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-riscv64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-s390x` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-s390x/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/linux-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2flinux-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/netbsd-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fnetbsd-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/netbsd-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fnetbsd-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/openbsd-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fopenbsd-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/openbsd-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fopenbsd-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/openharmony-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fopenharmony-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/sunos-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fsunos-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/win32-arm64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fwin32-arm64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/win32-ia32` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fwin32-ia32/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `@esbuild/win32-x64` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/@esbuild%2fwin32-x64/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `esbuild` | 0.28.2 | Evan Wallace; [registry source](https://registry.npmjs.org/esbuild/0.28.2) | MIT | Copyright and MIT notice if copied; build-only. |
| `pngjs` | 7.0.0 | Luke Page, Kuba Niegowski and contributors; [registry source](https://registry.npmjs.org/pngjs/7.0.0) | MIT | Copyright and MIT notice if copied; build-only. |
| `playwright` | 1.62.0 | Microsoft Corporation; [verified PyPI release](https://pypi.org/pypi/playwright/1.62.0/json) | Apache-2.0 | Full notice retained under `licenses/dependencies/`; QA-only. |
| `pyee` | 13.0.1 | Josh Holbrook; [verified PyPI release](https://pypi.org/pypi/pyee/13.0.1/json) | MIT | Full notice retained under `licenses/dependencies/`; QA-only. |
| `greenlet` | 3.5.5 | Armin Rigo, Christian Tismer and contributors; [verified PyPI release](https://pypi.org/pypi/greenlet/3.5.5/json) | MIT AND PSF-2.0 | Full notice retained under `licenses/dependencies/`; QA-only. |
| `typing_extensions` | 4.16.0 | Python Software Foundation and contributors; [verified PyPI release](https://pypi.org/pypi/typing_extensions/4.16.0/json) | PSF-2.0 | Full notice retained under `licenses/dependencies/`; QA-only. |
| `actions/checkout` | `11d5960a326750d5838078e36cf38b85af677262` (v4) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/checkout/11d5960a326750d5838078e36cf38b85af677262/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |
| `actions/setup-node` | `49933ea5288caeca8642d1e84afbd3f7d6820020` (v4) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/setup-node/49933ea5288caeca8642d1e84afbd3f7d6820020/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |
| `actions/setup-python` | `a26af69be951a213d495a4c3e4e4022e16d87065` (v5) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/setup-python/a26af69be951a213d495a4c3e4e4022e16d87065/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |
| `actions/upload-artifact` | `ea165f8d65b6e75b540449e92b4886f43607fa02` (v4) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/upload-artifact/ea165f8d65b6e75b540449e92b4886f43607fa02/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |
| `actions/configure-pages` | `983d7736d9b0ae728b81ab479565c72886d7745b` (v5) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/configure-pages/983d7736d9b0ae728b81ab479565c72886d7745b/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |
| `actions/upload-pages-artifact` | `56afc609e74202658d3ffba0e8f6dda462b719fa` (v3) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/upload-pages-artifact/56afc609e74202658d3ffba0e8f6dda462b719fa/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |
| `actions/deploy-pages` | `d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e` (v4) | GitHub / action contributors; [exact notice](https://raw.githubusercontent.com/actions/deploy-pages/d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e/LICENSE) | MIT | Copyright and MIT notice if copied; referenced CI code only. |

The Python QA requirements include exact release hashes. CI actions are pinned to inspected commits. The npm lockfile integrity fields were checked against the registry; the current registry security audit reported zero known vulnerabilities in all 28 npm dependencies. This is a point-in-time registry result, not a claim about future vulnerabilities.

## Re-audit and deployment gate

`npm run audit:assets` verifies the exact current files, source-texture archive, font binaries and license notices, npm lockfile, Python requirements and pinned workflow actions. Builds run that gate automatically and refuse unlisted/changed media or dependency inputs. The same register and full notices are included in the web build.

To repeat upstream pixel verification, download the exact archives in `ASSET_MANIFEST.json` and run `node scripts/verify-provenance.mjs <archive-directory>`. It uses the already-audited pngjs decoder and Python’s standard-library ZIP reader. Unknown or incompatible material must be replaced or independently verified before updating the register.

[A1]: https://opengameart.org/content/16x16-block-texture-set
[A2]: https://opengameart.org/content/1616-block-textures
[A3]: https://opengameart.org/content/assorted-minecraft-style-textures
[A4]: https://kenney.nl/assets/voxel-pack
