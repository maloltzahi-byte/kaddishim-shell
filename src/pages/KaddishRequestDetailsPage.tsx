import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'

type KaddishActionRow = Record<string, React.ReactNode> & {
  date: string
  time: string
  location: string
  volunteer: string
  status: string
}

const requestStats = [
  { label: 'סוג קדיש', value: 'יומי' },
  { label: 'סטטוס', value: 'פעילה' },
  { label: 'דחיפות', value: 'רגילה' },
  { label: 'מתנדב', value: 'הוקצה' }
]

const deceasedDetails = [
  { label: 'שם נפטר', value: 'יעקב בן משה' },
  { label: 'סוג קדיש', value: 'יומי' },
  { label: 'תאריך התחלה', value: '28/04/2026' },
  { label: 'עיר', value: 'ירושלים' },
  { label: 'סטטוס', value: 'פעילה' },
  { label: 'דחיפות', value: 'רגילה' }
]

const requesterDetails = [
  { label: 'שם מבקש', value: 'שלמה אברמוב' },
  { label: 'טלפון', value: '050-1112233' },
  { label: 'אימייל', value: 'shlomo@example.com' },
  { label: 'קשר לנפטר', value: 'בן' },
  { label: 'עיר מגורים', value: 'ירושלים' }
]

const assignmentDetails = [
  { label: 'מתנדב משובץ', value: 'אברהם כהן' },
  { label: 'טלפון מתנדב', value: '050-1234567' },
  { label: 'סטטוס שיבוץ', value: 'הוקצה' },
  { label: 'זמן שיבוץ', value: 'לפני 7 דק׳' },
  { label: 'מצב טיפול', value: 'פעיל' }
]

const kaddishActions: KaddishActionRow[] = [
  { date: '28/04/2026', time: '07:00', location: 'בית הכנסת המרכזי ירושלים', volunteer: 'אברהם כהן', status: 'הושלם' },
  { date: '29/04/2026', time: '07:00', location: 'בית הכנסת המרכזי ירושלים', volunteer: 'אברהם כהן', status: 'מתוכנן' },
  { date: '30/04/2026', time: '07:00', location: 'בית הכנסת המרכזי ירושלים', volunteer: 'אברהם כהן', status: 'מתוכנן' },
  { date: '01/05/2026', time: '07:00', location: 'בית הכנסת המרכזי ירושלים', volunteer: 'אברהם כהן', status: 'מתוכנן' },
  { date: '02/05/2026', time: '07:00', location: 'בית הכנסת המרכזי ירושלים', volunteer: 'טרם נקבע', status: 'ממתין' }
]

const treatmentTimeline = [
  '06:20 — בקשת הקדיש נפתחה במערכת',
  '06:24 — נבדקו פרטי המבקש והנפטר',
  '06:31 — נמצא מתנדב מתאים באזור ירושלים',
  '06:38 — אברהם כהן אישר את השיבוץ'
]

function badgeTone(value: string): BadgeTone {
  if (value === 'הוקצה' || value === 'פעיל' || value === 'הושלם') return 'success'
  if (value === 'רגילה' || value === 'ממתין') return 'warning'
  return 'neutral'
}

const actionColumns: Column<KaddishActionRow>[] = [
  { key: 'date', label: 'תאריך' },
  { key: 'time', label: 'שעה' },
  { key: 'location', label: 'מיקום' },
  { key: 'volunteer', label: 'מתנדב' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={badgeTone(String(row.status))}>{row.status}</Badge> },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function RequestStats() {
  return <div className="calls-stats">{requestStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function DetailsPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span>{['סטטוס', 'דחיפות', 'סטטוס שיבוץ', 'מצב טיפול'].includes(row.label) ? <Badge tone={badgeTone(row.value)}>{row.value}</Badge> : <strong>{row.value}</strong>}</div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/kaddish-requests" className="details-back-link">חזרה לבקשות קדיש</Link><Button>שיבוץ מתנדב</Button><Button variant="outline">סימון כהושלם</Button></div>
}

function TreatmentTimeline() {
  return <section className="reports-table-section details-timeline"><h2>יומן טיפול</h2><div className="timeline-list">{treatmentTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function KaddishRequestDetailsPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>בקשת קדיש K-2025-0321</h1><p>ניהול פרטי הבקשה, פרטי הנפטר, שיבוץ מתנדב ומעקב אחר ביצוע</p></div><section className="calls-panel"><HeaderActions /><RequestStats /><div className="reports-grid"><DetailsPanel title="פרטי הנפטר" rows={deceasedDetails} /><DetailsPanel title="פרטי המבקש" rows={requesterDetails} /><DetailsPanel title="מצב שיבוץ" rows={assignmentDetails} /></div><section className="reports-table-section"><h2>פעולות קדיש מתוכננות</h2><DataTable columns={actionColumns} rows={kaddishActions} /></section><TreatmentTimeline /></section></div>
}
