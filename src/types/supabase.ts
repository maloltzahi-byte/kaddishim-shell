export type SupabaseCallRow = {
  id: string
  call_id: string
  city: string
  location: string | null
  area: string | null
  requested_time: string | null
  required_count: number | null
  missing_count: number | null
  confirmed_count: number | null
  contact_name: string | null
  contact_phone: string | null
  volunteers_needed: number | null
  status: string
  urgency: string | null
  created_at: string | null
  updated_at: string | null
}

export type SupabaseKaddishRequestRow = {
  id: string
  request_id: string
  deceased_name: string
  city: string | null
  request_type: string
  start_date: string | null
  volunteer_status: string | null
  status: string
  urgency: string | null
  created_at: string | null
  updated_at: string | null
}

export type SupabaseVolunteerRow = {
  id: string
  volunteer_id: string
  full_name: string
  city: string | null
  phone: string | null
  availability: string | null
  weekly_assignments: number | null
  activity_area: string | null
  assigned_today: number | null
  status: string
  created_at: string | null
  updated_at: string | null
}

export type SupabaseMemberRow = {
  id: string
  member_id: string
  full_name: string
  city: string | null
  phone: string | null
  email: string | null
  membership_type: string | null
  member_type: string | null
  community: string | null
  last_activity: string | null
  status: string
  created_at: string | null
  updated_at: string | null
}
