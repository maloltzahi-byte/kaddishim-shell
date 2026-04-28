import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge } from '../components/primitives/Badge'
import { newVolunteerAvailabilityDetails, newVolunteerDetails, newVolunteerStats, newVolunteerTimeline, newVolunteerValidationItems } from '../data/volunteers'

function NewVolunteerStats() {
  return <div className="calls-stats">{newVolunteerStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function InfoPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}

function ValidationPanel() {
  return <section className="report-panel"><h2>בדיקות פתיחה</h2><div className="report-metric-list">{newVolunteerValidationItems.map(item => <div className="report-metric-row" key={item.label}><span>{item.label}</span><Badge tone={item.status === 'תקין' ? 'success' : 'warning'}>{item.status}</Badge></div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/volunteers" className="details-back-link">חזרה למתנדבים</Link><Button>שמירת טיוטה</Button><Button variant="outline">הוספת מתנדב</Button></div>
}

function ProcessTimeline() {
  return <section className="reports-table-section details-timeline"><h2>תהליך פתיחת מתנדב</h2><div className="timeline-list">{newVolunteerTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function NewVolunteerPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>הוספת מתנדב</h1><p>פתיחת כרטיס מתנדב חדש, בדיקת זמינות, אזורי פעילות והכנה לשיבוץ</p></div><section className="calls-panel"><HeaderActions /><NewVolunteerStats /><div className="reports-grid"><InfoPanel title="פרטי המתנדב" rows={newVolunteerDetails} /><InfoPanel title="זמינות ואזור פעילות" rows={newVolunteerAvailabilityDetails} /><ValidationPanel /></div><ProcessTimeline /></section></div>
}
