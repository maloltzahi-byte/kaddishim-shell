import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'
import { publicHomeActions, publicHomeSections } from '../../data/public'

export function PublicHomePage() {
  return <PublicShell><section className="public-hero"><p className="public-eyebrow">מערכת קדישים לציבור</p><h1>קדישים ומניינים — בניהול מסודר, מכבד ואחראי</h1><p>מערכת לתיאום בקשות קדיש, קריאות מניין, מתנדבים ופעילות קהילתית, עם מעקב ברור וליווי אנושי.</p><div className="public-actions">{publicHomeActions.map(action => <Link key={action.to} to={action.to} className="public-btn public-btn-primary">{action.label}</Link>)}</div></section><section className="public-section-grid">{publicHomeSections.map(section => <article className="public-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</section><section className="public-cta-card"><h2>צריכים לפתוח בקשה?</h2><p>בחרו את סוג הפעולה המתאים והמשיכו למסך הציבורי הרלוונטי.</p><Link to="/public/kaddish-request" className="public-btn public-btn-secondary">התחלת טיפול</Link></section></PublicShell>
}
