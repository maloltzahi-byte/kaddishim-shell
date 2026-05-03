# Kaddishim Shell

React + Vite + TypeScript visual shell for the Kaddishim management system.

## Canonical source

The canonical source of truth is the React application under `src/`.

`visual-preview/` is deprecated and must not be used as a source of truth.

## Run

```bash
npm install
npm run build
npm run dev
```

## Live URL

StackBlitz:

https://stackblitz.com/github/maloltzahi-byte/kaddishim-shell

## Sprint status

Dashboard: Visual Locked — V1.0.0

Sprint 1: Calls List Screen — Passed
Route: /calls

Sprint 2: Kaddish Requests Screen — Passed
Route: /kaddish-requests

Sprint 3: Volunteers Screen — Passed
Route: /volunteers

Sprint 4: Members Screen — Passed
Route: /members

Sprint 5: Reports Screen — Passed
Route: /reports

Sprint 6: Settings Screen — Passed
Route: /settings

Sprint 7: Structural Refactor — Passed
Scope: App.tsx cleanup, layout extraction, Dashboard extraction, Calls extraction.

Sprint 8: Call Details Screen — Passed
Route: /calls/:callId
Test Route: /calls/M-2025-0548

Sprint 9: Kaddish Request Details Screen — Passed
Route: /kaddish-requests/:requestId
Test Route: /kaddish-requests/K-2025-0321

Sprint 10: Volunteer Details Screen — Passed
Route: /volunteers/:volunteerId
Test Route: /volunteers/V-2025-0142

Sprint 11: Member Details Screen — Passed
Route: /members/:memberId
Test Route: /members/C-2025-1284

Sprint 12: List-to-Details Navigation — Passed
Scope: connect primary list view buttons to details routes.

Sprint 13: New Call Screen — QA Pending
Route: /calls/new
Scope: static visual shell for creating a new minyan call.
Status: live in StackBlitz, pending Architect QA.

Sprint 14: New Kaddish Request Screen — QA Pending
Route: /kaddish-requests/new
Scope: static visual shell for creating a new kaddish request.
Status: live in StackBlitz, pending Architect QA.

Sprint 15: New Volunteer Screen — QA Pending
Route: /volunteers/new
Scope: static visual shell for creating a new volunteer.
Status: live in StackBlitz, pending Architect QA.

Sprint 16: New Member Screen — QA Pending
Route: /members/new
Scope: static visual shell for creating a new member.
Status: live in StackBlitz, pending Architect QA.

Sprint 17: Creation Flows QA — Passed
Scope: verified navigation from list screens to creation screens, verified route order, verified detail routes and build.
Routes checked:
- /calls -> /calls/new
- /kaddish-requests -> /kaddish-requests/new
- /volunteers -> /volunteers/new
- /members -> /members/new
Status: build passed in StackBlitz.

Sprint 18: Admin Visual Polish — Passed
Scope: visual consistency pass across admin list, detail and creation screens.
Includes: spacing, buttons, badges, active state, overflow, panels, tables and RTL alignment.
Status: build passed and Architect visual QA confirmed.

Sprint 19: Public Shell — Passed
Scope: static public-facing shell and routes for public home, kaddish request, minyan request, volunteer join, donations, thank-you and status pages.
Routes:
- /public
- /public/kaddish-request
- /public/minyan-request
- /public/volunteer-join
- /public/donations
- /public/thank-you
- /public/status
Status: build passed, Admin regression passed, and Architect public visual QA confirmed.

Sprint 20: Public Visual Polish — Passed
Scope: visual polish pass across public-facing pages, including header, footer, hero, cards, forms, CTAs, spacing, RTL and overflow.
Routes checked:
- /public
- /public/kaddish-request
- /public/minyan-request
- /public/volunteer-join
- /public/donations
- /public/thank-you
- /public/status
Status: build passed, Admin regression passed, and Architect visual QA confirmed.

Sprint 21: Data Layer Foundation — Passed
Scope: extracted static mock data and entity types from UI pages into dedicated data/type files, added internal data adapter, no backend connection.
Files:
- src/types/entities.ts
- src/data/calls.ts
- src/data/kaddishRequests.ts
- src/data/volunteers.ts
- src/data/members.ts
- src/data/reports.ts
- src/data/public.ts
- src/data/index.ts
- src/lib/dataAdapter.ts
Status: build passed and Architect QA confirmed.

Sprint 22: Data Adapter Completion / Detail Screens Extraction — Passed
Scope: completed data layer wiring for VolunteersList, detail screens, reports and public pages using static data files and internal dataAdapter. No backend connection.
Includes:
- VolunteersList wired to src/data/volunteers.ts
- Detail screens wired to dataAdapter
- Reports/public adapter support
- Undefined/fallback safeguards
Status: build passed and Architect QA confirmed.

