import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'

type ReportRow = Record<string, React.ReactNode> & {
  date: string
  calls: string
  requests: string
  volunteers: string
  members: string
  status: string
}

const reportStats = [
  { label: 'פעילות כוללת', value: '1,842' },
  { label: 'קריאות שהושלמו', value: '328' },
  { label: 'בקשות ששובצו', value: '412' },
  { label: 'זמן תגובה ממוצע', value: '5.6 ש׳' }
]

const activityByType = [
  { label: 'קריאות מניין', value: '328' },
  { label: 'בקשות קדיש', value: '412' },
  { label: 'מתנדבים פעילים', value: '142' },
  { label: 'חברים פעילים', value: '426' }
]

const treatmentStatus = [
  { label: 'פתוחות', value: '84' },
  { label: 'בטיפול', value: '63' },
  { label: 'הושלמו', value: '740' },
  { label: 'דורשות בדיקה', value: '21' }
]

const managementAlerts = [
  '7 קריאות ללא מתנדב',
  '14 בקשות קדיש ממתינות לשיבוץ',
  '9 מתנדבים דורשים טיפול',
  '12 חברים דורשים אימות'
]

const dailyReportData: ReportRow[] = [
  { date: '28/04/2026', calls: '34', requests: '22', volunteers: '87', members: '38', status: 'תקין' },
  { date: '27/04/2026', calls: '29', requests: '18', volunteers: '74', members: '31', status: 'תקין' },
  { date: '26/04/2026', calls: '41', requests: '25', volunteers: '93', members: '27', status: 'עומס גבוה' },
  { date: '25/04/2026', calls: '22', requests: '17', volunteers: '68', members: '19', status: 'תקין' },
  { date: '24/04/2026', calls: '18', requests: '14', volunteers: '52', members: '16', status: 'נמוך' }
]

function statusTone(status: string): BadgeTone {
  if (status === 'תקין') return 'success'
  if (status === 'עומס גבוה') return 'warning'
  return 'neutral'
}

const columns: Column<ReportRow>[] = [
  { key: 'date', label: 'תאריך' },
  { key: 'calls', label: 'קריאות מניין' },
  { key: 'requests', label: 'בקשות קדיש' },
  { key: 'volunteers', label: 'מתנדבים ששובצו' },
  { key: 'members', label: 'חברים חדשים' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={statusTone(String(row.status))}>{row.status}</Badge> },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function ReportsStats() {
  return <div className="calls-stats">{reportStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function ReportPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="report-panel"><h2>{title}</h2>{children}</section>
}

function MetricList({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return <div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div>
}

function AlertsList() {
  return <ul className="report-alerts">{managementAlerts.map(alert => <li key={alert}>{alert}</li>)}</ul>
}

export function ReportsPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>דוחות</h1><p>סקירת פעילות, ביצועים ומדדי שירות במערכת</p></div><section className="calls-panel"><ReportsStats /><div className="reports-grid"><ReportPanel title="פעילות לפי סוג"><MetricList rows={activityByType} /></ReportPanel><ReportPanel title="סטטוס טיפול"><MetricList rows={treatmentStatus} /></ReportPanel><ReportPanel title="התראות ניהוליות"><AlertsList /></ReportPanel></div><section className="reports-table-section"><h2>דוח פעילות יומי</h2><DataTable columns={columns} rows={dailyReportData} /><Pagination total={5} /></section></section></div>
}
