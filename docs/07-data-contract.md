# Data Contract — Kaddishim Shell

## 1. Purpose

This document locks the internal data contract for the Kaddishim Shell before any real database connection. The current system uses static mock data and an internal adapter only. Supabase, API, auth, CRUD and real persistence are intentionally not connected in Sprint 23.

## 2. Entities

### calls

Primary key: `callId`
Example: `M-2025-0548`

Fields:
- `callId`
- `city`
- `time`
- `required`
- `missing`
- `confirmed`
- `status`
- `urgency`
- `updated`
- `location` optional
- `area` optional
- `contact` optional
- `volunteersNeeded` optional

Used by:
- `/calls`
- `/calls/new`
- `/calls/:callId`

Data source:
- `src/data/calls.ts`
- `dataAdapter.calls`

### kaddishRequests

Primary key: `requestId`
Example: `K-2025-0321`

Fields:
- `requestId`
- `deceasedName`
- `city`
- `requestType`
- `date`
- `volunteer`
- `status`
- `urgency`
- `updated`

Used by:
- `/kaddish-requests`
- `/kaddish-requests/new`
- `/kaddish-requests/:requestId`

Data source:
- `src/data/kaddishRequests.ts`
- `dataAdapter.kaddishRequests`

### volunteers

Primary key: `volunteerId`
Example: `V-2025-0142`

Fields:
- `volunteerId`
- `fullName`
- `city`
- `phone`
- `availability`
- `weeklyAssignments`
- `status`
- `updated`
- `activityArea` optional
- `assignedToday` optional

Used by:
- `/volunteers`
- `/volunteers/new`
- `/volunteers/:volunteerId`

Data source:
- `src/data/volunteers.ts`
- `dataAdapter.volunteers`

### members

Primary key: `memberId`
Example: `C-2025-1284`

Fields:
- `memberId`
- `fullName`
- `city`
- `phone`
- `email`
- `membershipType`
- `status`
- `updated`
- `memberType` optional
- `community` optional
- `lastActivity` optional

Used by:
- `/members`
- `/members/new`
- `/members/:memberId`

Data source:
- `src/data/members.ts`
- `dataAdapter.members`

### reports

Primary key: none in current mock layer.

Fields:
- `reportsStats`
- `reportsActivityByType`
- `reportsCareStatus`
- `reportsManagerAlerts`

Used by:
- `/reports`

Data source:
- `src/data/reports.ts`
- `dataAdapter.reports`

### public

Primary key: none in current mock layer.

Fields:
- `publicHomeActions`
- `publicHomeSections`
- `publicKaddishRequestFields`
- `publicMinyanRequestFields`
- `publicVolunteerJoinFields`
- `publicDonationSections`
- `publicThankYouCards`
- `publicFooterLinks`

Used by:
- `/public`
- `/public/kaddish-request`
- `/public/minyan-request`
- `/public/volunteer-join`
- `/public/donations`
- `/public/thank-you`
- `/public/status`

Data source:
- `src/data/public.ts`
- `dataAdapter.public`

## 3. ID formats

| Entity | Field | Format | Example |
|---|---|---|---|
| calls | `callId` | `M-YYYY-NNNN` | `M-2025-0548` |
| kaddishRequests | `requestId` | `K-YYYY-NNNN` | `K-2025-0321` |
| volunteers | `volunteerId` | `V-YYYY-NNNN` | `V-2025-0142` |
| members | `memberId` | `C-YYYY-NNNN` | `C-2025-1284` |
| assignments | `assignmentId` | future | not implemented |
| activityLogs | `activityId` | future | not implemented |

## 4. Status enums

Status values are defined in `EntityStatus` in `src/types/entities.ts`. Only values already used by the UI/mock data are included.

## 5. Urgency enums

Allowed urgency values:
- `נמוכה`
- `רגילה`
- `גבוהה`

## 6. Route to entity mapping

| Route | Entity | Adapter |
|---|---|---|
| `/calls` | calls | `dataAdapter.calls.list()` |
| `/calls/new` | calls draft shell | `src/data/calls.ts` |
| `/calls/:callId` | calls | `dataAdapter.calls.findById(id)` |
| `/kaddish-requests` | kaddishRequests | `dataAdapter.kaddishRequests.list()` |
| `/kaddish-requests/new` | kaddish request draft shell | `src/data/kaddishRequests.ts` |
| `/kaddish-requests/:requestId` | kaddishRequests | `dataAdapter.kaddishRequests.findById(id)` |
| `/volunteers` | volunteers | `dataAdapter.volunteers.list()` / `src/data/volunteers.ts` |
| `/volunteers/new` | volunteer draft shell | `src/data/volunteers.ts` |
| `/volunteers/:volunteerId` | volunteers | `dataAdapter.volunteers.findById(id)` |
| `/members` | members | `dataAdapter.members.list()` |
| `/members/new` | member draft shell | `src/data/members.ts` |
| `/members/:memberId` | members | `dataAdapter.members.findById(id)` |
| `/reports` | reports | `dataAdapter.reports` |
| `/public` | public | `dataAdapter.public` / `src/data/public.ts` |
| `/public/status` | public status mock | local visual shell |

## 7. UI-to-data mapping

| UI page | Data file | Adapter |
|---|---|---|
| `CallsList.tsx` | `src/data/calls.ts` | direct import |
| `CallDetailsPage.tsx` | `src/data/calls.ts` | `dataAdapter.calls` |
| `KaddishRequestsList.tsx` | `src/data/kaddishRequests.ts` | direct import |
| `KaddishRequestDetailsPage.tsx` | `src/data/kaddishRequests.ts` | `dataAdapter.kaddishRequests` |
| `VolunteersList.tsx` | `src/data/volunteers.ts` | direct import |
| `VolunteerDetailsPage.tsx` | `src/data/volunteers.ts` | `dataAdapter.volunteers` |
| `MembersList.tsx` | `src/data/members.ts` | direct import |
| `MemberDetailsPage.tsx` | `src/data/members.ts` | `dataAdapter.members` |
| `ReportsPage.tsx` | `src/data/reports.ts` | adapter support added |
| Public pages | `src/data/public.ts` | direct imports / adapter support |

## 8. Supabase readiness notes

The current display IDs must remain visible to users even if Supabase uses internal UUID primary keys. Future schema should use:
- `id uuid primary key`
- public display id such as `call_id`, `request_id`, `volunteer_id`, `member_id`
- status fields constrained by application enums
- `created_at` and `updated_at` timestamps

## 9. Intentionally not connected

The following are intentionally not implemented in Sprint 23:
- Supabase client
- `.env`
- API calls
- real persistence
- auth
- CRUD
- realtime
- form submission
- validation engine
