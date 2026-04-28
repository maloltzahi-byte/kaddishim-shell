import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

type IconName = 'clock' | 'users' | 'mail' | 'bell' | 'clipboard' | 'home' | 'flame' | 'alert' | 'file' | 'plus' | 'search' | 'user' | 'info' | 'chevron'
type BadgeTone = 'success' | 'warning' | 'danger' | 'neutral'

const navItems = [
  { label: 'קריאות מניין', to: '/calls' },
  { label: 'בקשות קדיש', to: '/' },
  { label: 'מתנדבים', to: '/' },
  { label: 'חברים', to: '/' },
  { label: 'דוחות', to: '/' },
  { label: 'הגדרות', to: '/' }
]

function Icon({ name, size = 22, className = '' }: { name: IconName; size?: number; className?: string }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className }
  switch (name) {
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    case 'users': return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    case 'mail': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    case 'bell': return <svg {...common}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    case 'clipboard': return <svg {...common}><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
    case 'home': return <svg {...common}><path d="M3 21V9l9-7 9 7v12"/><path d="M9 21V12h6v9"/></svg>
    case 'flame': return <svg {...common}><path d="M12 2C16.5 7.5 19 11.5 19 15.2A7 7 0 0 1 5 15.2C5 11.5 7.5 7.5 12 2Z"/><path d="M12 9c1.9 3.1 2.8 4.9 2.8 6.5a2.8 2.8 0 0 1-5.6 0C9.2 13.9 10.1 12.1 12 9Z"/></svg>
    case 'alert': return <svg {...common}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    case 'file': return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    case 'plus': return <svg {...common}><path d="M12 5v14"/><path d="M5 12h14"/></svg>
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    case 'user': return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
    case 'info': return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    case 'chevron': return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>
  }
}

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

function Badge({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function Button({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }) {
  return <button className={`btn btn-${variant}`}>{children}</button>
}

function SearchInput() {
  return <label className="search-input"><Icon name="search" size={15} /><input placeholder="חיפוש לפי מספר או עיר" /></label>
}

function SelectField({ value }: { value: string }) {
  return <button className="select-field"><span>{value}</span><Icon name="chevron" size={14} /></button>
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

const callsData = [
  { callId: 'M-2025-0548', city: 'בני ברק', time: '07:00', required: '10', missing: '2', confirmed: '8', status: 'פתוחה', urgency: 'גבוהה', updated: 'לפני 5 דק׳' },
  { callId: 'M-2025-0547', city: 'אלעד', time: '06:45', required: '10', missing: '4', confirmed: '6', status: 'בטיפול', urgency: 'גבוהה', updated: 'לפני 12 דק׳' },
  { callId: 'M-2025-0546', city: 'פתח תקוה', time: '07:15', required: '10', missing: '1', confirmed: '9', status: 'בטיפול', urgency: 'רגילה', updated: 'לפני 18 דק׳' },
  { callId: 'M-2025-0545', city: 'בית שמש', time: '08:00', required: '10', missing: '0', confirmed: '10', status: 'הושלמה', urgency: 'רגילה', updated: 'לפני 25 דק׳' },
  { callId: 'M-2025-0544', city: 'ירושלים', time: '09:00', required: '10', missing: '0', confirmed: '10', status: 'הושלמה', urgency: 'נמוכה', updated: 'לפני 40 דק׳' }
]

const columns = ['מס׳ קריאה', 'עיר', 'שעה', 'נדרשים', 'חסרים', 'אישרו', 'סטטוס', 'דחיפות', 'עדכון אחרון']

function CallsTable() {
  return <div className="table-wrap"><table className="data-table"><thead><tr>{columns.map(col => <th key={col}>{col}</th>)}</tr></thead><tbody>{callsData.map(row => <tr key={row.callId}><td>{row.callId}</td><td>{row.city}</td><td>{row.time}</td><td>{row.required}</td><td>{row.missing}</td><td>{row.confirmed}</td><td><Badge tone={row.status === 'הושלמה' ? 'success' : row.status === 'בטיפול' ? 'warning' : 'neutral'}>{row.status}</Badge></td><td><Badge tone={row.urgency === 'גבוהה' ? 'danger' : row.urgency === 'רגילה' ? 'warning' : 'success'}>{row.urgency}</Badge></td><td>{row.updated}</td></tr>)}</tbody></table></div>
}

function Pagination() {
  return <div className="pagination"><span>הצגה 1-5 מתוך 128</span><div className="pages"><button>הבא ←</button><button>5</button><button>4</button><button>3</button><button>2</button><button className="current">1</button><button>→ קודם</button></div></div>
}

function FilterBar() {
  return <div className="filter-bar"><Button>יצירת קריאת מניין</Button><SelectField value="שעה" /><SelectField value="עיר" /><SelectField value="סטטוס" /><SearchInput /></div>
}

function CallsList() {
  return <PageShell><div className="content calls-content"><div className="title calls-title"><h1>קריאות מניין</h1><p>רשימת הקריאות הפעילות והמתקדמות במערכת</p></div><section className="calls-panel"><FilterBar /><CallsTable /><Pagination /></section></div></PageShell>
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Dashboard />} /><Route path="/calls" element={<CallsList />} /></Routes></BrowserRouter>
}