Sprint 23: Data Contract Hardening / Supabase Readiness — Passed
Scope: hardened entity types, status enums, dataAdapter contract, UI/data mapping, Supabase schema draft and seed-readiness documentation. No backend connection.
Files:
- src/types/entities.ts
- src/lib/dataAdapter.ts
- docs/07-data-contract.md
- docs/08-supabase-schema-draft.md
- docs/09-ui-data-mapping.md
- docs/10-seed-data-notes.md
Status: build passed and Architect QA confirmed.

Sprint 24: Supabase Schema Implementation / Read-Only Foundation — Passed
Scope: added Supabase client scaffolding, environment example, schema.sql, seed.sql, DB row types, mappers and read-only adapter with mock fallback. No write operations and no UI behavior changes.
Files:
- .env.example
- .gitignore
- package.json
- supabase/schema.sql
- supabase/seed.sql
- src/lib/supabaseClient.ts
- src/lib/supabaseMappers.ts
- src/lib/supabaseReadAdapter.ts
- src/types/supabase.ts
- docs/11-supabase-readonly-strategy.md
Status: build passed and Architect QA confirmed.

Sprint 25: Read Integration Pilot — Passed
Scope: connected `/calls` only to `supabaseReadAdapter.calls.list()` with mock data as the initial render and full fallback if Supabase is not configured, fails, or returns empty data. No UI, CSS, route, schema, seed, Auth, CRUD or write-operation changes.
Files:
- src/pages/CallsList.tsx
- src/lib/supabaseReadAdapter.ts
- README.md
- docs/11-supabase-readonly-strategy.md
Status: build passed in StackBlitz and visual QA confirmed.

Sprint 26: Read Integration Expansion — Passed
Scope: connected `/kaddish-requests`, `/volunteers` and `/members` list screens only to their matching `supabaseReadAdapter` read-only list methods with mock data as the initial render and full fallback if Supabase is not configured, fails, or returns empty data. No UI, CSS, route, schema, seed, Auth, CRUD or write-operation changes.
Files:
- src/pages/KaddishRequestsList.tsx
- src/pages/VolunteersList.tsx
- src/pages/MembersList.tsx
- README.md
- docs/11-supabase-readonly-strategy.md
Status: build passed in StackBlitz, Owner Visual QA passed and Architect Final QA confirmed.

Sprint 27: Detail Read Integration Batch — Passed
Scope: connected `/calls/:callId`, `/kaddish-requests/:requestId`, `/volunteers/:volunteerId` and `/members/:memberId` detail screens only to their matching `supabaseReadAdapter` read-only find methods with mock detail data as the initial render and full fallback if Supabase is not configured, fails, returns no row or returns invalid data. Related panels remain static/mock by design. No UI, CSS, route, schema, seed, Auth, CRUD or write-operation changes.
Files:
- src/pages/CallDetailsPage.tsx
- src/pages/KaddishRequestDetailsPage.tsx
- src/pages/VolunteerDetailsPage.tsx
- src/pages/MemberDetailsPage.tsx
- src/lib/supabaseReadAdapter.ts
- README.md
- docs/11-supabase-readonly-strategy.md
Status: build passed in StackBlitz, Owner Visual QA passed and Architect Final QA confirmed.

Sprint 28: Reports + Public Status Read Integration — Passed
Scope: connected `/reports` and `/public/status` to read-only Supabase-backed data paths with full mock fallback. Reports compute safe app-side aggregations from existing entities only; missing/related report sections remain mock/static by design. Public status reads the existing sample request status through the approved read-only adapter path and keeps the existing read-only public form behavior. No UI, CSS, route, schema, seed, Auth, CRUD, submit or write-operation changes.
Files:
- src/pages/ReportsPage.tsx
- src/pages/public/PublicStatusPage.tsx
- README.md
- docs/11-supabase-readonly-strategy.md
Status: build passed in StackBlitz, Owner Visual QA passed and Architect Final QA confirmed.

Sprint 29: Write Contract + Validation Plan — Implemented, pending Architect QA
Scope: added write contract documentation, future payload types, write result/error types and disabled `supabaseWriteAdapter` scaffold. No real insert, update, delete, submit, Auth, CRUD, RLS, schema, seed, UI, CSS, route or page behavior changes.
Files:
- docs/12-write-contract.md
- src/types/entities.ts
- src/lib/supabaseWriteAdapter.ts
- README.md
Status: pending build/QA confirmation.
