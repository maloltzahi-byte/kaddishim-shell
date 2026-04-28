import type { KaddishRequestRecord, LabelValueRow, StatCard, ValidationItem } from '../types/entities'

export const kaddishRequestStats: StatCard[] = [
  { label: 'בקשות פתוחות', value: '56' },
  { label: 'ממתינות לשיבוץ', value: '14' },
  { label: 'שובצו היום', value: '22' },
  { label: 'דחופות', value: '6' }
]

export const kaddishRequestsData: KaddishRequestRecord[] = [
  { requestId: 'K-2025-0321', deceasedName: 'יעקב בן משה', city: 'ירושלים', requestType: 'יומי', date: '28/04/2026', volunteer: 'הוקצה', status: 'פעילה', urgency: 'רגילה', updated: 'לפני 7 דק׳' },
  { requestId: 'K-2025-0320', deceasedName: 'מרים בת שרה', city: 'בני ברק', requestType: 'יארצייט', date: '28/04/2026', volunteer: 'טרם הוקצה', status: 'ממתינה', urgency: 'גבוהה', updated: 'לפני 15 דק׳' },
  { requestId: 'K-2025-0319', deceasedName: 'דוד בן רחל', city: 'פתח תקוה', requestType: 'חד פעמי', date: '29/04/2026', volunteer: 'הוקצה', status: 'פעילה', urgency: 'רגילה', updated: 'לפני 22 דק׳' },
  { requestId: 'K-2025-0318', deceasedName: 'אסתר בת לאה', city: 'אלעד', requestType: 'יומי', date: '30/04/2026', volunteer: 'טרם הוקצה', status: 'ממתינה', urgency: 'גבוהה', updated: 'לפני 35 דק׳' },
  { requestId: 'K-2025-0317', deceasedName: 'חיים בן יוסף', city: 'בית שמש', requestType: 'יארצייט', date: '01/05/2026', volunteer: 'הושלם', status: 'הושלמה', urgency: 'נמוכה', updated: 'לפני שעה' }
]

export const newKaddishRequestStats: StatCard[] = [
  { label: 'סוג פעולה', value: 'בקשת קדיש' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

export const newKaddishDeceasedDetails: LabelValueRow[] = [
  { label: 'שם נפטר', value: 'יעקב בן משה' },
  { label: 'סוג קדיש', value: 'יומי' },
  { label: 'תאריך התחלה', value: '28/04/2026' },
  { label: 'עיר', value: 'ירושלים' },
  { label: 'סטטוס פתיחה', value: 'טיוטה' }
]

export const newKaddishApplicantDetails: LabelValueRow[] = [
  { label: 'שם מבקש', value: 'שלמה אברמוב' },
  { label: 'טלפון', value: '050-1112233' },
  { label: 'אימייל', value: 'shlomo@example.com' },
  { label: 'קשר לנפטר', value: 'בן' },
  { label: 'עיר מגורים', value: 'ירושלים' }
]

export const newKaddishValidationItems: ValidationItem[] = [
  { label: 'פרטי נפטר מלאים', status: 'תקין' },
  { label: 'פרטי מבקש מלאים', status: 'תקין' },
  { label: 'סוג קדיש הוגדר', status: 'תקין' },
  { label: 'נדרש שיבוץ מתנדב', status: 'ממתין' }
]

export const newKaddishTimeline = [
  'טיוטה — הזנת פרטי נפטר ומבקש',
  'בדיקת מוקד — אימות פרטי הבקשה',
  'שיבוץ מתנדב — איתור מתנדב מתאים',
  'מעקב ביצוע — עדכון פעילות הקדיש'
]
