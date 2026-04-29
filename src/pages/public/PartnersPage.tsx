import type { FormEvent } from 'react'
import { PublicShell } from '../../components/public/PublicShell'

const partnerTypes = [
  { title: 'חברות וקהילות', text: 'חיבור מתפללים, בתי כנסת וקהילות לקריאות מקומיות.' },
  { title: 'עסקים', text: 'שותפות חברתית במערך חסד ארצי עם השפעה ברורה.' },
  { title: 'קרנות ומוסדות', text: 'תמיכה בתפעול, מוקד, מערכות ודיווח למשפחות.' },
  { title: 'מסגרות תומכות', text: 'סיוע לארגונים שרוצים להפנות משפחות לקבלת מענה.' }
]

const reasons = [
  { title: 'אמינות', text: 'כל בקשה מקבלת מסלול טיפול ברור ומעקב.' },
  { title: 'פריסה ארצית', text: 'רשת מתנדבים וקהילות במוקדים רבים.' },
  { title: 'קהילה חזקה', text: 'שותפות שמחזקת משפחות ברגעים רגישים.' },
  { title: 'השפעה מדידה', text: 'נתוני פעילות, זמינות ודיווח מסודר.' }
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

      <section className="public-section-grid partners-grid" aria-label="סוגי שותפות">
        {partnerTypes.map((type) => (
          <article className="public-card partner-type-card" key={type.title}>
            <h2>{type.title}</h2>
            <p>{type.text}</p>
          </article>
        ))}
      </section>

      <form className="public-form-card public-compact-card partners-form" onSubmit={handleSubmit}>
        <h2>בואו נתחיל שיתוף פעולה</h2>
        <div className="public-form-grid">
          <label className="public-field">
            <span>שם הארגון *</span>
            <input placeholder="שם הארגון" />
          </label>
          <label className="public-field">
            <span>סוג השותפות *</span>
            <select defaultValue="קהילה">
              <option>קהילה</option>
              <option>עסק</option>
              <option>קרן / מוסד</option>
              <option>ארגון חברתי</option>
            </select>
          </label>
          <label className="public-field">
            <span>איש קשר *</span>
            <input placeholder="שם מלא" defaultValue="יוסי לוי" />
          </label>
          <label className="public-field">
            <span>טלפון *</span>
            <input placeholder="050-1234567" defaultValue="050-1234567" />
          </label>
          <label className="public-field">
            <span>אימייל *</span>
            <input placeholder="contact@example.org" defaultValue="contact@example.org" />
          </label>
          <label className="public-field">
            <span>עיר / אזור פעילות</span>
            <input placeholder="אזור פעילות" defaultValue="ירושלים והסביבה" />
          </label>
        </div>
        <label className="public-field">
          <span>ספרו לנו עליכם ועל אופי השותפות</span>
          <textarea placeholder="פרטים שיעזרו לנו ליצור קשר מתאים" rows={4} />
        </label>
        <label className="public-checkbox-line">
          <input defaultChecked type="checkbox" />
          <span>אני מאשר/ת שימוש בפרטים לצורך יצירת קשר בנושא שותפות.</span>
        </label>
        <div className="public-actions public-actions-end">
          <button className="public-btn public-btn-primary" type="submit">
            שליחת בקשה
          </button>
        </div>
      </form>

      <section className="partners-reasons" aria-label="למה שותפים בוחרים בנו">
        <h2>למה שותפים בוחרים בנו</h2>
        <div>
          {reasons.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PublicShell>
  )
}
