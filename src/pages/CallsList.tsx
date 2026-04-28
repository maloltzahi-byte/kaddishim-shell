import { Button } from '../components/primitives/Button'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'
import { PageShell } from '../components/layout/PageShell'

type CallsRow = Record<string, React.ReactNode> & {
  callId: string
  city: string
  time: string
  required: string
  missing: string
  confirmed: string
  status: string
  urgency: string
  updated: string
}

const callsData: CallsRow[] = [
  { callId: 'M-2025-0548', city: 'בני ברק', time: '07:00', required: '10', missing: '2', confirmed: '8', status: 'פתוחה', urgency: 'גבוהה', updated: 'לפני 5 דק׳' },
  { callId: 'M-2025-0547', city: 'אלעד', time: '06:45', required: '10', missing: '4', confirmed: '6', status: 'בטיפול', urgency: 'גבוהה', updated: 'לפני 12 דק׳' },
  { callId: 'M-2025-0546', city: 'פתח תקוה', time: '07:15', required: '10', missing: '1', confirmed: '9', status: 'בטיפול', urgency: 'רגילה', updated: 'לפני 18 דק׳' },
  { callId: 'M-2025-0545', city: 'בית שמש', time: '08:00', required: '10', missing: '0', confirmed: '10', status: 'הושלמה', urgency: 'רגילה', updated: 'לפני 25 דק׳' },
  { callId: 'M-2025-0544', city: 'ירושלים', time: '09:00', required: '10', missing: '0', confirmed: '10', status: 'הושלמה', urgency: 'נמוכה', updated: 'לפני 40 דק׳' }
]

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
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

const callsStats = [
  { label: 'קריאות פתוחות', value: '28' },
  { label: 'בטיפול', value: '17' },
  { label: 'הושלמו היום', value: '18' },
  { label: 'דחופות', value: '7' }
]

function FilterBar() {
  return <div className="filter-bar"><Button>יצירת קריאת מניין</Button><SelectField value="שעה" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput /></div>
}

function CallsStats() {
  return <div className="calls-stats">{callsStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function CallsActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות קריאות מניין</h2><div><span>שיבוצים שבוצעו היום: <b>34</b></span><span>זמן תגובה ממוצע: <b>6.4 שעות</b></span><span>קריאות ללא מתנדב: <b>7</b></span></div></section>
}

export function CallsList() {
  return <PageShell><div className="content calls-content"><div className="title calls-title"><h1>קריאות מניין</h1><p>רשימת הקריאות הפעילות והמתקדמות במערכת</p></div><section className="calls-panel"><CallsStats /><FilterBar /><DataTable columns={callsColumns} rows={callsData} /><Pagination /><CallsActivitySummary /></section></div></PageShell>
}
