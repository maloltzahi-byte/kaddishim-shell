import { Link } from 'react-router-dom'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'
import { volunteersData, volunteersStats } from '../data/volunteers'

type VolunteerRow = Record<string, React.ReactNode> & {
  volunteerId: string
  fullName: string
  city: string
  phone: string
  availability: string
  weeklyAssignments: string
  status: string
  updated: string
}

function statusTone(status: string): BadgeTone {
  if (status === 'פעיל') return 'success'
  if (status === 'דורש טיפול') return 'danger'
  if (status === 'ממתין לאישור') return 'warning'
  return 'neutral'
}

function availabilityTone(availability: string): BadgeTone {
  if (availability === 'היום') return 'success'
  if (availability === 'השבוע') return 'neutral'
  if (availability === 'מחר') return 'warning'
  if (availability === 'לא זמין') return 'danger'
  return 'neutral'
}

const columns: Column<VolunteerRow>[] = [
  { key: 'volunteerId', label: 'מס׳ מתנדב' },
  { key: 'fullName', label: 'שם מלא' },
  { key: 'city', label: 'עיר' },
  { key: 'phone', label: 'טלפון' },
  { key: 'availability', label: 'זמינות', render: row => <Badge tone={availabilityTone(String(row.availability))}>{row.availability}</Badge> },
  { key: 'weeklyAssignments', label: 'שיבוצים השבוע' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={statusTone(String(row.status))}>{row.status}</Badge> },
  { key: 'updated', label: 'עדכון אחרון' },
  { key: 'actions', label: 'פעולות', render: row => <Link className="table-action" to={`/volunteers/${row.volunteerId}`}>צפייה</Link> }
]

function VolunteersStats() {
  return <div className="calls-stats">{volunteersStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function VolunteersFilterBar() {
  return <div className="filter-bar"><Link className="btn btn-primary" to="/volunteers/new">הוספת מתנדב</Link><SelectField value="זמינות" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput placeholder="חיפוש לפי שם או טלפון" /></div>
}

function VolunteersActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות מתנדבים</h2><div><span>שיבוצי מתנדבים השבוע: <b>34</b></span><span>מתנדבים זמינים היום: <b>87</b></span><span>מתנדבים ללא פעילות: <b>9</b></span></div></section>
}

export function VolunteersList() {
  return <div className="content calls-content"><div className="title calls-title"><h1>מתנדבים</h1><p>רשימת המתנדבים הפעילים והמעקב אחר זמינות ושיבוצים</p></div><section className="calls-panel"><VolunteersStats /><VolunteersFilterBar /><DataTable columns={columns} rows={volunteersData as VolunteerRow[]} /><Pagination total={142} /><VolunteersActivitySummary /></section></div>
}
