import { Button } from '../components/primitives/Button'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'

type MemberRow = Record<string, React.ReactNode> & {
  memberId: string
  fullName: string
  city: string
  phone: string
  email: string
  membershipType: string
  status: string
  updated: string
}

const memberStats = [
  { label: 'חברים רשומים', value: '1,284' },
  { label: 'פעילים החודש', value: '426' },
  { label: 'הצטרפו השבוע', value: '38' },
  { label: 'דורשים אימות', value: '12' }
]

const membersData: MemberRow[] = [
  { memberId: 'C-2025-1284', fullName: 'שלמה אברמוב', city: 'ירושלים', phone: '050-1112233', email: 'shlomo@example.com', membershipType: 'קבוע', status: 'פעיל', updated: 'לפני 6 דק׳' },
  { memberId: 'C-2025-1283', fullName: 'יצחק רוזן', city: 'בני ברק', phone: '052-2223344', email: 'yitzhak@example.com', membershipType: 'רגיל', status: 'פעיל', updated: 'לפני 20 דק׳' },
  { memberId: 'C-2025-1282', fullName: 'אליהו כהן', city: 'פתח תקוה', phone: '053-3334455', email: 'eliyahu@example.com', membershipType: 'רגיל', status: 'דורש אימות', updated: 'לפני 45 דק׳' },
  { memberId: 'C-2025-1281', fullName: 'מאיר לוי', city: 'אלעד', phone: '054-4445566', email: 'meir@example.com', membershipType: 'תומך', status: 'פעיל', updated: 'לפני שעה' },
  { memberId: 'C-2025-1280', fullName: 'ישראל פרידמן', city: 'בית שמש', phone: '055-5556677', email: 'israel@example.com', membershipType: 'רגיל', status: 'לא פעיל', updated: 'לפני שעתיים' }
]

function statusTone(status: string): BadgeTone {
  if (status === 'פעיל') return 'success'
  if (status === 'דורש אימות') return 'warning'
  return 'neutral'
}

function membershipTone(type: string): BadgeTone {
  if (type === 'קבוע') return 'success'
  if (type === 'תומך') return 'warning'
  return 'neutral'
}

const columns: Column<MemberRow>[] = [
  { key: 'memberId', label: 'מס׳ חבר' },
  { key: 'fullName', label: 'שם מלא' },
  { key: 'city', label: 'עיר' },
  { key: 'phone', label: 'טלפון' },
  { key: 'email', label: 'אימייל' },
  { key: 'membershipType', label: 'סוג חברות', render: row => <Badge tone={membershipTone(String(row.membershipType))}>{row.membershipType}</Badge> },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={statusTone(String(row.status))}>{row.status}</Badge> },
  { key: 'updated', label: 'עדכון אחרון' },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function MembersStats() {
  return <div className="calls-stats">{memberStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function MembersFilterBar() {
  return <div className="filter-bar"><Button>הוספת חבר</Button><SelectField value="סוג חברות" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput placeholder="חיפוש לפי שם, טלפון או אימייל" /></div>
}

function MembersActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות חברים</h2><div><span>חברים פעילים החודש: <b>426</b></span><span>חברים שהצטרפו השבוע: <b>38</b></span><span>חברים שדורשים אימות: <b>12</b></span></div></section>
}

export function MembersList() {
  return <div className="content calls-content"><div className="title calls-title"><h1>חברים</h1><p>רשימת החברים הרשומים והמעקב אחר פעילות קהילתית</p></div><section className="calls-panel"><MembersStats /><MembersFilterBar /><DataTable columns={columns} rows={membersData} /><Pagination total={1284} /><MembersActivitySummary /></section></div>
}
