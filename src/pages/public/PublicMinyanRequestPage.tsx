import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'
import { publicMinyanRequestFields } from '../../data/public'

export function PublicMinyanRequestPage() {
  return <PublicShell><section className="public-page-head"><h1>פתיחת קריאת מניין</h1><p>פתיחת קריאה לצורך השלמת מניין, כולל פרטי מקום, שעה, איש קשר ודחיפות.</p></section><section className="public-form-card"><div className="public-form-grid">{publicMinyanRequestFields.map(field => <label className="public-field" key={field}><span>{field}</span><input placeholder={field} readOnly /></label>)}</div><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הציבורי</Link><Link to="/public/thank-you" className="public-btn public-btn-primary">פתיחת קריאה לבדיקה</Link></div></section></PublicShell>
}
