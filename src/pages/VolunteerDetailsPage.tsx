import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'

type VolunteerAssignmentRow = Record<string, React.ReactNode> & {
  date: string
  activityType: string
  location: string
  time: string
  status: string
}

const volunteerStats = [
  { label: 'סטטוס', value: 'פעיל' },
  { label: 'זמינות', value: 'היום' },
  { label: 'שיבוצים השבוע', value: '4' },
  { label: 'שיבוצים החודש', value: '18' }
]

const volunteerDetails = [
  { label: 'שם מלא', value: 'אברהם כהן' },
  { label: 'מס׳ מתנדב', value: 'V-2025-0142' },
  { label: 'עיר', value: 'ירושלים' },
  { label: 'טלפון', value: '050-1234567' },
  { label: 'סטטוס', value: 'פעיל' },
  { label: 'עדכון אחרון', value: 'לפני 4 דק׳' }
]

const availabilityDetails = [
  { label: 'זמינות נוכחית', value: 'היום' },
  { label: 'אזורי פעילות', value: 'ירושלים, בני ברק, אלעד' },
  { label: 'שעות פעילות', value: '06:00–10:00' },
  { label: 'ימי פעילות', value: 'א׳–ה׳' },
  { label: 'מצב טיפול', value: 'זמין לשיבוץ' }
]

const activityMetrics = [
  { label: 'שיבוצים השבוע', value: '4' },
  { label: 'שיבוצים החודש', value: '18' },
  { label: 'קריאות מניין', value: '11' },
  { label: 'בקשות קדיש', value: '7' },
  { label: 'דירוג אמינות', value: 'גבוה' }
]

const recentAssignments: VolunteerAssignmentRow[] = [
  { date: '28/04/2026', activityType: 'קריאת מניין', location: 'בני ברק', time: '07:00', status: 'אישר' },
  { date: '28/04/2026', activityType: 'קדיש יומי', location: 'ירושלים', time: '07:00', status: 'הושלם' },
  { date: '27/04/2026', activityType: 'קריאת מניין', location: 'אלעד', time: '06:45', status: 'הושלם' },
  { date: '26/04/2026', activityType: 'קדיש יארצייט', location: 'ירושלים', time: '07:30', status: 'הושלם' },
  { date: '25/04/2026', activityType: 'קריאת מניין', location: 'פתח תקוה', time: '07:15', status: 'בוטל' }
]

const treatmentTimeline = [
  '06:10 — המתנדב סימן זמינות להיום',
  '06:22 — שובץ לקריאת מניין בבני ברק',
  '06:38 — אישר הגעה לקריאה',
  '07:05 — עודכן כפעיל וזמין לשיבוצים נוספים'
]

function badgeTone(value: string): BadgeTone {
  if (['פעיל', 'היום', 'זמין לשיבוץ', 'גבוה', 'אישר', 'הושלם'].includes(value)) return 'success'
  return 'neutral'
}

const assignmentColumns: Column<VolunteerAssignmentRow>[] = [
  { key: 'date', label: 'תאריך' },
  { key: 'activityType', label: 'סוג פעילות' },
  { key: 'location', label: 'מיקום' },
  { key: 'time', label: 'שעה' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={badgeTone(String(row.status))}>{row.status}</Badge> },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function VolunteerStats() {
  return <div className="calls-stats">{volunteerStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function DetailsPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span>{['סטטוס', 'זמינות נוכחית', 'מצב טיפול', 'דירוג אמינות'].includes(row.label) ? <Badge tone={badgeTone(row.value)}>{row.value}</Badge> : <strong>{row.value}</strong>}</div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/volunteers" className="details-back-link">חזרה למתנדבים</Link><Button>עדכון זמינות</Button><Button variant="outline">שיבוץ לקריאה</Button></div>
}

function TreatmentTimeline() {
  return <section className="reports-table-section details-timeline"><h2>יומן טיפול</h2><div className="timeline-list">{treatmentTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function VolunteerDetailsPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>מתנדב V-2025-0142</h1><p>ניהול פרטי המתנדב, זמינות, שיבוצים ומעקב אחר פעילות</p></div><section className="calls-panel"><HeaderActions /><VolunteerStats /><div className="reports-grid"><DetailsPanel title="פרטי מתנדב" rows={volunteerDetails} /><DetailsPanel title="זמינות" rows={availabilityDetails} /><DetailsPanel title="מדדי פעילות" rows={activityMetrics} /></div><section className="reports-table-section"><h2>שיבוצים אחרונים</h2><DataTable columns={assignmentColumns} rows={recentAssignments} /></section><TreatmentTimeline /></section></div>
}
