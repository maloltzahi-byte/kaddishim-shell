import { Link } from 'react-router-dom'
import { SearchInput } from '../components/primitives/SearchInput'
import { SelectField } from '../components/primitives/SelectField'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { Pagination } from '../components/table/Pagination'

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

const volunteerStats = [
  { label: 'מתנדבים פעילים', value: '142' },
  { label: 'זמינים היום', value: '87' },
  { label: 'שובצו השבוע', value: '34' },
  { label: 'דורשים טיפול', value: '9' }
]

const volunteersData: VolunteerRow[] = [
  { volunteerId: 'V-2025-0142', fullName: 'אברהם כהן', city: 'ירושלים', phone: '050-1234567', availability: 'היום', weeklyAssignments: '4', status: 'פעיל', updated: 'לפני 4 דק׳' },
  { volunteerId: 'V-2025-0141', fullName: 'משה לוי', city: 'בני ברק', phone: '052-2345678', availability: 'השבוע', weeklyAssignments: '2', status: 'פעיל', updated: 'לפני 18 דק׳' },
  { volunteerId: 'V-2025-0140', fullName: 'יוסף מזרחי', city: 'פתח תקוה', phone: '053-3456789', availability: 'לא זמין', weeklyAssignments: '0', status: 'דורש טיפול', updated: 'לפני 35 דק׳' },
  { volunteerId: 'V-2025-0139', fullName: 'דוד פרידמן', city: 'אלעד', phone: '054-4567890', availability: 'היום', weeklyAssignments: '5', status: 'פעיל', updated: 'לפני שעה' },
  { volunteerId: 'V-2025-0138', fullName: 'חיים ביטון', city: 'בית שמש', phone: '055-5678901', availability: 'מחר', weeklyAssignments: '1', status: 'ממתין לאישור', updated: 'לפני שעתיים' }
]

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
  return <div className="calls-stats">{volunteerStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function VolunteersFilterBar() {
  return <div className="filter-bar"><Link className="btn btn-primary" to="/volunteers/new">הוספת מתנדב</Link><SelectField value="זמינות" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput placeholder="חיפוש לפי שם או טלפון" /></div>
}

function VolunteersActivitySummary() {
  return <section className="calls-activity-summary"><h2>סיכום פעילות מתנדבים</h2><div><span>שיבוצי מתנדבים השבוע: <b>34</b></span><span>מתנדבים זמינים היום: <b>87</b></span><span>מתנדבים ללא פעילות: <b>9</b></span></div></section>
}

export function VolunteersList() {
  return <div className="content calls-content"><div className="title calls-title"><h1>מתנדבים</h1><p>רשימת המתנדבים הפעילים והמעקב אחר זמינות ושיבוצים</p></div><section className="calls-panel"><VolunteersStats /><VolunteersFilterBar /><DataTable columns={columns} rows={volunteersData} /><Pagination total={142} /><VolunteersActivitySummary /></section></div>
}
