import { Link } from 'react-router-dom'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'
import { PageShell } from '../components/layout/PageShell'
import { callsData, callsStats } from '../data/calls'
import type { CallRecord } from '../types/entities'

type CallsRow = Record<string, React.ReactNode> & CallRecord

const callsColumns: Column<CallsRow>[] = [
  { key: 'callId', label: 'מס׳ קריאה' },
  { key: 'city', label: 'עיר' },
  { key: 'time', label: 'שעה' },
  { key: 'required', label: 'נדרשים' },
  { key: 'missing', label: 'חסרים' },
  { key: 'confirmed', label: 'אישרו' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={row.status === 'הושלמה' ? 'success' : row.status === 'בטיפול' ? 'warning' : 'neutral'}>{row.status}</Badge> },
  { key: 'urgency', label: 'דחיפות', render: row => <Badge tone={row.urgency === 'גבוהה' ? 'danger' : row.urgency === 'רגילה' ? 'warning' : 'success'}>{row.urgency}</Badge> },
  { key: 'updated', label: 'עדכון אחרון' },
  { key: 'actions', label: 'פעולות', render: row => <Link className="table-action" to={`/calls/${row.callId}`}>צפייה</Link> }
]

function FilterBar() {
  return <div className="filter-bar"><Link className="btn btn-primary" to="/calls/new">יצירת קריאת מניין</Link><SelectField value="שעה" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput /></div>
}

function CallsStats() {
  return <div className="calls-stats">{callsStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function CallsActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות קריאות מניין</h2><div><span>שיבוצים שבוצעו היום: <b>34</b></span><span>זמן תגובה ממוצע: <b>6.4 שעות</b></span><span>קריאות ללא מתנדב: <b>7</b></span></div></section>
}

export function CallsList() {
  return <PageShell><div className="content calls-content"><div className="title calls-title"><h1>קריאות מניין</h1><p>רשימת הקריאות הפעילות והמתקדמות במערכת</p></div><section className="calls-panel"><CallsStats /><FilterBar /><DataTable columns={callsColumns} rows={callsData as CallsRow[]} /><Pagination /><CallsActivitySummary /></section></div></PageShell>
}
