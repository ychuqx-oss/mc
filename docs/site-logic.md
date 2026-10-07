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
- `sharedCategory` — only for `side: 'shared'`; one of `gen0`, `shiraken`, `oneOnOne`, `group`
- `supportCategory` — optional support subcategory; currently `fubuki`
- `emoji`
- `type`
- `title`
- `titleZh`
- `titleEn`
- `ctx`
- `ctxZh`
- `ctxEn`
- `link`
- `source` — legacy free-text source note; keep only for backward compatibility
- `sources` — structured source objects: `url`, `kind`, optional `label`, optional `official`
- `sourceStatus` — `verified`, `indexed`, `fallback`, or `missing`
- `eventId` — optional shared event/stream identifier used to link distinct stories from the same stream or event
- `reciprocal` — optional explicit boolean for whether a Miko/Suisei interaction is genuinely two-way
- `classificationSource` — `explicit` or `legacy-auto`; generated legacy fallback metadata

Timeline stories do not use image fields. Do not add `image`, `imageUrl`, `thumbnail`, or `thumbnailUrl` to story records or rendering logic.

### Structured source behavior

New or manually edited records should use `sources[]` instead of placing multiple URLs into one whitespace-separated `link` string.

Legacy `link` remains readable for older records and is converted into structured sources during normalization. Do not mass-delete legacy links solely for migration.

Source kinds currently include:

- `youtube`
- `x`
- `official`
- `news`
- `index`
- `archive`
- `reference`
- `other`

Source-status meaning:

- `verified` — an official/original source is present.
- `indexed` — a story-specific source or trustworthy index/media corroboration exists, but it is not marked official/original.
- `fallback` — only the global reference document is available.
- `missing` — no usable source is known.

The fallback reference document must never be presented as equivalent to a story-specific verified source.

### Shared-event behavior

Different miComet moments from the same stream may remain separate stories when their substance differs. Use the same `eventId` for those records.

The UI may also infer a legacy event group from a shared original YouTube video ID when `eventId` is absent. Explicit `eventId` is preferred because multi-POV events may use different YouTube URLs.

### Shared-category behavior

The old single **Shared / 共同** presentation is split into four subcategories while keeping `side: 'shared'` for aggregate Miko/Suisei counting:

- `gen0` → **0期 / Gen 0**: 0期生・Gen 0 collabs or events involving Miko and Suisei.
- `shiraken` → **火建 / Shiraken**: 不知火建設 / Shiraken collabs or events involving Miko and Suisei.
- `oneOnOne` → **1v1**: Miko + Suisei two-person miComet collabs/interactions without another group context.
- `group` → **團體 / Group**: Miko + Suisei appearing together with other members, official group events, festivals, tournaments, call-ins, or other multi-person contexts.

Classification priority is `gen0` → `shiraken` → `group` → `oneOnOne`. The UI must show these four labels instead of a single Shared label, and the story filter must allow selecting each one independently. The Miko and Suisei aggregate totals still count every `side: 'shared'` story for both members.

For automatic 1v1 vs Group classification, use the story headline/title as the primary evidence. Do not classify a story as Group merely because its context mentions another member, a past event, or a reference source. A title that explicitly names a third participant, a known multi-member unit, a call-in/tournament/group event, or says miComet joined/participated in a multi-person collaboration is Group. Short Latin member names such as `Su`, `Ao`, and `Bae` must use word-boundary matching so they do not accidentally match words like `Suisei` or `Surgeon`.

**1v1 requires reciprocal interaction.** A one-sided mention, praise, reply, watch, retweet, announcement, support message, or other action where the other party does not respond/interact must not be classified as 1v1. In particular, **one person replying once is still not 1v1 if the other person does not reply back**. The record should instead be attributed to the acting side (Miko or Suisei); if the actor cannot be identified safely, classify it as Support/Others. Reciprocal evidence includes mutual replies, direct conversation, playing together, a two-person collab, dual POV, a call, a date, a watchalong, joint travel/meal, direct back-and-forth, or another clearly two-way interaction. Generic wording such as "interaction" by itself is not sufficient evidence of reciprocity.

