import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge } from '../components/primitives/Badge'
import { newKaddishApplicantDetails, newKaddishDeceasedDetails, newKaddishRequestStats, newKaddishTimeline, newKaddishValidationItems } from '../data/kaddishRequests'

function NewKaddishRequestStats() {
  return <div className="calls-stats">{newKaddishRequestStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function InfoPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}

function ValidationPanel() {
  return <section className="report-panel"><h2>בדיקות פתיחה</h2><div className="report-metric-list">{newKaddishValidationItems.map(item => <div className="report-metric-row" key={item.label}><span>{item.label}</span><Badge tone={item.status === 'תקין' ? 'success' : 'warning'}>{item.status}</Badge></div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/kaddish-requests" className="details-back-link">חזרה לבקשות קדיש</Link><Button>שמירת טיוטה</Button><Button variant="outline">פתיחת בקשה</Button></div>
}

function ProcessTimeline() {
  return <section className="reports-table-section details-timeline"><h2>תהליך פתיחת בקשת קדיש</h2><div className="timeline-list">{newKaddishTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function NewKaddishRequestPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>יצירת בקשת קדיש</h1><p>פתיחת בקשה חדשה, בדיקת פרטי נפטר ומבקש, והכנה לשיבוץ מתנדב</p></div><section className="calls-panel"><HeaderActions /><NewKaddishRequestStats /><div className="reports-grid"><InfoPanel title="פרטי הנפטר" rows={newKaddishDeceasedDetails} /><InfoPanel title="פרטי המבקש" rows={newKaddishApplicantDetails} /><ValidationPanel /></div><ProcessTimeline /></section></div>
}
