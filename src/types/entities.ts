export type EntityStatus =
  | 'טיוטה'
  | 'פתוחה'
  | 'בטיפול'
  | 'פעילה'
  | 'פעיל'
  | 'ממתינה'
  | 'ממתין'
  | 'ממתין לאישור'
  | 'הושלמה'
  | 'הושלם'
  | 'נדרש אישור'
  | 'דורש טיפול'
  | 'דורש אימות'
  | 'לא פעיל'
  | 'לא זמין'
  | 'אישר'
  | 'מתוכנן'
  | 'בוטל'
  | 'הוקצה'
  | 'טרם הוקצה'

export type UrgencyLevel = 'נמוכה' | 'רגילה' | 'גבוהה'
export type RequestType = 'יומי' | 'יארצייט' | 'חד פעמי'
export type BadgeState = 'success' | 'warning' | 'danger' | 'neutral'
export type AvailabilityStatus = 'היום' | 'השבוע' | 'מחר' | 'לא זמין' | 'ימי חול בבוקר'
export type MembershipType = 'קבוע' | 'רגיל' | 'תומך' | 'פעיל קהילה'

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
  status: EntityStatus | 'תקין'
}

export type TimelineItem = {
  title?: string
  text: string
  status?: EntityStatus
}

export type CallRecord = {
  callId: string
  city: string
  time: string
  required: string
  missing: string
  confirmed: string
  status: EntityStatus
  urgency: UrgencyLevel
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
  requestType: RequestType
  date: string
  volunteer: string
  status: EntityStatus
  urgency: UrgencyLevel
  updated: string
}

export type VolunteerRecord = {
  volunteerId: string
  fullName: string
  city: string
  phone: string
  availability: AvailabilityStatus
  weeklyAssignments: string
  status: EntityStatus
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
  membershipType: MembershipType
  status: EntityStatus
  updated: string
  memberType?: string
  community?: string
  lastActivity?: string
}

export type AssignmentRecord = {
  assignmentId: string
  entityId: string
  entityType: 'call' | 'kaddishRequest' | 'volunteer' | 'member'
  date: string
  time?: string
  location?: string
  volunteerName?: string
  status: EntityStatus
}

export type ActivityLogRecord = {
  activityId: string
  entityId: string
  entityType: 'call' | 'kaddishRequest' | 'volunteer' | 'member' | 'publicSubmission'
  text: string
  createdAt: string
  status?: EntityStatus
}

export type ReportSummary = {
  stats: StatCard[]
  activityByType: LabelValueRow[]
  careStatus: LabelValueRow[]
  alerts: string[]
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

export type PublicFormDefinition = {
  route: string
  title: string
  fields: PublicField[]
}
