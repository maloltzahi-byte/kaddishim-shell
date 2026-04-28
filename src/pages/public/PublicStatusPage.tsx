import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'

export function PublicStatusPage() {
  return <PublicShell><section className="public-page-head"><h1>בדיקת סטטוס בקשה</h1><p>הזינו מספר בקשה או מספר טלפון לצורך בדיקת סטטוס ראשונית.</p></section><section className="public-form-card"><div className="public-form-grid public-form-grid-two"><label className="public-field"><span>מספר בקשה</span><input placeholder="K-2025-0321" readOnly /></label><label className="public-field"><span>טלפון</span><input placeholder="050-1234567" readOnly /></label></div><article className="public-result-card"><h2>סטטוס לדוגמה: הבקשה בבדיקת מוקד</h2><p>שלב נוכחי: אימות פרטים</p><p>פעולה הבאה: שיבוץ מתנדב</p></article><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הציבורי</Link><Link to="/public/status" className="public-btn public-btn-primary">בדיקת סטטוס</Link></div></section></PublicShell>
}
