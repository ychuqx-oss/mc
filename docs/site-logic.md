# miComet wiki — Site Logic

This file is the single source of truth for website update logic in this repository.

## Mandatory rule

Before making **any** website, data, timeline, translation, UI, metadata, footer, source-link, or restoration update:

1. Read `docs/site-logic.md` first.
2. Check the current repository state before editing.
3. Apply changes according to the rules in this file.
4. Do not create a parallel logic system in another document unless this file explicitly points to it.
5. If another document conflicts with this file, `docs/site-logic.md` wins.

## Project identity

- Site name: **miComet wiki**
- Main repository: `ychuqx-oss/mc`
- Default production branch: `main`
- Primary UI page: `src/pages/Index.tsx`
- Browser/social metadata: `index.html`

## Main timeline architecture

The website builds its story timeline through:

- `src/data/timeline/index.ts`

The main year data sources are:

- 2019–2024: timeline JSON / clean datasets referenced by `index.ts`
- 2025: `src/data/timeline/timeline-2025-compendium.ts`
- 2026: `src/data/timeline/timeline-2026-compendium.ts`

### 2026 structure

The 2026 compendium currently uses:

- `timeline-2026-compendium-base.ts` — base imported list
- `timeline-2026-compendium.ts` — patches existing entries and appends newer entries

New 2026 stories that should appear on the website must be added to the actual 2026 timeline path, not to a disconnected standalone JSON file.

Do not create a separate story file unless `index.ts` is also intentionally updated to import it.

## Story schema

Timeline stories may contain:

- `id`
- `displayId`
- `date`
- `phase`
- `side`
- `emoji`
- `type`
- `title`
- `titleZh`
- `titleEn`
- `ctx`
- `ctxZh`
- `ctxEn`
- `link`
- `source`

Timeline stories do not use image fields. Do not add `image`, `imageUrl`, `thumbnail`, or `thumbnailUrl` to story records or rendering logic.

### Language behavior

- English UI uses `titleEn` / `ctxEn` or the English restoration overlay. Active timeline records must not fall back to Traditional Chinese in English mode.
- Traditional Chinese UI uses `titleZh` / `ctxZh` when available.
- Before committing timeline data, verify every active story has both an English title and English context through its record or the active overlay/English row mapping.
- Do not add English-only records when the same story is expected to support bilingual display.
- Do not invent missing facts in story context.
- If source material only supports a short description, keep the context conservative.

## English restoration overlay

The English restoration system is stored under:

- `tools/mcws-en-restoration/`

The website-level English overlay used by `src/data/timeline/index.ts` is:

- `src/data/timeline/en-stories.json`

The restoration scripts are support tooling. They do not replace the website timeline architecture.

### Restoration merge rules

1. Story `id` is the primary merge key.
2. Existing values are preserved unless a populated incoming value replaces them.
3. Empty incoming fields must not erase existing populated data.
4. Manually maintained later stories must be protected from rebuild overwrite.
5. Any rebuild logic must preserve current 2025/2026 hand-maintained records.
6. Before replacing `src/data/timeline/en-stories.json`, compare against current `main` and confirm newer manual content is not lost.

## Update placement rules

Before adding data, determine where the website actually imports it.

- 2026 timeline event → update the 2026 compendium path.
- English restoration text → update the English restoration overlay only when the story IDs map to the main timeline.
- UI text/layout → `src/pages/Index.tsx` or the actual component that renders it.
- Browser title / Open Graph / Twitter metadata → `index.html`.
- Global reference link requested at the page bottom → footer/bottom-of-page rendering path.

Never assume that committing a file makes it visible on the site. Confirm it is part of the import/render chain.

## Duplicate handling

Before adding a story:

1. Search existing timeline IDs and dates.
2. Check whether the same event already exists under another ID.
3. If it exists, update the existing entry instead of creating a duplicate.
4. Only append a new entry when the event is genuinely absent.

## Source handling

- Preserve user-provided URLs when available.
- Do not fabricate URLs.
- Do not expand truncated sources by guessing.
- Source links should be stored in the story's `link` / `source` fields when they belong to a specific story.
- When recovering missing sources, prefer this order:
  1. Official YouTube / official X / official event or music pages already tied to the exact story.
  2. Detailed timeline source datasets in this repository when the stable story `id` matches.
  3. HoloStats miComet pair history: https://www.holostats.com/collabs/pair/14/21?lang=ja — use it to cross-check collab dates/titles and recover the original stream page when available.
  4. HoloIndex Sakura Miko collab filter with Hoshimachi Suisei: https://holoindex.com/members/sakura-miko?tab=collab&cpartner=hoshimachi-suisei — use it to cross-check collab members, stream metadata, timestamps, and the original YouTube video when available.
  5. The public miComet Archive at https://micomet.neocities.org/ for 2020–2023 collab/event source recovery; store the original stream/event URL listed by the archive rather than an image.
  6. Other verified story-specific sources.
  7. If no usable story-specific URL exists, use the fallback reference document below.
- If a story has no usable source URL, use this reference document as its fallback `link`: https://docs.google.com/document/d/e/2PACX-1vRcUa0y4lpqboc3v6Q-8qNu5a8v8TX9EkSqbQfjSdUhLcbhANp7XBYfFc2jdZTkzgwMN1P18kNjuP-U/pub
- A real story-specific source always takes priority over the fallback reference document.
- For active `shared + Stream` stories from 2019–2026, append the HoloStats miComet pair page and HoloIndex Miko×Suisei collab page as secondary cross-check references. These secondary index pages supplement, never replace, a known story-specific official/source URL.
- When HoloStats exposes a definite stream/video ID for an exact story, store the official YouTube URL first and the matching HoloStats stream page as a secondary reference.
- Do not add archive images or thumbnails to timeline records.
- Global reference documents may be placed in the site footer when explicitly requested.

## GitHub workflow

For repository updates requested in chat:

1. Read this file first.
2. Fetch the current target file from `main`.
3. Check for duplicate or conflicting existing content.
4. Modify the correct imported/rendered file.
5. Push to GitHub as requested.
6. Report the changed path and commit SHA.

Do not claim a change is live merely because a disconnected file was committed.

## Local execution rule

Do not run MCWS restoration logic locally unless the user explicitly asks to execute it.

Reading, extracting, comparing, hashing, and inspecting files is allowed when needed to determine repository state. Execution of `.py`, `.mjs`, or `.sh` restoration scripts requires an explicit user request.

## Existing supporting documentation

These files are subordinate references and may contain implementation detail:

- `tools/mcws-en-restoration/docs/LOGIC.md`
- `tools/mcws-en-restoration/docs/FIELD_MAPPING.md`
- `tools/mcws-en-restoration/docs/VALIDATION_REPORT.md`
- `docs/mcws-english-restoration-merge-report.md`

If their instructions conflict with this file, update this file first or follow this file.

## Maintenance rule

Whenever the site's architecture, data flow, naming, update placement, or restoration workflow changes, update `docs/site-logic.md` in the same change so future work continues from the correct rules.
