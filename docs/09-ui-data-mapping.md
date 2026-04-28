# UI / Data Mapping — Kaddishim Shell

This document maps each application route to its component, data source, adapter method and entity. It is a contract document only and does not add backend behavior.

| Route | Page component | Data file | Adapter method | Entity | Notes |
|---|---|---|---|---|---|
| `/` | `Dashboard` | local dashboard/static shell | none | dashboard | Existing visual dashboard remains unchanged. |
| `/calls` | `CallsList` | `src/data/calls.ts` | `dataAdapter.calls.list()` | calls | List uses imported mock data. |
| `/calls/new` | `NewCallPage` | `src/data/calls.ts` | none | calls draft shell | Static visual shell only. |
| `/calls/M-2025-0548` | `CallDetailsPage` | `src/data/calls.ts` | `dataAdapter.calls.findById(id)` | calls | Route param: `callId`. |
| `/kaddish-requests` | `KaddishRequestsList` | `src/data/kaddishRequests.ts` | `dataAdapter.kaddishRequests.list()` | kaddishRequests | List uses imported mock data. |
| `/kaddish-requests/new` | `NewKaddishRequestPage` | `src/data/kaddishRequests.ts` | none | kaddish request draft shell | Static visual shell only. |
| `/kaddish-requests/K-2025-0321` | `KaddishRequestDetailsPage` | `src/data/kaddishRequests.ts` | `dataAdapter.kaddishRequests.findById(id)` | kaddishRequests | Route param: `requestId`. |
| `/volunteers` | `VolunteersList` | `src/data/volunteers.ts` | `dataAdapter.volunteers.list()` | volunteers | List uses imported mock data. |
| `/volunteers/new` | `NewVolunteerPage` | `src/data/volunteers.ts` | none | volunteer draft shell | Static visual shell only. |
| `/volunteers/V-2025-0142` | `VolunteerDetailsPage` | `src/data/volunteers.ts` | `dataAdapter.volunteers.findById(id)` | volunteers | Route param: `volunteerId`. |
| `/members` | `MembersList` | `src/data/members.ts` | `dataAdapter.members.list()` | members | List uses imported mock data. |
| `/members/new` | `NewMemberPage` | `src/data/members.ts` | none | member draft shell | Static visual shell only. |
| `/members/C-2025-1284` | `MemberDetailsPage` | `src/data/members.ts` | `dataAdapter.members.findById(id)` | members | Route param: `memberId`. |
| `/reports` | `ReportsPage` | `src/data/reports.ts` | `dataAdapter.reports.*` | reports | Adapter support exists; visual page remains unchanged. |
| `/settings` | `SettingsPage` | local/static shell | none | settings | No entity data model in current scope. |
| `/public` | `PublicHomePage` | `src/data/public.ts` | `dataAdapter.public.homeActions()` / `homeSections()` | public | Public visual shell only. |
| `/public/kaddish-request` | `PublicKaddishRequestPage` | `src/data/public.ts` | direct public data import | public form | Visual-only form fields. |
| `/public/minyan-request` | `PublicMinyanRequestPage` | `src/data/public.ts` | direct public data import | public form | Visual-only form fields. |
| `/public/volunteer-join` | `PublicVolunteerJoinPage` | `src/data/public.ts` | direct public data import | public form | Visual-only form fields. |
| `/public/donations` | `PublicDonationsPage` | `src/data/public.ts` | direct public data import | public content | No payment connection. |
| `/public/thank-you` | `PublicThankYouPage` | `src/data/public.ts` | direct public data import | public content | Confirmation shell only. |
| `/public/status` | `PublicStatusPage` | local/static status mock | future `publicStatusMock` | public status | Static visual result only. |

## Mapping rules

- Route parameters must map to public display IDs, not internal UUIDs.
- Supabase may later add internal UUID primary keys, but UI routes keep display IDs.
- Adapter methods remain synchronous in the mock layer.
- No route currently writes data.
- No public page currently submits data.

## Known intentional local data

Some detail-screen secondary tables and treatment timelines remain local static UI arrays. They are not yet primary entity lists. They should move to `assignments` and `activity_logs` once those models are implemented in a later sprint.
