# Delivery and hosting

## Play now

https://aetherforge-white-horizon.banchisaverio.chatgpt.site

Sites hosting is owner-private. Sign in with the ChatGPT account that owns this project. No GitHub Pages setup is needed to play this version.

The native host returned a successful deployment at 2026-10-23 22:10 UTC. Project ID: `appgprj_6adbdaff29288191818835a0e64c3238`. Deployment ID: `appgdep_6adbdb47397481918c9f8857e2e95e00`.

The hosting source snapshot is commit `9a72e91f08940e77ec2580f9c8d5cef77ab4f1c2` in the site's managed source repository, matching the game code and assets in GitHub commit `08de5aa1a7a5dfe9b7bbc4d9be827f50cd8dd739` plus the hosting manifest. GptForge remains the primary game repository. Publishing later GitHub changes to Sites requires syncing the corresponding game source to this existing Site; creating another Site is unnecessary.

## Verified downloadable build

https://github.com/saveriobanchi/GptForge/actions/runs/40031165692/artifacts/12535780007

QA screenshots and browser report:
https://github.com/saveriobanchi/GptForge/actions/runs/40031165692/artifacts/12535630442

GitHub Actions artifacts require GitHub sign-in and are subject to the account's artifact retention period. Rebuild from source with `npm ci && npm run build` after expiry.

## Optional GitHub Pages mirror

The workflow's first Pages activation failed with the exact API error `Resource not accessible by integration`. Ordinary Actions tokens cannot perform this repository's initial Pages administration. No code or test failure caused that deployment error.

Minimum owner action: **GptForge → Settings → Pages → Build and deployment → Source → GitHub Actions**. Then rerun **Check, build and publish White Horizon** in Actions. The expected mirror address is `https://saveriobanchi.github.io/GptForge/`; it is not claimed as live until GitHub confirms deployment. The workflow keeps verified build artifacts and reports missing Pages setup separately from game checks.

The build uses relative paths, works under a repository subpath, and needs no compressed Unity loader, server rewrites or backend. It is a browser game rather than a Unity WebGL export.
