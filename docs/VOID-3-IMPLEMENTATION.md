# NEXORA VOID 3.0 — Repository implementation record

## Approved direction
- Cinematic homepage and Dark VOID visual system.
- Palette: Obsidian #08090D, Surface #101116, Elevated #171821, Border #292936, Violet #8B5CF6, Light Violet #A78BFA, Ice Blue #67D5FF.
- Preserve the current React 18 + Vite application and Cloudflare Pages deployment.
- Keep all existing public URLs working while mapping the approved 52-page information architecture.
- Never invent ranks, player statistics, uptime, prices, purchases, or hosting capacity.
- Keep Minecraft, Discord, store, and Pterodactyl credentials server-side only.

## Route migration policy
Existing routes are compatibility contracts. New canonical destinations may be introduced only with explicit redirects/aliases and verified internal links. Planned canonical areas:
- Public network: /, /about, /features, /status, /announcements, /rules, /staff, /support, /faq, /apply
- Progression: /ranks, /rank-benefits, /kits, /crates, /commands, /hearts, /achievements
- Competition: /leaderboard, /tierlist, /pvp-stats, /top-killers, /top-hearts, /tournaments, /seasons
- Community/gameplay: /events, /clans, /bounty, /duels, /koth, /economy
- Store: /store, /store/ranks, /store/cosmetics, /store/coins, /store/history
- Player portal: /login, /weblink, /dashboard, /profile, /player-history
- Hosting: /hosting, /hosting/plans, /hosting/order, /hosting/dashboard, /hosting/servers, /hosting/status
- Owner control: /control, /control/players, /control/staff, /control/moderation, /control/integrations, /control/settings

## Security and data rules
- Authorization is enforced by backend role checks, never by hidden frontend routes alone.
- WebLink codes must be short-lived, single-use, rate-limited, and UUID-bound.
- Pterodactyl application/client keys must never enter browser bundles.
- Administrative actions require audit records.
- Unconnected integrations display setup-required states, not fabricated live values.

## Delivery sequence
1. Baseline and route inventory on `void-3-master-build`.
2. Design tokens and shared responsive shell.
3. Route registry, canonical paths, compatibility aliases.
4. Distinct public, competition, player, hosting, and control layouts.
5. Backend contracts and secure integrations.
6. Build, route, responsive, and security checks.
7. Preview deployment and review before production merge.

## Current implementation notes
This commit adds the approved design-token layer without replacing the existing app structure. The legacy route inventory remains in place pending a dedicated route migration pass.
