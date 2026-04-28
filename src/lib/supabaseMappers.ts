import type { CallRecord, KaddishRequestRecord, MemberRecord, VolunteerRecord } from '../types/entities'
import type { SupabaseCallRow, SupabaseKaddishRequestRow, SupabaseMemberRow, SupabaseVolunteerRow } from '../types/supabase'

export function mapCallRowToRecord(row: SupabaseCallRow): CallRecord {
  return {
    callId: row.call_id,
    city: row.city,
    location: row.location ?? '',
    area: row.area ?? '',
    time: row.requested_time ?? '',
    required: String(row.required_count ?? ''),
    missing: String(row.missing_count ?? ''),
    confirmed: String(row.confirmed_count ?? ''),
    contact: row.contact_name ?? '',
    volunteersNeeded: String(row.volunteers_needed ?? ''),
    status: row.status as CallRecord['status'],
    urgency: (row.urgency ?? 'רגילה') as CallRecord['urgency'],
    updated: row.updated_at ?? ''
  }
}

export function mapKaddishRequestRowToRecord(row: SupabaseKaddishRequestRow): KaddishRequestRecord {
  return {
    requestId: row.request_id,
    deceasedName: row.deceased_name,
    city: row.city ?? '',
    requestType: row.request_type as KaddishRequestRecord['requestType'],
    date: row.start_date ?? '',
    volunteer: row.volunteer_status ?? '',
    status: row.status as KaddishRequestRecord['status'],
    urgency: (row.urgency ?? 'רגילה') as KaddishRequestRecord['urgency'],
    updated: row.updated_at ?? ''
  }
}

export function mapVolunteerRowToRecord(row: SupabaseVolunteerRow): VolunteerRecord {
  return {
    volunteerId: row.volunteer_id,
    fullName: row.full_name,
    city: row.city ?? '',
    phone: row.phone ?? '',
    availability: (row.availability ?? 'היום') as VolunteerRecord['availability'],
    weeklyAssignments: String(row.weekly_assignments ?? ''),
    activityArea: row.activity_area ?? '',
    assignedToday: String(row.assigned_today ?? ''),
    status: row.status as VolunteerRecord['status'],
    updated: row.updated_at ?? ''
  }
}

export function mapMemberRowToRecord(row: SupabaseMemberRow): MemberRecord {
  return {
    memberId: row.member_id,
    fullName: row.full_name,
    city: row.city ?? '',
    phone: row.phone ?? '',
    email: row.email ?? '',
    membershipType: (row.membership_type ?? 'רגיל') as MemberRecord['membershipType'],
    memberType: row.member_type ?? '',
    community: row.community ?? '',
    lastActivity: row.last_activity ?? '',
    status: row.status as MemberRecord['status'],
    updated: row.updated_at ?? ''
  }
}
