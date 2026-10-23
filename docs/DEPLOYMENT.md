# Delivery and hosting

## Play White Horizon 1.1

https://aetherforge-white-horizon.banchisaverio.chatgpt.site

Sites hosting is owner-private. Sign in with the owning ChatGPT account. Access remains restricted to the owner; no external viewers or groups were added.

The hosting service confirmed **succeeded** at **2026-10-23 23:08:35 UTC**.

- Project: `appgprj_6adbdaff29288191818835a0e64c3238`
- Deployment: `appgdep_6adbe8e4624c8191a7c8f861bff8af65`
- Managed source commit: `6a53745bbe748c1934a7baa99f02a5d35e894182`
- Matching GptForge source: `619b5d1306ade50c301e22453c81f0e4c7ffc131`

The UI upgrade includes searchable catalogues, readable ingredient costs, research navigation, persistent resource pins, larger text and improved phone interaction. Existing saves remain compatible. Build publication is gated by the verified asset/dependency register, and all full notices are included in the deployed game and offline cache.

Nine files on the live host were verified byte-for-byte against the tested build, including game code, artwork, font, asset register and license notice. See [verification evidence](provenance/LIVE_1.1.json).

GptForge remains the primary repository. The existing Site was updated; no duplicate Site was created and Claude-AETHERFORGE was not changed.

## Verified build and screenshots

GitHub Actions run [40037746323](https://github.com/saveriobanchi/GptForge/actions/runs/40037746323) passed installation, all 11 Node checks, production compilation, the existing browser regression suite and the new UI suite.

- [Download browser build 1.1](https://github.com/saveriobanchi/GptForge/actions/runs/40037746323/artifacts/12538236032)
- [Actual gameplay screenshots and QA reports](https://github.com/saveriobanchi/GptForge/actions/runs/40037746323/artifacts/12538241179)

Artifacts require GitHub sign-in and currently expire on 2027-01-21. Rebuild later with `npm ci && npm run build`. A local ZIP is also available at `/workspace/builds/Aetherforge-White-Horizon-1.1-Web.zip`.

## Optional GitHub Pages mirror

Initial Pages activation remains blocked by `Resource not accessible by integration`. The workflow keeps successful build and QA artifacts and reports this optional administration step separately from game checks.

Minimum owner action: **GptForge → Settings → Pages → Build and deployment → Source → GitHub Actions**, then rerun the workflow. The expected mirror address is `https://saveriobanchi.github.io/GptForge/`; it is not claimed as live. No visibility change is needed.

The browser build uses relative paths and works under a repository subpath. This is a browser game, not a Unity WebGL export or Windows standalone build. Physical iPhone Safari testing remains outstanding.
