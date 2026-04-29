import type { FormEvent } from 'react'
import { useState } from 'react'
import { PublicShell } from '../../components/public/PublicShell'

const steps = [
  { number: 1, title: 'פרטים' },
  { number: 2, title: 'איש קשר' },
  { number: 3, title: 'אישור' }
]

export function MinyanRequestPage() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('טופס נשלח — DEMO')
  }

  return (
    <PublicShell>
      <section className="public-page-head public-centered-head public-wizard-head">
        <h1>בקשת מניין</h1>
        <p>מלאו את הפרטים ונחזור אליכם לתיאום הקריאה.</p>
      </section>

      <form className="public-form-card public-wizard-card" onSubmit={handleSubmit}>
        <ol className="public-stepper" aria-label="שלבי בקשת מניין">
          {steps.map((step) => (
            <li className={step.number === currentStep ? 'active' : ''} key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
            </li>
          ))}
        </ol>

        {currentStep === 1 && (
          <section className="public-wizard-panel" aria-label="פרטי הקריאה">
            <label className="public-field">
              <span>סוג האירוע *</span>
              <select defaultValue="לוויה">
                <option>לוויה</option>
                <option>אזכרה</option>
                <option>שבעה</option>
                <option>תפילה בבית אבל</option>
              </select>
            </label>
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>תאריך *</span>
                <input type="date" defaultValue="2025-05-25" />
              </label>
              <label className="public-field">
                <span>שעה *</span>
                <input type="time" defaultValue="10:30" />
              </label>
            </div>
            <label className="public-field">
              <span>עיר *</span>
              <select defaultValue="ירושלים">
                <option>ירושלים</option>
                <option>בני ברק</option>
                <option>תל אביב</option>
                <option>חיפה</option>
              </select>
            </label>
            <label className="public-field">
              <span>כתובת מדויקת *</span>
              <input placeholder="רחוב, מספר, בית עלמין או בית כנסת" defaultValue="רח׳ הר המנוחות 22, ירושלים" />
            </label>
            <label className="public-field">
              <span>מספר חסרים למניין *</span>
              <select defaultValue="2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </label>
          </section>
        )}

        {currentStep === 2 && (
          <section className="public-wizard-panel" aria-label="איש קשר">
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>שם מלא *</span>
                <input placeholder="שם איש הקשר" defaultValue="יוסי לוי" />
              </label>
              <label className="public-field">
                <span>טלפון נייד *</span>
                <input placeholder="050-1234567" defaultValue="050-1234567" />
              </label>
            </div>
            <label className="public-field">
              <span>קשר למשפחה</span>
              <select defaultValue="בן משפחה">
                <option>בן משפחה</option>
                <option>גבאי</option>
                <option>חבר קהילה</option>
                <option>אחר</option>
              </select>
            </label>
            <label className="public-field">
              <span>הערות לתיאום</span>
              <textarea placeholder="פרטים שיעזרו למתנדבים להגיע בזמן" rows={4} />
            </label>
            <p className="public-privacy-note">הפרטים ישמשו אך ורק לצורך תיאום המניין ולא יועברו לצד ג׳.</p>
          </section>
        )}

        {currentStep === 3 && (
          <section className="public-wizard-panel public-review-panel" aria-label="אישור הבקשה">
            <h2>אישור פרטים לפני שליחה</h2>
            <p>הבקשה תישלח למוקד הדמו ותוצג הודעת אישור בלבד. אין שמירה אמיתית ואין חיבור לשרת.</p>
            <div className="public-review-grid">
              <span>סוג אירוע</span>
              <strong>לוויה</strong>
              <span>מיקום</span>
              <strong>ירושלים</strong>
              <span>מועד</span>
              <strong>25/05/2025, 10:30</strong>
              <span>איש קשר</span>
              <strong>יוסי לוי</strong>
            </div>
          </section>
        )}

        <div className="public-wizard-actions">
          <button className="public-btn public-btn-outline" disabled={currentStep === 1} onClick={() => setCurrentStep((step) => Math.max(1, step - 1))} type="button">
            חזרה
          </button>
          {currentStep < 3 ? (
            <button className="public-btn public-btn-primary" onClick={() => setCurrentStep((step) => Math.min(3, step + 1))} type="button">
              המשך
            </button>
          ) : (
            <button className="public-btn public-btn-primary" type="submit">
              שליחת בקשה
            </button>
          )}
        </div>
      </form>
    </PublicShell>
  )
}
