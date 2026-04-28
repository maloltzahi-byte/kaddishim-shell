import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Icon, type IconName } from './components/shared/Icon'
import { Button } from './components/primitives/Button'
import { SearchInput } from './components/primitives/SearchInput'
import { SelectField } from './components/primitives/SelectField'
import { Badge } from './components/primitives/Badge'
import { DataTable, type Column } from './components/table/DataTable'
import { Pagination } from './components/table/Pagination'
import { KaddishRequestsList } from './pages/KaddishRequestsList'

const navItems = [
  { label: 'דשבורד ראשי', to: '/' },
  { label: 'קריאות מניין', to: '/calls' },
  { label: 'בקשות קדיש', to: '/kaddish-requests' },
  { label: 'מתנדבים', to: '/' },
  { label: 'חברים', to: '/' },
  { label: 'דוחות', to: '/' },
  { label: 'הגדרות', to: '/' }
]

function LogoBlock() {
  return <div className="logo"><div className="brand"><b>קדישים</b><small>לזכרם. בנוכחות</small></div><Icon name="flame" size={26} className="logo-mark" /></div>
}

function TopNav() {
  const location = useLocation()
  return <header className="top"><LogoBlock /><nav className="nav">{navItems.map(item => <Link className={location.pathname === item.to ? 'active' : ''} key={item.label} to={item.to}>{item.label}</Link>)}<span className="q">?</span></nav></header>
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="app-wrap"><section className="shell"><TopNav />{children}</section></main>
}

function StatCard({ label, value, delta, icon }: { label: string; value: string; delta: string; icon: IconName }) {
  return <article className="kpi"><span className="icon-circle"><Icon name={icon} /></span><div><div className="kpi-label">{label}</div><div className="kpi-num">{value}</div><div className="kpi-delta">▲ {delta}</div></div></article>
}

function Panel({ title, footerLink, children }: { title: string; footerLink?: string; children: React.ReactNode }) {
  return <section className="panel"><h2>{title}</h2>{children}{footerLink && <div className="panel-foot"><a>{footerLink}</a></div>}</section>
}

const activity = [
  { time: '07:15', title: 'קריאת מניין בבני ברק', desc: 'הקצאת מתנדב', icon: 'clock' as IconName },
  { time: '08:30', title: 'בקשת קדיש - ירושלים', desc: 'הקצאת מתנדב', icon: 'clipboard' as IconName },
  { time: '09:45', title: 'קריאת מניין - בית שמש', desc: 'הושלמו המתנדבים', icon: 'home' as IconName },
  { time: '11:10', title: 'בקשת קדיש - מודיעין עילית', desc: 'אושרה', icon: 'flame' as IconName }
]

const urgent = [
  { title: 'קריאת מניין', meta: 'אלעד · 06:45', desc: 'נדרשים 2 מתנדבים', level: 'danger' as const },
  { title: 'קריאת מניין', meta: 'פתח תקוה · 07:00', desc: 'נדרש מתנדב', level: 'warning' as const },
  { title: 'בקשת קדיש', meta: 'רוממה · 08:00', desc: 'טרם הוקצה מתנדב', level: 'danger' as const }
]

const actions = [
  { label: 'קריאת מניין חדשה', icon: 'plus' as IconName },
  { label: 'בקשת קדיש חדשה', icon: 'user' as IconName },
  { label: 'חיפוש קריאה / בקשה', icon: 'search' as IconName },
  { label: 'דיווח מתנדב', icon: 'info' as IconName },
  { label: 'דוח יומי', icon: 'file' as IconName }
]

function ActivityList() {
  return <>{activity.map(item => <div className="row" key={item.time}><div className="row-main"><Icon name={item.icon} size={14} className="row-icon" /><div className="row-text"><b>{item.title}</b><small>{item.desc}</small></div></div><time>{item.time}</time></div>)}</>
}

function UrgentList() {
  return <>{urgent.map(item => <div className="urgent" key={item.meta}><div className="urgent-text"><b>{item.title}</b><div className="meta">{item.meta}</div><div className={`desc ${item.level}`}>{item.desc}</div></div><Icon name="alert" size={22} className={item.level} /></div>)}</>
}

function QuickActions() {
  return <>{actions.map(action => <button className="act" key={action.label}><span>{action.label}</span><Icon name={action.icon} size={20} className="act-icon" /></button>)}</>
}

function StatusSummary() {
  const cells = [{ label: 'פתוחות', value: '28' }, { label: 'בטיפול', value: '17' }, { label: 'הוקצו', value: '34' }, { label: 'הושלמו היום', value: '18' }]
  return <section className="summary"><h2>סיכום סטטוסים</h2><div className="sum-grid">{cells.map(cell => <div className="sum-cell" key={cell.label}><span className="label">{cell.label}</span><strong className="val">{cell.value}</strong></div>)}</div></section>
}

function Dashboard() {
  return <PageShell><div className="content"><div className="title"><h1>דשבורד ראשי</h1><p>סקירה כללית של הפעילות במערכת</p></div><div className="kpis"><StatCard label="פעילות היום" value="87" delta="23 השבוע" icon="clock" /><StatCard label="מתנדבים פעילים" value="142" delta="הכל" icon="users" /><StatCard label="בקשות קדיש" value="56" delta="8 חדשות" icon="mail" /><StatCard label="קריאות פתוחות" value="28" delta="12 חדשות" icon="bell" /></div><div className="grid"><Panel title="פעילות היום" footerLink="הצג הכל"><ActivityList /></Panel><Panel title="פריטים דחופים" footerLink="הצג הכל"><UrgentList /></Panel><Panel title="פעולות מהירות"><QuickActions /></Panel></div><StatusSummary /></div></PageShell>
}

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

function CallsList() {
  return <PageShell><div className="content calls-content"><div className="title calls-title"><h1>קריאות מניין</h1><p>רשימת הקריאות הפעילות והמתקדמות במערכת</p></div><section className="calls-panel"><CallsStats /><FilterBar /><DataTable columns={callsColumns} rows={callsData} /><Pagination /><CallsActivitySummary /></section></div></PageShell>
}

function KaddishRequestsPage() {
  return <PageShell><KaddishRequestsList /></PageShell>
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Dashboard />} /><Route path="/calls" element={<CallsList />} /><Route path="/kaddish-requests" element={<KaddishRequestsPage />} /></Routes></BrowserRouter>
}
