import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'

const actions = [
  { label: 'פתיחת בקשת קדיש', to: '/public/kaddish-request' },
  { label: 'פתיחת קריאת מניין', to: '/public/minyan-request' },
  { label: 'הצטרפות כמתנדב', to: '/public/volunteer-join' },
  { label: 'בדיקת סטטוס בקשה', to: '/public/status' }
]

const sections = [
  { title: 'איך זה עובד', text: 'משאירים פרטים ראשוניים, המוקד בודק את הבקשה וממשיך לתיאום מסודר.' },
  { title: 'מה אפשר לבקש', text: 'בקשת קדיש, קריאת מניין, הצטרפות מתנדבים וסיוע קהילתי סביב פעילות הקדישים.' },
  { title: 'למי השירות מתאים', text: 'משפחות, קהילות, גבאים ומתנדבים המבקשים תהליך ברור ומכבד.' },
  { title: 'אמינות ומעקב', text: 'כל בקשה מקבלת מסלול טיפול ברור, סטטוס והמשך טיפול אנושי.' }
]

export function PublicHomePage() {
  return <PublicShell><section className="public-hero"><p className="public-eyebrow">מערכת קדישים לציבור</p><h1>קדישים ומניינים — בניהול מסודר, מכבד ואחראי</h1><p>מערכת לתיאום בקשות קדיש, קריאות מניין, מתנדבים ופעילות קהילתית, עם מעקב ברור וליווי אנושי.</p><div className="public-actions">{actions.map(action => <Link key={action.to} to={action.to} className="public-btn public-btn-primary">{action.label}</Link>)}</div></section><section className="public-section-grid">{sections.map(section => <article className="public-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</section><section className="public-cta-card"><h2>צריכים לפתוח בקשה?</h2><p>בחרו את סוג הפעולה המתאים והמשיכו למסך הציבורי הרלוונטי.</p><Link to="/public/kaddish-request" className="public-btn public-btn-secondary">התחלת טיפול</Link></section></PublicShell>
}
