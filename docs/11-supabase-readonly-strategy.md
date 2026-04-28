# Supabase Read-Only Strategy — Kaddishim Shell

## 1. Why Supabase does not replace mock data yet

Sprint 24 establishes the database foundation only. The React UI remains connected to the existing synchronous `dataAdapter` and static mock data. This avoids introducing async rendering, loading states, auth decisions or write risks before the schema and read strategy are approved.

## 2. Fallback strategy

The new `supabaseReadAdapter` is read-only and defensive:

- If `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY` is missing, it returns mock data.
- If `supabase` is not configured, it returns mock data.
- If a Supabase query returns an error, it returns mock data.
- If a Supabase query returns no data, it returns mock data.

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

New read-only adapter:

- `src/lib/supabaseReadAdapter.ts`

The read-only adapter exposes async `list()` methods for:

- `calls`
- `kaddishRequests`
- `volunteers`
- `members`

The existing UI pages are not refactored to async in Sprint 24.

## 6. What happens in Sprint 25

Recommended next sprint:

`Sprint 25 — Read Integration Pilot`

Scope should be limited to connecting one list screen, preferably `/calls`, to `supabaseReadAdapter.calls.list()` with:

- explicit loading state
- mock fallback
- no write operations
- no auth
- no public form submit
- no global refactor

Only after one list screen is stable should additional list screens be connected.

## 7. What remains forbidden until approval

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

## 8. QA expectations

Sprint 24 passes only if:

- build passes without Supabase ENV keys
- UI remains visually unchanged
- no route breaks
- no `undefined` appears
- no screen becomes empty
- no write operations exist
