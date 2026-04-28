import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge } from '../components/primitives/Badge'

const intakeStats = [
  { label: 'סוג פעולה', value: 'קריאת מניין' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

const callDetails = [
  { label: 'עיר', value: 'בני ברק' },
  { label: 'בית עלמין', value: 'בית החיים בני ברק' },
  { label: 'אזור', value: 'חלקה ב׳' },
  { label: 'נקודת מפגש', value: 'שער ראשי' },
  { label: 'שעה מבוקשת', value: '07:00' }
]

const contactDetails = [
  { label: 'איש קשר', value: 'גבי המקום' },
  { label: 'טלפון איש קשר', value: '050-1111111' },
  { label: 'מתנדבים נדרשים', value: '10' },
  { label: 'דחיפות', value: 'גבוהה' },
  { label: 'הערה', value: 'נדרש להשלים מניין מוקדם בבוקר' }
]

const validationItems = [
  { label: 'פרטי מקום מלאים', status: 'תקין' },
  { label: 'איש קשר זמין', status: 'תקין' },
  { label: 'שעת קריאה הוגדרה', status: 'תקין' },
  { label: 'נדרש אישור מוקד', status: 'ממתין' }
]

const timeline = [
  'טיוטה — הזנת פרטי קריאה',
  'בדיקת מוקד — אימות פרטי מקום ואיש קשר',
  'שיבוץ מתנדבים — פתיחת הקריאה למתנדבים זמינים',
  'מעקב ביצוע — עדכון אישורים והשלמות'
]

function NewCallStats() {
  return <div className="calls-stats">{intakeStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function InfoPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}

function ValidationPanel() {
  return <section className="report-panel"><h2>בדיקות פתיחה</h2><div className="report-metric-list">{validationItems.map(item => <div className="report-metric-row" key={item.label}><span>{item.label}</span><Badge tone={item.status === 'תקין' ? 'success' : 'warning'}>{item.status}</Badge></div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/calls" className="details-back-link">חזרה לקריאות</Link><Button>שמירת טיוטה</Button><Button variant="outline">פתיחת קריאה</Button></div>
}

function ProcessTimeline() {
  return <section className="reports-table-section details-timeline"><h2>תהליך פתיחת קריאה</h2><div className="timeline-list">{timeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function NewCallPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>יצירת קריאת מניין</h1><p>פתיחת קריאה חדשה, בדיקת פרטי מקום והכנה לשיבוץ מתנדבים</p></div><section className="calls-panel"><HeaderActions /><NewCallStats /><div className="reports-grid"><InfoPanel title="פרטי הקריאה" rows={callDetails} /><InfoPanel title="פרטי קשר ושיבוץ" rows={contactDetails} /><ValidationPanel /></div><ProcessTimeline /></section></div>
}
