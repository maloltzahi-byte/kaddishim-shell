import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'
import { publicKaddishRequestFields } from '../../data/public'

export function PublicKaddishRequestPage() {
  return <PublicShell><section className="public-page-head"><h1>פתיחת בקשת קדיש</h1><p>השאירו פרטים ראשוניים לצורך פתיחת בקשה, בדיקת פרטי הנפטר והכנה לשיבוץ מתנדב מתאים.</p></section><section className="public-form-card"><div className="public-form-grid">{publicKaddishRequestFields.map(field => <label className="public-field" key={field}><span>{field}</span><input placeholder={field} readOnly /></label>)}</div><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הציבורי</Link><Link to="/public/thank-you" className="public-btn public-btn-primary">שליחת בקשה לבדיקה</Link></div></section></PublicShell>
}
