import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'
import { publicDonationSections } from '../../data/public'

export function PublicDonationsPage() {
  return <PublicShell><section className="public-page-head"><h1>שותפות בפעילות קדישים</h1><p>אפשרות להצטרף לתמיכה בפעילות, סיוע למערך המתנדבים והרחבת שירותי הקדיש והמניינים.</p></section><section className="public-section-grid">{publicDonationSections.map(section => <article className="public-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</section><section className="public-form-card public-compact-card"><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הציבורי</Link><Link to="/public/thank-you" className="public-btn public-btn-primary">אני רוצה שיחזרו אליי</Link></div></section></PublicShell>
}
