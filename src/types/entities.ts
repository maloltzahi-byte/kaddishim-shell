export type StatCard = {
  label: string
  value: string
}

export type LabelValueRow = {
  label: string
  value: string
}

export type ValidationItem = {
  label: string
  status: string
}

export type TimelineItem = {
  title?: string
  text: string
  status?: string
}

export type CallRecord = {
  callId: string
  city: string
  time: string
  required: string
  missing: string
  confirmed: string
  status: string
  urgency: string
  updated: string
  location?: string
  area?: string
  contact?: string
  volunteersNeeded?: string
}

export type KaddishRequestRecord = {
  requestId: string
  deceasedName: string
  city: string
  requestType: string
  date: string
  volunteer: string
  status: string
  urgency: string
  updated: string
}

export type VolunteerRecord = {
  volunteerId: string
  fullName: string
  city: string
  phone: string
  availability: string
  weeklyAssignments: string
  status: string
  updated: string
  activityArea?: string
  assignedToday?: string
}

export type MemberRecord = {
  memberId: string
  fullName: string
  city: string
  phone: string
  email: string
  membershipType: string
  status: string
  updated: string
  memberType?: string
  community?: string
  lastActivity?: string
}

export type PublicAction = {
  label: string
  to: string
}

export type PublicCard = {
  title: string
  text: string
}

export type PublicField = string