If a story has an explicit `sharedCategory`, that manual value takes priority over automatic classification, but manually assigning `oneOnOne` still requires evidence that both Miko and Suisei actually interacted.

For new records, classification should be data-driven rather than regex-driven:
- set `side` explicitly;
- for `side: 'shared'`, set `sharedCategory` explicitly;
- when `sharedCategory: 'oneOnOne'`, set `reciprocal: true` only when the source clearly shows two-way interaction;
- use runtime regex classification only as a legacy fallback for old records without explicit metadata.

Normalized records expose `classificationSource` so legacy auto-classified data can be identified and gradually migrated.

Original `side: 'shared'` records may be reassigned to Miko/Suisei/Support when they are one-sided; only genuinely mutual or multi-person shared events remain `shared`.

### Support-category behavior

The Support / 助攻 bucket has a dedicated **Fubuki / 白上吹雪** subcategory.

- Records whose original source data already has `side: 'others'` and whose title/context mentions 白上吹雪 / Fubuki receive `supportCategory: 'fubuki'`.
- These records are shown, counted, filtered, and charted under **白上吹雪 / Fubuki**, not under the remaining generic Support / 助攻 total.
- One-sided Miko/Suisei records that are reassigned to Support by the reciprocal-interaction rule do not automatically become Fubuki support records.
- The current source-data set contains 28 Fubuki support records.

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
2. Check whether the same event already exists under another ID, including legacy clip/source-supplement records.
3. Treat the same occurrence as one story even when it was previously split into a stream record, clip record, POV record, or source-supplement record. Preserve useful details and the best source on the canonical story instead of keeping duplicate cards.
4. Separate records are allowed when the same stream contains genuinely distinct miComet moments with different substance; sharing a source URL alone does not make them duplicates.
5. If a duplicate exists, update/merge the canonical entry instead of creating or retaining a second copy.
6. Only append a new entry when the event is genuinely absent.

## Source handling

- New timeline work should write structured `sources[]`; `link` is legacy compatibility only.
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
- If a story has no usable story-specific source, expose the reference document as a structured `reference` source and mark the story `fallback`; do not treat that document as verified evidence: https://docs.google.com/document/d/e/2PACX-1vRcUa0y4lpqboc3v6Q-8qNu5a8v8TX9EkSqbQfjSdUhLcbhANp7XBYfFc2jdZTkzgwMN1P18kNjuP-U/pub
- A real story-specific source always takes priority over the fallback reference document.
- For active `shared + Stream` stories from 2019–2026, append the HoloStats miComet pair page and HoloIndex Miko×Suisei collab page as secondary cross-check references. These secondary index pages supplement, never replace, a known story-specific official/source URL.
- When HoloStats exposes a definite stream/video ID for an exact story, store the official YouTube URL first and the matching HoloStats stream page as a secondary reference.
- Do not add archive images or thumbnails to timeline records.
- Global reference documents may be placed in the site footer when explicitly requested.

## Mobile UI behavior

The primary timeline page uses a mobile-specific presentation for screens at 720px or below while preserving the desktop layout.

- Search/filter controls stay sticky near the top on mobile.
- Year buttons use a horizontal scroll row, newest year first.
- Month selection and category filters move into a bottom-sheet filter panel.
- Timeline charts are collapsed by default on mobile and can be expanded individually.
- Story-card context is line-clamped on mobile; the full text remains available in the story modal.
- Year markers are sticky while scrolling the timeline.
- A mobile back-to-top button appears after substantial scrolling.
- These behaviors are presentation-only and must not change timeline data, category logic, or source records.

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


## Homepage database UI

The homepage is a searchable chronology/database first and a statistics dashboard second.

Required homepage behavior:
- Search and primary filters appear immediately after the hero.
- Filters include year, month, category, story type, and source trust.
- The source-completeness table shows totals by year and separates verified, indexed, and pending/fallback records.
- Clicking a completeness count may filter the story list to that year/source state.
- Story browsing supports Card and Timeline modes.
- Story browsing supports newest-first and oldest-first sorting.
- Stories sharing an `eventId` or legacy inferred original YouTube event key expose related same-stream/event stories.
- Statistics/charts are secondary content and may be collapsed below the searchable story list.
