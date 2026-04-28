import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'

type AssignedVolunteerRow = Record<string, React.ReactNode> & {
  volunteerName: string
  phone: string
  city: string
  confirmationStatus: string
  confirmationTime: string
}

const callStats = [
  { label: 'נדרשים', value: '10' },
  { label: 'אישרו', value: '8' },
  { label: 'חסרים', value: '2' },
  { label: 'דחיפות', value: 'גבוהה' }
]

const callDetails = [
  { label: 'מס׳ קריאה', value: 'M-2025-0548' },
  { label: 'עיר', value: 'בני ברק' },
  { label: 'שעה', value: '07:00' },
  { label: 'סטטוס', value: 'פתוחה' },
  { label: 'דחיפות', value: 'גבוהה' },
  { label: 'עדכון אחרון', value: 'לפני 5 דק׳' }
]

const locationDetails = [
  { label: 'בית עלמין', value: 'בית החיים בני ברק' },
  { label: 'אזור', value: 'חלקה ב׳' },
  { label: 'נקודת מפגש', value: 'שער ראשי' },
  { label: 'איש קשר', value: 'גבאי המקום' },
  { label: 'טלפון איש קשר', value: '050-1111111' }
]

const assignmentDetails = [
  { label: 'מתנדבים נדרשים', value: '10' },
  { label: 'מתנדבים שאישרו', value: '8' },
  { label: 'מתנדבים חסרים', value: '2' },
  { label: 'זמן יעד', value: '07:00' },
  { label: 'מצב טיפול', value: 'נדרש השלמה' }
]

const assignedVolunteers: AssignedVolunteerRow[] = [
  { volunteerName: 'אברהם כהן', phone: '050-1234567', city: 'ירושלים', confirmationStatus: 'אישר', confirmationTime: 'לפני 4 דק׳' },
  { volunteerName: 'משה לוי', phone: '052-2345678', city: 'בני ברק', confirmationStatus: 'אישר', confirmationTime: 'לפני 8 דק׳' },
  { volunteerName: 'דוד פרידמן', phone: '054-4567890', city: 'אלעד', confirmationStatus: 'אישר', confirmationTime: 'לפני 12 דק׳' },
  { volunteerName: 'חיים ביטון', phone: '055-5678901', city: 'בית שמש', confirmationStatus: 'ממתין', confirmationTime: 'לפני 15 דק׳' },
  { volunteerName: 'יוסף מזרחי', phone: '053-3456789', city: 'פתח תקוה', confirmationStatus: 'לא זמין', confirmationTime: 'לפני 20 דק׳' }
]

const treatmentTimeline = [
  '06:35 — הקריאה נפתחה במערכת',
  '06:38 — נשלחה הודעה ל־12 מתנדבים באזור',
  '06:45 — 6 מתנדבים אישרו הגעה',
  '06:55 — נדרשים עוד 2 מתנדבים להשלמה'
]

function badgeTone(value: string): BadgeTone {
  if (value === 'גבוהה' || value === 'לא זמין') return 'danger'
  if (value === 'נדרש השלמה' || value === 'ממתין') return 'warning'
  if (value === 'אישר') return 'success'
  return 'neutral'
}

const volunteerColumns: Column<AssignedVolunteerRow>[] = [
  { key: 'volunteerName', label: 'שם מתנדב' },
  { key: 'phone', label: 'טלפון' },
  { key: 'city', label: 'עיר' },
  { key: 'confirmationStatus', label: 'סטטוס אישור', render: row => <Badge tone={badgeTone(String(row.confirmationStatus))}>{row.confirmationStatus}</Badge> },
  { key: 'confirmationTime', label: 'זמן אישור' },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function CallStats() {
  return <div className="calls-stats">{callStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function DetailsPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span>{['סטטוס', 'דחיפות', 'מצב טיפול'].includes(row.label) ? <Badge tone={badgeTone(row.value)}>{row.value}</Badge> : <strong>{row.value}</strong>}</div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/calls" className="details-back-link">חזרה לקריאות</Link><Button>שיבוץ מתנדב</Button><Button variant="outline">סימון כהושלם</Button></div>
}

function TreatmentTimeline() {
  return <section className="reports-table-section details-timeline"><h2>יומן טיפול</h2><div className="timeline-list">{treatmentTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function CallDetailsPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>קריאת מניין M-2025-0548</h1><p>ניהול פרטי הקריאה, שיבוץ מתנדבים ומעקב אחר ביצוע</p></div><section className="calls-panel"><HeaderActions /><CallStats /><div className="reports-grid"><DetailsPanel title="פרטי הקריאה" rows={callDetails} /><DetailsPanel title="פרטי מיקום" rows={locationDetails} /><DetailsPanel title="מצב שיבוץ" rows={assignmentDetails} /></div><section className="reports-table-section"><h2>מתנדבים משובצים</h2><DataTable columns={volunteerColumns} rows={assignedVolunteers} /></section><TreatmentTimeline /></section></div>
}
