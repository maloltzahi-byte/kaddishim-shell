import { Button } from '../components/primitives/Button'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'

type SettingsLogRow = Record<string, React.ReactNode> & {
  date: string
  action: string
  user: string
  status: string
}

const settingsStats = [
  { label: 'משתמשי מערכת', value: '12' },
  { label: 'הרשאות פעילות', value: '4' },
  { label: 'ערוצי התראה', value: '3' },
  { label: 'עדכון אחרון', value: 'היום' }
]

const organizationDetails = [
  { label: 'שם הארגון', value: 'קדישים' },
  { label: 'אתר', value: 'www.kaddishim.org.il' },
  { label: 'טלפון', value: '*6484' },
  { label: 'אימייל', value: 'info@kaddishim.org.il' }
]

const notificationChannels = [
  { label: 'SMS', value: 'פעיל' },
  { label: 'אימייל', value: 'פעיל' },
  { label: 'WhatsApp', value: 'בהכנה' },
  { label: 'התראות מערכת', value: 'פעיל' }
]

const permissionRoles = [
  { label: 'מנהל מערכת', value: 'גישה מלאה' },
  { label: 'מוקד שירות', value: 'קריאות ובקשות' },
  { label: 'רכז מתנדבים', value: 'מתנדבים ושיבוצים' },
  { label: 'צפייה בלבד', value: 'דוחות' }
]

const settingsLogData: SettingsLogRow[] = [
  { date: '28/04/2026', action: 'עדכון פרטי קשר', user: 'מנהל מערכת', status: 'הושלם' },
  { date: '27/04/2026', action: 'שינוי הרשאות מוקד', user: 'מנהל מערכת', status: 'הושלם' },
  { date: '26/04/2026', action: 'הפעלת התראות SMS', user: 'רכז מערכת', status: 'הושלם' },
  { date: '25/04/2026', action: 'עדכון תבניות הודעה', user: 'מוקד שירות', status: 'בטיפול' },
  { date: '24/04/2026', action: 'בדיקת הרשאות צפייה', user: 'מנהל מערכת', status: 'הושלם' }
]

function statusTone(status: string): BadgeTone {
  if (status === 'הושלם') return 'success'
  if (status === 'בטיפול') return 'warning'
  return 'neutral'
}

const columns: Column<SettingsLogRow>[] = [
  { key: 'date', label: 'תאריך' },
  { key: 'action', label: 'פעולה' },
  { key: 'user', label: 'משתמש' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={statusTone(String(row.status))}>{row.status}</Badge> },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function SettingsStats() {
  return <div className="calls-stats">{settingsStats.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function SettingsPanel({ title, rows, actionLabel }: { title: string; rows: Array<{ label: string; value: string }>; actionLabel: string }) {
  return <section className="report-panel settings-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</div><div className="settings-panel-action"><Button variant="outline">{actionLabel}</Button></div></section>
}

export function SettingsPage() {
  return <div className="content calls-content"><div className="title calls-title"><h1>הגדרות</h1><p>ניהול הגדרות המערכת, פרטי הארגון והרשאות המשתמשים</p></div><section className="calls-panel"><SettingsStats /><div className="reports-grid"><SettingsPanel title="פרטי ארגון" rows={organizationDetails} actionLabel="עריכת פרטים" /><SettingsPanel title="התראות" rows={notificationChannels} actionLabel="ניהול התראות" /><SettingsPanel title="הרשאות משתמשים" rows={permissionRoles} actionLabel="ניהול הרשאות" /></div><section className="reports-table-section"><h2>יומן שינויים אחרון</h2><DataTable columns={columns} rows={settingsLogData} /></section></section></div>
}
