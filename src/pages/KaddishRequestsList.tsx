import { Button } from '../components/primitives/Button'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'

type KaddishRequestRow = Record<string, React.ReactNode> & {
  requestId: string
  deceasedName: string
  city: string
  requestType: string
  date: string
  volunteer: string
  status: string
  urgency: string
  updated: string
}

const requestsStats = [
  { label: 'בקשות פתוחות', value: '56' },
  { label: 'ממתינות לשיבוץ', value: '14' },
  { label: 'שובצו היום', value: '22' },
  { label: 'דחופות', value: '6' }
]

const requestsData: KaddishRequestRow[] = [
  { requestId: 'K-2025-0321', deceasedName: 'יעקב בן משה', city: 'ירושלים', requestType: 'יומי', date: '28/04/2026', volunteer: 'הוקצה', status: 'פעילה', urgency: 'רגילה', updated: 'לפני 7 דק׳' },
  { requestId: 'K-2025-0320', deceasedName: 'מרים בת שרה', city: 'בני ברק', requestType: 'יארצייט', date: '28/04/2026', volunteer: 'טרם הוקצה', status: 'ממתינה', urgency: 'גבוהה', updated: 'לפני 15 דק׳' },
  { requestId: 'K-2025-0319', deceasedName: 'דוד בן רחל', city: 'פתח תקוה', requestType: 'חד פעמי', date: '29/04/2026', volunteer: 'הוקצה', status: 'פעילה', urgency: 'רגילה', updated: 'לפני 22 דק׳' },
  { requestId: 'K-2025-0318', deceasedName: 'אסתר בת לאה', city: 'אלעד', requestType: 'יומי', date: '30/04/2026', volunteer: 'טרם הוקצה', status: 'ממתינה', urgency: 'גבוהה', updated: 'לפני 35 דק׳' },
  { requestId: 'K-2025-0317', deceasedName: 'חיים בן יוסף', city: 'בית שמש', requestType: 'יארצייט', date: '01/05/2026', volunteer: 'הושלם', status: 'הושלמה', urgency: 'נמוכה', updated: 'לפני שעה' }
]

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
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function RequestsStats() {
  return <div className="calls-stats">{requestsStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function RequestsFilterBar() {
  return <div className="filter-bar"><Button>יצירת בקשת קדיש</Button><SelectField value="סוג בקשה" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput placeholder="חיפוש לפי שם נפטר או מבקש" /></div>
}

function RequestsActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות בקשות קדיש</h2><div><span>בקשות ששובצו היום: <b>22</b></span><span>זמן שיבוץ ממוצע: <b>4.8 שעות</b></span><span>בקשות ללא מתנדב: <b>14</b></span></div></section>
}

export function KaddishRequestsList() {
  return <div className="content calls-content"><div className="title calls-title"><h1>בקשות קדיש</h1><p>רשימת בקשות הקדיש והמעקב אחר שיבוץ מתנדבים</p></div><section className="calls-panel"><RequestsStats /><RequestsFilterBar /><DataTable columns={columns} rows={requestsData} /><Pagination total={56} /><RequestsActivitySummary /></section></div>
}
