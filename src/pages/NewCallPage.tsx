import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge } from '../components/primitives/Badge'
import { newCallContactDetails, newCallDetails, newCallStats, newCallTimeline, newCallValidationItems } from '../data/calls'

function NewCallStats() {
  return <div className="calls-stats">{newCallStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function InfoPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}

function ValidationPanel() {
  return <section className="report-panel"><h2>בדיקות פתיחה</h2><div className="report-metric-list">{newCallValidationItems.map(item => <div className="report-metric-row" key={item.label}><span>{item.label}</span><Badge tone={item.status === 'תקין' ? 'success' : 'warning'}>{item.status}</Badge></div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/calls" className="details-back-link">חזרה לקריאות</Link><Button>שמירת טיוטה</Button><Button variant="outline">פתיחת קריאה</Button></div>
}

function ProcessTimeline() {
  return <section className="reports-table-section details-timeline"><h2>תהליך פתיחת קריאה</h2><div className="timeline-list">{newCallTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function NewCallPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>יצירת קריאת מניין</h1><p>פתיחת קריאה חדשה, בדיקת פרטי מקום והכנה לשיבוץ מתנדבים</p></div><section className="calls-panel"><HeaderActions /><NewCallStats /><div className="reports-grid"><InfoPanel title="פרטי הקריאה" rows={newCallDetails} /><InfoPanel title="פרטי קשר ושיבוץ" rows={newCallContactDetails} /><ValidationPanel /></div><ProcessTimeline /></section></div>
}
