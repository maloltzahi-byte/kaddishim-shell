# Seed Data Notes — Kaddishim Shell

This document prepares the existing mock data for a future seed process. It is not SQL and must not be executed as a migration.

## calls

Mock source file:
- `src/data/calls.ts`

Example IDs:
- `M-2025-0548`
- `M-2025-0547`
- `M-2025-0546`

Required fields:
- `callId`
- `city`
- `time`
- `required`
- `missing`
- `confirmed`
- `status`
- `urgency`
- `updated`

Optional fields:
- `location`
- `area`
- `contact`
- `volunteersNeeded`

Fields needing normalization before Supabase:
- `required`, `missing`, `confirmed` should become integers.
- `time` should later become a structured time field if needed.
- `updated` is display text and should be replaced by timestamp fields.

## kaddishRequests

Mock source file:
- `src/data/kaddishRequests.ts`

Example IDs:
- `K-2025-0321`
- `K-2025-0320`
- `K-2025-0319`

Required fields:
- `requestId`
- `deceasedName`
- `city`
- `requestType`
- `date`
- `volunteer`
- `status`
- `urgency`
- `updated`

Optional fields:
- Future requester and assignment relations.

Fields needing normalization before Supabase:
- `date` should later become `date` or `timestamptz` depending on legal/product requirements.
- `volunteer` currently stores display status and should later separate assignment relation from status text.
- `updated` should become timestamp fields.

## volunteers

Mock source file:
- `src/data/volunteers.ts`

Example IDs:
- `V-2025-0142`
- `V-2025-0141`
- `V-2025-0140`

Required fields:
- `volunteerId`
- `fullName`
- `city`
- `phone`
- `availability`
- `weeklyAssignments`
- `status`
- `updated`

Optional fields:
- `activityArea`
- `assignedToday`

Fields needing normalization before Supabase:
- `weeklyAssignments` should become integer.
- `assignedToday` should become integer.
- `availability` may later become enum or schedule table.
- `updated` should become timestamp fields.

## members

Mock source file:
- `src/data/members.ts`

Example IDs:
- `C-2025-1284`
- `C-2025-1283`
- `C-2025-1282`

Required fields:
- `memberId`
- `fullName`
- `city`
- `phone`
- `email`
- `membershipType`
- `status`
- `updated`

Optional fields:
- `memberType`
- `community`
- `lastActivity`

Fields needing normalization before Supabase:
- `email` should be nullable or validated at application level.
- `membershipType` should be constrained by enum after approval.
- `updated` should become timestamp fields.

## reports

Mock source file:
- `src/data/reports.ts`

Required data blocks:
- `reportsStats`
- `reportsActivityByType`
- `reportsCareStatus`
- `reportsManagerAlerts`

Fields needing normalization before Supabase:
- Reports should eventually be derived from underlying tables, not seeded as static rows.
- Current reports data is acceptable for visual shell and read-only mock layer only.

## public

Mock source file:
- `src/data/public.ts`

Required data blocks:
- `publicHomeActions`
- `publicHomeSections`
- `publicKaddishRequestFields`
- `publicMinyanRequestFields`
- `publicVolunteerJoinFields`
- `publicDonationSections`
- `publicThankYouCards`
- `publicFooterLinks`

Fields needing normalization before Supabase:
- Form fields should later map to `public_submissions.payload`.
- Public form text is not a database schema by itself.
- No public submission is persisted in Sprint 23.

## Known hardcoded leftovers

The following can remain local until assignment and activity-log models are formally implemented:
- Detail-screen secondary assignment tables.
- Detail-screen treatment timelines.
- Small UI labels, page titles and helper rendering text.

These are not blockers for Supabase schema planning, but they must be addressed before full CRUD implementation.
