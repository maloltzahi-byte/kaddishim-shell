import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'

const fields = ['שם מלא', 'טלפון', 'אימייל', 'עיר מגורים', 'אזורי פעילות', 'זמינות', 'סוג פעילות מועדף', 'הערות']

export function PublicVolunteerJoinPage() {
  return <PublicShell><section className="public-page-head"><h1>הצטרפות כמתנדב</h1><p>השאירו פרטים לצורך בדיקת התאמה, אזורי פעילות וזמינות לשיבוץ בבקשות קדיש וקריאות מניין.</p></section><section className="public-form-card"><div className="public-form-grid">{fields.map(field => <label className="public-field" key={field}><span>{field}</span><input placeholder={field} readOnly /></label>)}</div><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הציבורי</Link><Link to="/public/thank-you" className="public-btn public-btn-primary">שליחת פרטים לבדיקה</Link></div></section></PublicShell>
}
