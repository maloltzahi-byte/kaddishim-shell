import type { PublicAction, PublicCard, PublicField } from '../types/entities'

export const publicHomeActions: PublicAction[] = [
  { label: 'פתיחת בקשת קדיש', to: '/public/kaddish-request' },
  { label: 'פתיחת קריאת מניין', to: '/public/minyan-request' },
  { label: 'הצטרפות כמתנדב', to: '/public/volunteer-join' },
  { label: 'בדיקת סטטוס בקשה', to: '/public/status' }
]

export const publicHomeSections: PublicCard[] = [
  { title: 'איך זה עובד', text: 'משאירים פרטים ראשוניים, המוקד בודק את הבקשה וממשיך לתיאום מסודר.' },
  { title: 'מה אפשר לבקש', text: 'בקשת קדיש, קריאת מניין, הצטרפות מתנדבים וסיוע קהילתי סביב פעילות הקדישים.' },
  { title: 'למי השירות מתאים', text: 'משפחות, קהילות, גבאים ומתנדבים המבקשים תהליך ברור ומכבד.' },
  { title: 'אמינות ומעקב', text: 'כל בקשה מקבלת מסלול טיפול ברור, סטטוס והמשך טיפול אנושי.' }
]

export const publicKaddishRequestFields: PublicField[] = ['פרטי הנפטר', 'פרטי המבקש', 'סוג הקדיש', 'תאריך התחלה', 'עיר / אזור', 'הערות']
export const publicMinyanRequestFields: PublicField[] = ['עיר', 'מקום / בית עלמין / כתובת', 'שעה מבוקשת', 'איש קשר', 'טלפון', 'מספר משתתפים חסר', 'דחיפות', 'הערות']
export const publicVolunteerJoinFields: PublicField[] = ['שם מלא', 'טלפון', 'אימייל', 'עיר מגורים', 'אזורי פעילות', 'זמינות', 'סוג פעילות מועדף', 'הערות']

export const publicDonationSections: PublicCard[] = [
  { title: 'למה לתמוך', text: 'תמיכה בפעילות מאפשרת הרחבת מערך הקדישים, הקריאות והסיוע למשפחות.' },
  { title: 'לאן התרומה מיועדת', text: 'סיוע למערך המתנדבים, תיאום מוקד, מעקב ושיפור זמינות השירות.' },
  { title: 'אפשרויות שותפות', text: 'שותפות חודשית, תמיכה נקודתית או יצירת קשר לבירור מסלול מתאים.' },
  { title: 'יצירת קשר', text: 'השאירו פרטים ונציג מטעם המוקד יחזור אליכם להמשך תיאום.' }
]

export const publicThankYouCards: PublicCard[] = [
  { title: 'מה קורה עכשיו', text: 'נציג מטעם המוקד יבדוק את הפרטים ויעדכן את המשך הטיפול.' },
  { title: 'זמן טיפול משוער', text: 'בדרך כלל בדיקה ראשונית מתבצעת בהקדם בהתאם לדחיפות הבקשה.' },
  { title: 'איך עוקבים אחר הבקשה', text: 'ניתן להיכנס למסך בדיקת סטטוס ולהזין מספר בקשה או טלפון.' }
]

export const publicFooterLinks = publicHomeActions
