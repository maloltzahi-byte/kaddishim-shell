import { Icon, type IconName } from '../components/shared/Icon'
import { PageShell } from '../components/layout/PageShell'

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

export function Dashboard() {
  return <PageShell><div className="content"><div className="title"><h1>דשבורד ראשי</h1><p>סקירה כללית של הפעילות במערכת</p></div><div className="kpis"><StatCard label="פעילות היום" value="87" delta="23 השבוע" icon="clock" /><StatCard label="מתנדבים פעילים" value="142" delta="הכל" icon="users" /><StatCard label="בקשות קדיש" value="56" delta="8 חדשות" icon="mail" /><StatCard label="קריאות פתוחות" value="28" delta="12 חדשות" icon="bell" /></div><div className="grid"><Panel title="פעילות היום" footerLink="הצג הכל"><ActivityList /></Panel><Panel title="פריטים דחופים" footerLink="הצג הכל"><UrgentList /></Panel><Panel title="פעולות מהירות"><QuickActions /></Panel></div><StatusSummary /></div></PageShell>
}
