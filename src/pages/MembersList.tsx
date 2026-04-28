import { Link } from 'react-router-dom'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'
import { membersData, membersStats } from '../data/members'
import type { MemberRecord } from '../types/entities'

type MemberRow = Record<string, React.ReactNode> & MemberRecord

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
  { key: 'actions', label: 'פעולות', render: row => <Link className="table-action" to={`/members/${row.memberId}`}>צפייה</Link> }
]

function MembersStats() {
  return <div className="calls-stats">{membersStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function MembersFilterBar() {
  return <div className="filter-bar"><Link className="btn btn-primary" to="/members/new">הוספת חבר</Link><SelectField value="סוג חברות" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput placeholder="חיפוש לפי שם, טלפון או אימייל" /></div>
}

function MembersActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות חברים</h2><div><span>חברים פעילים החודש: <b>426</b></span><span>חברים שהצטרפו השבוע: <b>38</b></span><span>חברים שדורשים אימות: <b>12</b></span></div></section>
}

export function MembersList() {
  return <div className="content calls-content"><div className="title calls-title"><h1>חברים</h1><p>רשימת החברים הרשומים והמעקב אחר פעילות קהילתית</p></div><section className="calls-panel"><MembersStats /><MembersFilterBar /><DataTable columns={columns} rows={membersData as MemberRow[]} /><Pagination total={1284} /><MembersActivitySummary /></section></div>
}
