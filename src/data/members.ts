import type { LabelValueRow, MemberRecord, StatCard, ValidationItem } from '../types/entities'

export const membersStats: StatCard[] = [
  { label: 'חברים רשומים', value: '1,284' },
  { label: 'פעילים החודש', value: '426' },
  { label: 'הצטרפו השבוע', value: '38' },
  { label: 'דורשים אימות', value: '12' }
]

export const membersData: MemberRecord[] = [
  { memberId: 'C-2025-1284', fullName: 'שלמה אברמוב', city: 'ירושלים', phone: '050-1112233', email: 'shlomo@example.com', membershipType: 'קבוע', status: 'פעיל', updated: 'לפני 6 דק׳' },
  { memberId: 'C-2025-1283', fullName: 'יצחק רוזן', city: 'בני ברק', phone: '052-2223344', email: 'yitzhak@example.com', membershipType: 'רגיל', status: 'פעיל', updated: 'לפני 20 דק׳' },
  { memberId: 'C-2025-1282', fullName: 'אליהו כהן', city: 'פתח תקוה', phone: '053-3334455', email: 'eliyahu@example.com', membershipType: 'רגיל', status: 'דורש אימות', updated: 'לפני 45 דק׳' },
  { memberId: 'C-2025-1281', fullName: 'מאיר לוי', city: 'אלעד', phone: '054-4445566', email: 'meir@example.com', membershipType: 'תומך', status: 'פעיל', updated: 'לפני שעה' },
  { memberId: 'C-2025-1280', fullName: 'ישראל פרידמן', city: 'בית שמש', phone: '055-5556677', email: 'israel@example.com', membershipType: 'רגיל', status: 'לא פעיל', updated: 'לפני שעתיים' }
]

export const newMemberStats: StatCard[] = [
  { label: 'סוג פעולה', value: 'חבר' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

export const newMemberDetails: LabelValueRow[] = [
  { label: 'שם חבר', value: 'דוד לוי' },
  { label: 'טלפון', value: '053-3334455' },
  { label: 'אימייל', value: 'david@example.com' },
  { label: 'עיר מגורים', value: 'בני ברק' },
  { label: 'סטטוס פתיחה', value: 'טיוטה' }
]

export const newMemberCommunityDetails: LabelValueRow[] = [
  { label: 'סוג חבר', value: 'פעיל קהילה' },
  { label: 'קהילה', value: 'מרכז העיר' },
  { label: 'תחום עניין', value: 'קדישים וקריאות מניין' },
  { label: 'איש קשר פנימי', value: 'מוקד שירות' },
  { label: 'הערה', value: 'מתאים לעדכונים שוטפים' }
]

export const newMemberValidationItems: ValidationItem[] = [
  { label: 'פרטי קשר מלאים', status: 'תקין' },
  { label: 'שיוך קהילתי הוגדר', status: 'תקין' },
  { label: 'סוג חבר הוגדר', status: 'תקין' },
  { label: 'נדרש אישור מוקד', status: 'ממתין' }
]

export const newMemberTimeline = [
  'טיוטה — הזנת פרטי חבר',
  'בדיקת מוקד — אימות פרטי קשר ושיוך',
  'אישור כרטיס — סימון החבר כפעיל',
  'מעקב קהילתי — חיבור לפעילות ועדכונים'
]
