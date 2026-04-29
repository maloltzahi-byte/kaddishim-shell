# Supabase Read-Only Strategy — Kaddishim Shell

## 1. Why Supabase does not replace mock data globally yet

Sprint 24 establishes the database foundation only. The React UI remains connected mainly to the existing synchronous `dataAdapter` and static mock data. This avoids introducing async rendering, loading states, auth decisions or write risks across the whole system before the read strategy is proven.

Sprint 25 introduced a limited pilot for `/calls` only.

Sprint 26 expands the same read-only model to `/kaddish-requests`, `/volunteers` and `/members` list screens only.

Sprint 27 expands the same read-only model to detail screens only.

Sprint 28 expands read-only usage to `/reports` and `/public/status` only. Create pages, public submission forms, auth, writes, schema changes and seed changes remain outside scope.

## 2. Fallback strategy

The `supabaseReadAdapter` is read-only and defensive:

- If `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY` is missing, it returns mock data.
- If `supabase` is not configured, it returns mock data.
- If a Supabase query returns an error, it returns mock data.
- If a Supabase query returns no data, it returns mock data.
- If a Supabase table is empty, it returns mock data to prevent empty list screens during the read-only integration stages.
- If a detail query returns no matching row, the page keeps the existing mock detail fallback.
- If reports cannot derive a safe aggregation from available entities, the relevant section remains mock/static.
- If public status cannot read a matching request, it keeps the existing sample status fallback.

This means missing ENV values must not break build, render or navigation.

## 3. Schema files

Schema planning files:

- `supabase/schema.sql`
- `supabase/seed.sql`

Tables included in `schema.sql`:

- `calls`
- `kaddish_requests`
- `volunteers`
- `members`
- `assignments`
- `activity_logs`
- `public_submissions`

The SQL files are not executed automatically by the app.

## 4. Mappers

Mapper file:

- `src/lib/supabaseMappers.ts`

Current mappers:

- `mapCallRowToRecord`
- `mapKaddishRequestRowToRecord`
- `mapVolunteerRowToRecord`
- `mapMemberRowToRecord`

The UI must not consume Supabase row names directly. Database row shapes are mapped into domain/UI entities before use.

## 5. Adapters

Existing UI adapter:

- `src/lib/dataAdapter.ts`

Read-only adapter:

- `src/lib/supabaseReadAdapter.ts`

The read-only adapter exposes async `list()` and `findById()` methods for:

- `calls`
- `kaddishRequests`
- `volunteers`
- `members`

## 6. Sprint 25 pilot behavior

`Sprint 25 — Read Integration Pilot` connected only `/calls` to `supabaseReadAdapter.calls.list()`.

Behavior:

- `/calls` renders immediately from `callsData` mock data.
- After render, `/calls` attempts a read-only Supabase fetch through `supabaseReadAdapter.calls.list()`.
- If Supabase returns mapped call records, the list is updated.
- If Supabase is missing, fails, returns no data or returns an empty table, the screen keeps mock data.
- There is no visible UI change and no global async refactor.

## 7. Sprint 26 expansion behavior

`Sprint 26 — Read Integration Expansion` connects only these list screens:

- `/kaddish-requests` through `supabaseReadAdapter.kaddishRequests.list()`
- `/volunteers` through `supabaseReadAdapter.volunteers.list()`
- `/members` through `supabaseReadAdapter.members.list()`

Behavior:

- Each screen renders immediately from its existing mock data.
- After render, each screen attempts a read-only Supabase fetch through the matching adapter method.
- If Supabase returns mapped records, the relevant table updates.
- If Supabase is missing, fails, returns no data or returns an empty table, the relevant screen keeps mock data.
- Detail pages, create pages, public forms, reports and settings are not connected in this sprint.
- There is no visible UI change and no route/CSS/schema/seed change.

## 8. Sprint 27 detail behavior

`Sprint 27 — Detail Read Integration Batch` connects only these detail screens:

- `/calls/:callId` through `supabaseReadAdapter.calls.findById()`
- `/kaddish-requests/:requestId` through `supabaseReadAdapter.kaddishRequests.findById()`
- `/volunteers/:volunteerId` through `supabaseReadAdapter.volunteers.findById()`
- `/members/:memberId` through `supabaseReadAdapter.members.findById()`

Behavior:

- Each detail screen renders immediately from its existing mock detail fallback.
- After render, each detail screen attempts a read-only Supabase fetch through the matching adapter method.
- If Supabase returns a mapped primary entity row, the primary entity values update.
- If Supabase is missing, fails, returns no row or returns invalid data, the screen keeps mock data.
- Related panels such as activity, timeline, assignments and linked records remain static/mock in Sprint 27.
- There is no visible UI change and no route/CSS/schema/seed change.

## 9. Sprint 28 reports and public status behavior

`Sprint 28 — Reports + Public Status Read Integration` connects only:

- `/reports`
- `/public/status`

Reports behavior:

- `/reports` renders immediately from existing mock report data.
- After render, it reads existing entities through `supabaseReadAdapter` list methods.
- It computes safe app-side aggregates from already approved entities only.
- It does not create SQL views, schema changes or seed changes.
- Daily table data and any section that depends on unavailable relations remain mock/static by design.

Public status behavior:

- `/public/status` keeps the existing read-only public form shell.
- It reads status for the existing sample request through `supabaseReadAdapter.kaddishRequests.findById()`.
- If Supabase is missing, fails or no request exists, it keeps the existing sample fallback.
- It does not add submit behavior, write behavior, search persistence or public form submission.

## 10. What remains forbidden until approval

Do not add yet:

- insert
- update
- delete
- public form submit
- auth flow
- user sessions
- realtime
- storage
- edge functions
- payment
- WhatsApp API
- email
- SMS
- production RLS policy decisions

## 11. QA expectations

Sprint 28 passes only if:

- build passes without Supabase ENV keys
- list screens from Sprints 25 and 26 remain stable
- detail screens from Sprint 27 remain stable
- `/reports` renders with mock fallback and read-only Supabase-derived aggregation support
- `/public/status` renders with mock fallback and read-only request-status support
- UI remains visually unchanged
- no route breaks
- no `undefined` appears
- no screen becomes empty
- no write operations exist
