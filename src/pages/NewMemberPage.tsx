import { Link } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge } from '../components/primitives/Badge'

const intakeStats = [
  { label: 'סוג פעולה', value: 'חבר' },
  { label: 'סטטוס', value: 'טיוטה' },
  { label: 'שלב', value: 'פתיחה' },
  { label: 'בדיקה', value: 'נדרש אישור' }
]

const memberDetails = [
  { label: 'שם חבר', value: 'דוד לוי' },
  { label: 'טלפון', value: '053-3334455' },
  { label: 'אימייל', value: 'david@example.com' },
  { label: 'עיר מגורים', value: 'בני ברק' },
  { label: 'סטטוס פתיחה', value: 'טיוטה' }
]

const communityDetails = [
  { label: 'סוג חבר', value: 'פעיל קהילה' },
  { label: 'קהילה', value: 'מרכז העיר' },
  { label: 'תחום עניין', value: 'קדישים וקריאות מניין' },
  { label: 'איש קשר פנימי', value: 'מוקד שירות' },
  { label: 'הערה', value: 'מתאים לעדכונים שוטפים' }
]

const validationItems = [
  { label: 'פרטי קשר מלאים', status: 'תקין' },
  { label: 'שיוך קהילתי הוגדר', status: 'תקין' },
  { label: 'סוג חבר הוגדר', status: 'תקין' },
  { label: 'נדרש אישור מוקד', status: 'ממתין' }
]

const timeline = [
  'טיוטה — הזנת פרטי חבר',
  'בדיקת מוקד — אימות פרטי קשר ושיוך',
  'אישור כרטיס — סימון החבר כפעיל',
  'מעקב קהילתי — חיבור לפעילות ועדכונים'
]

function NewMemberStats() {
  return <div className="calls-stats">{intakeStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function InfoPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div></section>
}

function ValidationPanel() {
  return <section className="report-panel"><h2>בדיקות פתיחה</h2><div className="report-metric-list">{validationItems.map(item => <div className="report-metric-row" key={item.label}><span>{item.label}</span><Badge tone={item.status === 'תקין' ? 'success' : 'warning'}>{item.status}</Badge></div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/members" className="details-back-link">חזרה לחברים</Link><Button>שמירת טיוטה</Button><Button variant="outline">הוספת חבר</Button></div>
}

function ProcessTimeline() {
  return <section className="reports-table-section details-timeline"><h2>תהליך פתיחת חבר</h2><div className="timeline-list">{timeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function NewMemberPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>הוספת חבר</h1><p>פתיחת כרטיס חבר חדש, בדיקת פרטי קשר, שיוך קהילתי והכנה למעקב</p></div><section className="calls-panel"><HeaderActions /><NewMemberStats /><div className="reports-grid"><InfoPanel title="פרטי החבר" rows={memberDetails} /><InfoPanel title="שיוך ומעקב" rows={communityDetails} /><ValidationPanel /></div><ProcessTimeline /></section></div>
}
