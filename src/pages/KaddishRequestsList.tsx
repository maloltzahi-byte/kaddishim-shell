import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'
import { kaddishRequestStats, kaddishRequestsData } from '../data/kaddishRequests'
import { supabaseReadAdapter } from '../lib/supabaseReadAdapter'
import type { KaddishRequestRecord } from '../types/entities'

type KaddishRequestRow = Record<string, React.ReactNode> & KaddishRequestRecord

function statusTone(status: string): BadgeTone {
  if (status === 'הושלמה') return 'success'
  if (status === 'ממתינה') return 'warning'
  return 'neutral'
}

function urgencyTone(urgency: string): BadgeTone {
  if (urgency === 'גבוהה') return 'danger'
  if (urgency === 'רגילה') return 'warning'
  return 'success'
}

const columns: Column<KaddishRequestRow>[] = [
  { key: 'requestId', label: 'מס׳ בקשה' },
  { key: 'deceasedName', label: 'שם נפטר' },
  { key: 'city', label: 'עיר' },
  { key: 'requestType', label: 'סוג קדיש' },
  { key: 'date', label: 'תאריך' },
  { key: 'volunteer', label: 'מתנדב' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={statusTone(String(row.status))}>{row.status}</Badge> },
  { key: 'urgency', label: 'דחיפות', render: row => <Badge tone={urgencyTone(String(row.urgency))}>{row.urgency}</Badge> },
  { key: 'updated', label: 'עדכון אחרון' },
  { key: 'actions', label: 'פעולות', render: row => <Link className="table-action" to={`/kaddish-requests/${row.requestId}`}>צפייה</Link> }
]

function RequestsStats() {
  return <div className="calls-stats">{kaddishRequestStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function RequestsFilterBar() {
  return <div className="filter-bar"><Link className="btn btn-primary" to="/kaddish-requests/new">יצירת בקשת קדיש</Link><SelectField value="סוג בקשה" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput placeholder="חיפוש לפי שם נפטר או מבקש" /></div>
}

function RequestsActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות בקשות קדיש</h2><div><span>בקשות ששובצו היום: <b>22</b></span><span>זמן שיבוץ ממוצע: <b>4.8 שעות</b></span><span>בקשות ללא מתנדב: <b>14</b></span></div></section>
}

export function KaddishRequestsList() {
  const [requests, setRequests] = useState<KaddishRequestRecord[]>(kaddishRequestsData)

  useEffect(() => {
    let isMounted = true

    async function loadRequests() {
      try {
        const rows = await supabaseReadAdapter.kaddishRequests.list()
        if (isMounted && rows.length > 0) setRequests(rows)
      } catch {
        if (isMounted) setRequests(kaddishRequestsData)
      }
    }

    void loadRequests()

    return () => {
      isMounted = false
    }
  }, [])

  return <div className="content calls-content"><div className="title calls-title"><h1>בקשות קדיש</h1><p>רשימת בקשות הקדיש והמעקב אחר שיבוץ מתנדבים</p></div><section className="calls-panel"><RequestsStats /><RequestsFilterBar /><DataTable columns={columns} rows={requests as KaddishRequestRow[]} /><Pagination total={56} /><RequestsActivitySummary /></section></div>
}
