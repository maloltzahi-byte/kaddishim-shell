import type { CallRecord, LabelValueRow, StatCard, ValidationItem } from '../types/entities'

export const callsStats: StatCard[] = [
  { label: 'קריאות פתוחות', value: '28' },
  { label: 'בטיפול', value: '17' },
  { label: 'הושלמו היום', value: '18' },
  { label: 'דחופות', value: '7' }
]

export const callsData: CallRecord[] = [
  { callId: 'M-2025-0548', city: 'בני ברק', time: '07:00', required: '10', missing: '2', confirmed: '8', status: 'פתוחה', urgency: 'גבוהה', updated: 'לפני 5 דק׳' },
  { callId: 'M-2025-0547', city: 'אלעד', time: '06:45', required: '10', missing: '4', confirmed: '6', status: 'בטיפול', urgency: 'גבוהה', updated: 'לפני 12 דק׳' },
  { callId: 'M-2025-0546', city: 'פתח תקוה', time: '07:15', required: '10', missing: '1', confirmed: '9', status: 'בטיפול', urgency: 'רגילה', updated: 'לפני 18 דק׳' },
  { callId: 'M-2025-0545', city: 'בית שמש', time: '08:00', required: '10', missing: '0', confirmed: '10', status: 'הושלמה', urgency: 'רגילה', updated: 'לפני 25 דק׳' },
  { callId: 'M-2025-0544', city: 'ירושלים', time: '09:00', required: '10', missing: '0', confirmed: '10', status: 'הושלמה', urgency: 'נמוכה', updated: 'לפני 40 דק׳' }
]

export const newCallStats: StatCard[] = [
  { label: 'סוג פעולה', value: 'קריאת מניין' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

export const newCallDetails: LabelValueRow[] = [
  { label: 'עיר', value: 'בני ברק' },
  { label: 'בית עלמין', value: 'בית החיים בני ברק' },
  { label: 'אזור', value: 'חלקה ב׳' },
  { label: 'נקודת מפגש', value: 'שער ראשי' },
  { label: 'שעה מבוקשת', value: '07:00' }
]

export const newCallContactDetails: LabelValueRow[] = [
  { label: 'איש קשר', value: 'גבי המקום' },
  { label: 'טלפון איש קשר', value: '050-1111111' },
  { label: 'מתנדבים נדרשים', value: '10' },
  { label: 'דחיפות', value: 'גבוהה' },
  { label: 'הערה', value: 'נדרש להשלים מניין מוקדם בבוקר' }
]

export const newCallValidationItems: ValidationItem[] = [
  { label: 'פרטי מקום מלאים', status: 'תקין' },
  { label: 'איש קשר זמין', status: 'תקין' },
  { label: 'שעת קריאה הוגדרה', status: 'תקין' },
  { label: 'נדרש אישור מוקד', status: 'ממתין' }
]

export const newCallTimeline = [
  'טיוטה — הזנת פרטי קריאה',
  'בדיקת מוקד — אימות פרטי מקום ואיש קשר',
  'שיבוץ מתנדבים — פתיחת הקריאה למתנדבים זמינים',
  'מעקב ביצוע — עדכון אישורים והשלמות'
]
