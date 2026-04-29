import type { FormEvent } from 'react'
import { PublicShell } from '../../components/public/PublicShell'

const partnerTypes = [
  { title: 'מוסדות וארגונים', text: 'חיבור קהילות, בתי כנסת וארגוני חסד למערך קדישים ארצי.' },
  { title: 'יזמים ועסקים', text: 'שותפות בתפעול, תמיכה וסיוע למשפחות ברגעים רגישים.' },
  { title: 'קהילות וחברים', text: 'יצירת רשת מתנדבים מקומית המחוברת לקריאות בזמן אמת.' },
  { title: 'תורמים קבועים', text: 'סיוע מתמשך להרחבת הפעילות ולשמירה על זמינות גבוהה.' }
]

export function PartnersPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('טופס נשלח — DEMO')
  }

  return (
    <PublicShell>
      <section className="public-page-head public-centered-head">
        <h1>שותפים</h1>
        <p>הצטרפות כשותפים לפעילות קדישים, תמיכה בקהילות וחיזוק מערך המתנדבים.</p>
      </section>
      <section className="public-section-grid">
        {partnerTypes.map((type) => (
          <article className="public-card" key={type.title}>
            <h2>{type.title}</h2>
            <p>{type.text}</p>
          </article>
        ))}
      </section>
      <form className="public-form-card public-compact-card" onSubmit={handleSubmit}>
        <div className="public-form-grid">
          <label className="public-field">
            <span>שם הארגון</span>
            <input placeholder="שם הארגון" readOnly />
          </label>
          <label className="public-field">
            <span>איש קשר</span>
            <input placeholder="שם מלא" readOnly />
          </label>
          <label className="public-field">
            <span>טלפון</span>
            <input placeholder="050-1234567" readOnly />
          </label>
          <label className="public-field">
            <span>אימייל</span>
            <input placeholder="contact@example.org" readOnly />
          </label>
        </div>
        <div className="public-actions public-actions-end">
          <button className="public-btn public-btn-primary" type="submit">
            שליחת בקשה
          </button>
        </div>
      </form>
    </PublicShell>
  )
}
