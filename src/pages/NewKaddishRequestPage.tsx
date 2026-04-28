import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge } from '../components/primitives/Badge'

const intakeStats = [
  { label: 'סוג פעולה', value: 'בקשת קדיש' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

const deceasedDetails = [
  { label: 'שם נפטר', value: 'יעקב בן משה' },
  { label: 'סוג קדיש', value: 'יומי' },
  { label: 'תאריך התחלה', value: '28/04/2026' },
  { label: 'עיר', value: 'ירושלים' },
  { label: 'סטטוס פתיחה', value: 'טיוטה' }
]

const requesterDetails = [
  { label: 'שם מבקש', value: 'שלמה אברמוב' },
  { label: 'טלפון', value: '050-1112233' },
  { label: 'אימייל', value: 'shlomo@example.com' },
  { label: 'קשר לנפטר', value: 'בן' },
  { label: 'עיר מגורים', value: 'ירושלים' }
]

const validationItems = [
  { label: 'פרטי נפטר מלאים', status: 'תקין' },
  { label: 'פרטי מבקש מלאים', status: 'תקין' },
  { label: 'סוג קדיש הוגדר', status: 'תקין' },
  { label: 'נדרש שיבוץ מתנדב', status: 'ממתין' }
]

const timeline = [
  'טיוטה — הזנת פרטי נפטר ומבקש',
  'בדיקת מוקד — אימות פרטי הבקשה',
  'שיבוץ מתנדב — איתור מתנדב מתאים',
  'מעקב ביצוע — עדכון פעילות הקדיש'
]

function NewKaddishRequestStats() {
  return <div className="calls-stats">{intakeStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function InfoPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}

function ValidationPanel() {
  return <section className="report-panel"><h2>בדיקות פתיחה</h2><div className="report-metric-list">{validationItems.map(item => <div className="report-metric-row" key={item.label}><span>{item.label}</span><Badge tone={item.status === 'תקין' ? 'success' : 'warning'}>{item.status}</Badge></div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/kaddish-requests" className="details-back-link">חזרה לבקשות קדיש</Link><Button>שמירת טיוטה</Button><Button variant="outline">פתיחת בקשה</Button></div>
}

function ProcessTimeline() {
  return <section className="reports-table-section details-timeline"><h2>תהליך פתיחת בקשת קדיש</h2><div className="timeline-list">{timeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function NewKaddishRequestPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>יצירת בקשת קדיש</h1><p>פתיחת בקשה חדשה, בדיקת פרטי נפטר ומבקש, והכנה לשיבוץ מתנדב</p></div><section className="calls-panel"><HeaderActions /><NewKaddishRequestStats /><div className="reports-grid"><InfoPanel title="פרטי הנפטר" rows={deceasedDetails} /><InfoPanel title="פרטי המבקש" rows={requesterDetails} /><ValidationPanel /></div><ProcessTimeline /></section></div>
}
