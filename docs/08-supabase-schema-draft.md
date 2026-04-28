# Supabase Schema Draft — Kaddishim Shell

This is a planning document only. It is not a migration and must not be executed as SQL in Sprint 23.

## Global conventions

- Internal primary key: `id uuid primary key`
- Public display IDs stay as text unique fields: `call_id`, `request_id`, `volunteer_id`, `member_id`
- Timestamps: `created_at timestamptz default now()`, `updated_at timestamptz default now()`
- Status values remain application-level enums until real schema constraints are approved.

## calls

Purpose:
Stores minyan call requests.

Suggested columns:
- `id uuid primary key`
- `call_id text unique not null`
- `city text not null`
- `location text`
- `area text`
- `requested_time text`
- `required_count integer`
- `missing_count integer`
- `confirmed_count integer`
- `contact_name text`
- `contact_phone text`
- `volunteers_needed integer`
- `status text not null`
- `urgency text not null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

UI mapping:
- `call_id` → `callId`
- `requested_time` → `time`
- `required_count` → `required`
- `missing_count` → `missing`
- `confirmed_count` → `confirmed`
- `volunteers_needed` → `volunteersNeeded`

## kaddish_requests

Purpose:
Stores kaddish requests and core request status.

Suggested columns:
- `id uuid primary key`
- `request_id text unique not null`
- `deceased_name text not null`
- `city text`
- `request_type text not null`
- `start_date text`
- `volunteer_status text`
- `status text not null`
- `urgency text not null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

UI mapping:
- `request_id` → `requestId`
- `deceased_name` → `deceasedName`
- `request_type` → `requestType`
- `start_date` → `date`
- `volunteer_status` → `volunteer`

## volunteers

Purpose:
Stores volunteer profiles and availability information.

Suggested columns:
- `id uuid primary key`
- `volunteer_id text unique not null`
- `full_name text not null`
- `city text`
- `phone text`
- `availability text`
- `weekly_assignments integer`
- `activity_area text`
- `assigned_today integer`
- `status text not null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

UI mapping:
- `volunteer_id` → `volunteerId`
- `full_name` → `fullName`
- `weekly_assignments` → `weeklyAssignments`
- `activity_area` → `activityArea`
- `assigned_today` → `assignedToday`

## members

Purpose:
Stores community members and requester profiles.

Suggested columns:
- `id uuid primary key`
- `member_id text unique not null`
- `full_name text not null`
- `city text`
- `phone text`
- `email text`
- `membership_type text`
- `member_type text`
- `community text`
- `last_activity text`
- `status text not null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

UI mapping:
- `member_id` → `memberId`
- `full_name` → `fullName`
- `membership_type` → `membershipType`
- `member_type` → `memberType`
- `last_activity` → `lastActivity`

## assignments

Purpose:
Connects volunteers to calls and kaddish requests.

Suggested columns:
- `id uuid primary key`
- `assignment_id text unique not null`
- `entity_type text not null`
- `entity_display_id text not null`
- `volunteer_id text`
- `assignment_date text`
- `assignment_time text`
- `location text`
- `status text not null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

Relationships:
- `volunteer_id` can later reference `volunteers.volunteer_id`.
- `entity_display_id` maps to `calls.call_id` or `kaddish_requests.request_id` depending on `entity_type`.

## activity_logs

Purpose:
Stores timeline and treatment events for all entities.

Suggested columns:
- `id uuid primary key`
- `activity_id text unique not null`
- `entity_type text not null`
- `entity_display_id text not null`
- `body text not null`
- `status text`
- `created_at timestamptz default now()`

Relationships:
- `entity_display_id` maps to the public display ID of the relevant entity.

## public_submissions

Purpose:
Stores future public form submissions after write flows are approved.

Suggested columns:
- `id uuid primary key`
- `submission_id text unique not null`
- `submission_type text not null`
- `full_name text`
- `phone text`
- `email text`
- `city text`
- `payload jsonb`
- `status text not null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

Notes:
- In Sprint 23 this table is only planned, not implemented.
- No public form submits to Supabase yet.
