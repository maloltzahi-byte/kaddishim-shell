# Supabase Read-Only Strategy — Kaddishim Shell

## 1. Why Supabase does not replace mock data globally yet

Sprint 24 establishes the database foundation only. The React UI remains connected mainly to the existing synchronous `dataAdapter` and static mock data. This avoids introducing async rendering, loading states, auth decisions or write risks across the whole system before the read strategy is proven.

Sprint 25 introduced a limited pilot for `/calls` only.

Sprint 26 expands the same read-only model to `/kaddish-requests`, `/volunteers` and `/members` list screens only. Detail pages, create pages, public forms, reports and settings remain outside the Supabase read integration scope.

## 2. Fallback strategy

The `supabaseReadAdapter` is read-only and defensive:

- If `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY` is missing, it returns mock data.
- If `supabase` is not configured, it returns mock data.
- If a Supabase query returns an error, it returns mock data.
- If a Supabase query returns no data, it returns mock data.
- If a Supabase table is empty, it returns mock data to prevent empty list screens during the read-only integration stages.

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

The read-only adapter exposes async `list()` methods for:

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

## 8. What remains forbidden until approval

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

## 9. QA expectations

Sprint 26 passes only if:

- build passes without Supabase ENV keys
- `/calls` remains stable from Sprint 25
- `/kaddish-requests` renders with mock fallback and read-only Supabase support
- `/volunteers` renders with mock fallback and read-only Supabase support
- `/members` renders with mock fallback and read-only Supabase support
- UI remains visually unchanged
- no route breaks
- no `undefined` appears
- no screen becomes empty
- no write operations exist
