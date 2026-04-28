create extension if not exists pgcrypto;

create table if not exists calls (
  id uuid primary key default gen_random_uuid(),
  call_id text unique not null,
  city text not null,
  location text,
  area text,
  requested_time text,
  required_count integer,
  missing_count integer,
  confirmed_count integer,
  contact_name text,
  contact_phone text,
  volunteers_needed integer,
  status text not null,
  urgency text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists kaddish_requests (
  id uuid primary key default gen_random_uuid(),
  request_id text unique not null,
  deceased_name text not null,
  city text,
  request_type text not null,
  start_date text,
  volunteer_status text,
  status text not null,
  urgency text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists volunteers (
  id uuid primary key default gen_random_uuid(),
  volunteer_id text unique not null,
  full_name text not null,
  city text,
  phone text,
  availability text,
  weekly_assignments integer,
  activity_area text,
  assigned_today integer,
  status text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  member_id text unique not null,
  full_name text not null,
  city text,
  phone text,
  email text,
  membership_type text,
  member_type text,
  community text,
  last_activity text,
  status text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists assignments (
  id uuid primary key default gen_random_uuid(),
  assignment_id text unique not null,
  entity_type text not null,
  entity_display_id text not null,
  volunteer_id text,
  assignment_date text,
  assignment_time text,
  location text,
  status text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists activity_logs (
  id uuid primary key default gen_random_uuid(),
  activity_id text unique not null,
  entity_type text not null,
  entity_display_id text not null,
  body text not null,
  status text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public_submissions (
  id uuid primary key default gen_random_uuid(),
  submission_id text unique not null,
  submission_type text not null,
  full_name text,
  phone text,
  email text,
  city text,
  payload jsonb,
  status text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
