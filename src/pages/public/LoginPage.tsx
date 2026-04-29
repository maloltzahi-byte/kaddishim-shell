import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'

export function LoginPage() {
  return (
    <PublicShell>
      <section className="public-page-head public-centered-head">
        <h1>כניסה למערכת</h1>
        <p>מסך כניסה דמו למערכת הניהול. אין כאן אימות אמיתי או חיבור Auth.</p>
      </section>
      <section className="public-form-card public-compact-card public-login-card">
        <div className="public-form-grid public-form-grid-two">
          <label className="public-field">
            <span>אימייל</span>
            <input placeholder="name@example.com" readOnly />
          </label>
          <label className="public-field">
            <span>סיסמה</span>
            <input placeholder="••••••••" type="password" readOnly />
          </label>
        </div>
        <div className="public-actions public-actions-end">
          <Link to="/" className="public-btn public-btn-outline">
            חזרה לדף הבית
          </Link>
          <Link to="/admin" className="public-btn public-btn-primary">
            כניסה לדמו
          </Link>
        </div>
      </section>
    </PublicShell>
  )
}
