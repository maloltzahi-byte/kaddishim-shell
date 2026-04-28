import type { LabelValueRow, StatCard } from '../types/entities'

export const reportsStats: StatCard[] = [
  { label: 'פעילות כוללת', value: '1,842' },
  { label: 'קריאות שהושלמו', value: '328' },
  { label: 'בקשות ששובצו', value: '412' },
  { label: 'זמן תגובה ממוצע', value: '5.6 ש׳' }
]

export const reportsActivityByType: LabelValueRow[] = [
  { label: 'קריאות מניין', value: '328' },
  { label: 'בקשות קדיש', value: '412' },
  { label: 'מתנדבים פעילים', value: '142' },
  { label: 'חברים פעילים', value: '426' }
]

export const reportsCareStatus: LabelValueRow[] = [
  { label: 'פתוחות', value: '84' },
  { label: 'בטיפול', value: '63' },
  { label: 'הושלמו', value: '740' },
  { label: 'דורשות בדיקה', value: '21' }
]

export const reportsManagerAlerts = [
  '7 קריאות ללא מתנדב',
  '14 בקשות קדיש ממתינות לשיבוץ',
  '9 מתנדבים דורשים טיפול',
  '12 חברים דורשים אימות'
]
