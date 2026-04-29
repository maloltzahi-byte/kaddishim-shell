import { useEffect, useState } from 'react'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'
import { supabaseReadAdapter } from '../lib/supabaseReadAdapter'

type ReportRow = Record<string, React.ReactNode> & {
  date: string
  calls: string
  requests: string
  volunteers: string
  members: string
  status: string
}

type ReportSummary = {
  reportStats: Array<{ label: string; value: string }>
  activityByType: Array<{ label: string; value: string }>
  treatmentStatus: Array<{ label: string; value: string }>
  managementAlerts: string[]
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

const fallbackSummary: ReportSummary = {
  reportStats,
  activityByType,
  treatmentStatus,
  managementAlerts
}

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

function buildReportSummary(
  callsCount: number,
  completedCalls: number,
  requestsCount: number,
  assignedRequests: number,
  volunteersCount: number,
  activeVolunteers: number,
  membersCount: number,
  activeMembers: number
): ReportSummary {
  const openItems = callsCount - completedCalls + requestsCount - assignedRequests
  const totalActivity = callsCount + requestsCount + volunteersCount + membersCount

  return {
    reportStats: [
      { label: 'פעילות כוללת', value: String(totalActivity) },
      { label: 'קריאות שהושלמו', value: String(completedCalls) },
      { label: 'בקשות ששובצו', value: String(assignedRequests) },
      { label: 'זמן תגובה ממוצע', value: '5.6 ש׳' }
    ],
    activityByType: [
      { label: 'קריאות מניין', value: String(callsCount) },
      { label: 'בקשות קדיש', value: String(requestsCount) },
      { label: 'מתנדבים פעילים', value: String(activeVolunteers) },
      { label: 'חברים פעילים', value: String(activeMembers) }
    ],
    treatmentStatus: [
      { label: 'פתוחות', value: String(openItems) },
      { label: 'בטיפול', value: String(callsCount - completedCalls) },
      { label: 'הושלמו', value: String(completedCalls + assignedRequests) },
      { label: 'דורשות בדיקה', value: String(volunteersCount - activeVolunteers + membersCount - activeMembers) }
    ],
    managementAlerts: [
      `${Math.max(callsCount - completedCalls, 0)} קריאות ללא מתנדב`,
      `${Math.max(requestsCount - assignedRequests, 0)} בקשות קדיש ממתינות לשיבוץ`,
      `${Math.max(volunteersCount - activeVolunteers, 0)} מתנדבים דורשים טיפול`,
      `${Math.max(membersCount - activeMembers, 0)} חברים דורשים אימות`
    ]
  }
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

function ReportsStats({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return <div className="calls-stats">{rows.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function ReportPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="report-panel"><h2>{title}</h2>{children}</section>
}

function MetricList({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return <div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div>
}

function AlertsList({ rows }: { rows: string[] }) {
  return <ul className="report-alerts">{rows.map(alert => <li key={alert}>{alert}</li>)}</ul>
}

export function ReportsPage() {
  const [summary, setSummary] = useState<ReportSummary>(fallbackSummary)

  useEffect(() => {
    let isMounted = true

    async function loadReportsSummary() {
      try {
        const [calls, requests, volunteers, members] = await Promise.all([
          supabaseReadAdapter.calls.list(),
          supabaseReadAdapter.kaddishRequests.list(),
          supabaseReadAdapter.volunteers.list(),
          supabaseReadAdapter.members.list()
        ])

        const nextSummary = buildReportSummary(
          calls.length,
          calls.filter(item => item.status === 'הושלמה').length,
          requests.length,
          requests.filter(item => item.status === 'הושלמה' || item.volunteer !== 'טרם הוקצה').length,
          volunteers.length,
          volunteers.filter(item => item.status === 'פעיל').length,
          members.length,
          members.filter(item => item.status === 'פעיל').length
        )

        if (isMounted) setSummary(nextSummary)
      } catch {
        if (isMounted) setSummary(fallbackSummary)
      }
    }

    void loadReportsSummary()

    return () => {
      isMounted = false
    }
  }, [])

  return <div className="content calls-content"><div className="title calls-title"><h1>דוחות</h1><p>סקירת פעילות, ביצועים ומדדי שירות במערכת</p></div><section className="calls-panel"><ReportsStats rows={summary.reportStats} /><div className="reports-grid"><ReportPanel title="פעילות לפי סוג"><MetricList rows={summary.activityByType} /></ReportPanel><ReportPanel title="סטטוס טיפול"><MetricList rows={summary.treatmentStatus} /></ReportPanel><ReportPanel title="התראות ניהוליות"><AlertsList rows={summary.managementAlerts} /></ReportPanel></div><section className="reports-table-section"><h2>דוח פעילות יומי</h2><DataTable columns={columns} rows={dailyReportData} /><Pagination total={5} /></section></section></div>
}
