import type { LabelValueRow, StatCard, ValidationItem, VolunteerRecord } from '../types/entities'

export const volunteersStats: StatCard[] = [
  { label: 'מתנדבים פעילים', value: '142' },
  { label: 'זמינים היום', value: '87' },
  { label: 'שובצו השבוע', value: '34' },
  { label: 'דורשים טיפול', value: '9' }
]

export const volunteersData: VolunteerRecord[] = [
  { volunteerId: 'V-2025-0142', fullName: 'אברהם כהן', city: 'ירושלים', phone: '050-1234567', availability: 'היום', weeklyAssignments: '4', status: 'פעיל', updated: 'לפני 4 דק׳' },
  { volunteerId: 'V-2025-0141', fullName: 'משה לוי', city: 'בני ברק', phone: '052-2345678', availability: 'השבוע', weeklyAssignments: '2', status: 'פעיל', updated: 'לפני 18 דק׳' },
  { volunteerId: 'V-2025-0140', fullName: 'יוסף מזרחי', city: 'פתח תקוה', phone: '053-3456789', availability: 'לא זמין', weeklyAssignments: '0', status: 'דורש טיפול', updated: 'לפני 35 דק׳' },
  { volunteerId: 'V-2025-0139', fullName: 'דוד פרידמן', city: 'אלעד', phone: '054-4567890', availability: 'היום', weeklyAssignments: '5', status: 'פעיל', updated: 'לפני שעה' },
  { volunteerId: 'V-2025-0138', fullName: 'חיים ביטון', city: 'בית שמש', phone: '055-5678901', availability: 'מחר', weeklyAssignments: '1', status: 'ממתין לאישור', updated: 'לפני שעתיים' }
]

export const newVolunteerStats: StatCard[] = [
  { label: 'סוג פעולה', value: 'מתנדב' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

export const newVolunteerDetails: LabelValueRow[] = [
  { label: 'שם מתנדב', value: 'אברהם כהן' },
  { label: 'טלפון', value: '052-2223344' },
  { label: 'אימייל', value: 'avraham@example.com' },
  { label: 'עיר מגורים', value: 'ירושלים' },
  { label: 'סטטוס פתיחה', value: 'טיוטה' }
]

export const newVolunteerAvailabilityDetails: LabelValueRow[] = [
  { label: 'אזור פעילות', value: 'ירושלים והסביבה' },
  { label: 'זמינות', value: 'ימי חול בבוקר' },
  { label: 'סוג פעילות', value: 'קדיש יומי ויארצייט' },
  { label: 'יכולת הגעה', value: 'עצמאית' },
  { label: 'הערה', value: 'מתאים לשיבוצים קבועים' }
]

export const newVolunteerValidationItems: ValidationItem[] = [
  { label: 'פרטי קשר מלאים', status: 'תקין' },
  { label: 'אזור פעילות הוגדר', status: 'תקין' },
  { label: 'זמינות הוגדרה', status: 'תקין' },
  { label: 'נדרש אישור מוקד', status: 'ממתין' }
]

export const newVolunteerTimeline = [
  'טיוטה — הזנת פרטי מתנדב',
  'בדיקת מוקד — אימות פרטי קשר וזמינות',
  'אישור פעילות — סימון המתנדב כפעיל',
  'שיבוץ ראשון — התאמה לקריאת מניין או בקשת קדיש'
]
