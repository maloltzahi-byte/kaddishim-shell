import type { FormEvent } from 'react'
import { useState } from 'react'
import { PublicShell } from '../../components/public/PublicShell'

const steps = [
  { number: 1, title: 'פרטים אישיים' },
  { number: 2, title: 'זמינות והתאמה' },
  { number: 3, title: 'אישור' }
]

export function PublicVolunteerJoinPage() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('טופס נשלח — DEMO')
  }

  return (
    <PublicShell>
      <section className="public-page-head public-centered-head public-wizard-head">
        <h1>הצטרפות כמתנדב</h1>
        <p>אנחנו שמחים שבחרת לקחת חלק. מלאו פרטים וניצור קשר להמשך בדיקה ותיאום.</p>
      </section>

      <form className="public-form-card public-wizard-card" onSubmit={handleSubmit}>
        <ol className="public-stepper" aria-label="שלבי הצטרפות מתנדב">
          {steps.map((step) => (
            <li className={step.number === currentStep ? 'active' : ''} key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
            </li>
          ))}
        </ol>

        {currentStep === 1 && (
          <section className="public-wizard-panel" aria-label="פרטים אישיים">
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>שם מלא *</span>
                <input placeholder="שם מלא" defaultValue="יוסי כהן" />
              </label>
              <label className="public-field">
                <span>טלפון נייד *</span>
                <input placeholder="050-1234567" defaultValue="050-1234567" />
              </label>
            </div>
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>אימייל</span>
                <input placeholder="name@example.com" defaultValue="volunteer@example.com" />
              </label>
              <label className="public-field">
                <span>עיר מגורים *</span>
                <input placeholder="עיר" defaultValue="ירושלים" />
              </label>
            </div>
            <label className="public-field">
              <span>שכונה / אזור פעילות</span>
              <input placeholder="לדוגמה: גבעת שאול, מרכז העיר" />
            </label>
          </section>
        )}

        {currentStep === 2 && (
          <section className="public-wizard-panel" aria-label="זמינות והתאמה">
            <h2 className="public-panel-title">זמינות והעדפות</h2>
            <fieldset className="public-checkbox-group">
              <legend>זמינות מועדפת</legend>
              <label><input defaultChecked type="checkbox" /> ערב</label>
              <label><input defaultChecked type="checkbox" /> צהריים</label>
              <label><input type="checkbox" /> בוקר</label>
              <label><input type="checkbox" /> לילה</label>
            </fieldset>
            <fieldset className="public-checkbox-group">
              <legend>סוגי התנדבות</legend>
              <label><input defaultChecked type="checkbox" /> מניינים</label>
              <label><input defaultChecked type="checkbox" /> אמירת קדיש</label>
              <label><input type="checkbox" /> ליווי משפחות</label>
              <label><input type="checkbox" /> תפעול טלפוני</label>
            </fieldset>
            <fieldset className="public-radio-group">
              <legend>אפשרות הגעה</legend>
              <label><input defaultChecked name="transport" type="radio" /> רכב פרטי</label>
              <label><input name="transport" type="radio" /> תחבורה ציבורית</label>
              <label><input name="transport" type="radio" /> אופניים / רגלי</label>
            </fieldset>
          </section>
        )}

        {currentStep === 3 && (
          <section className="public-wizard-panel" aria-label="אישורים">
            <fieldset className="public-checkbox-group public-confirmations">
              <legend>אישורים</legend>
              <label><input defaultChecked type="checkbox" /> קראתי ואני מסכים/ה לכללי ההתנדבות הארצית של המערכת.</label>
              <label><input defaultChecked type="checkbox" /> אני מאשר/ת שמידע זה ישמש לצורך פעילות המערכת בלבד.</label>
              <label><input defaultChecked type="checkbox" /> אני מבין/ה שמדובר בשלב בדיקה וללא התחייבות לשיבוץ.</label>
            </fieldset>
            <div className="public-review-grid">
              <span>שם</span>
              <strong>יוסי כהן</strong>
              <span>עיר</span>
              <strong>ירושלים</strong>
              <span>פעילות</span>
              <strong>מניינים ואמירת קדיש</strong>
              <span>זמינות</span>
              <strong>ערב וצהריים</strong>
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
