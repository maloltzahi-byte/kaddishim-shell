import type { FormEvent } from 'react'
import { useState } from 'react'
import { PublicShell } from '../../components/public/PublicShell'

const steps = [
  { number: 1, title: 'פרטים' },
  { number: 2, title: 'פרטי נפטר' },
  { number: 3, title: 'אישור' }
]

const requestTypes = ['לוויה', 'שבעה', 'שלושים', 'יארצייט', 'שנת אבל']

export function PublicKaddishRequestPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [requestType, setRequestType] = useState('לוויה')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('טופס נשלח — DEMO')
  }

  return (
    <PublicShell>
      <section className="public-page-head public-centered-head public-wizard-head">
        <h1>בקשת קדיש</h1>
        <p>מלאו את הפרטים וניצור קשר לתיאום אמירת קדיש באופן מכבד ואמין.</p>
      </section>

      <form className="public-form-card public-wizard-card" onSubmit={handleSubmit}>
        <ol className="public-stepper" aria-label="שלבי בקשת קדיש">
          {steps.map((step) => (
            <li className={step.number === currentStep ? 'active' : ''} key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
            </li>
          ))}
        </ol>

        {currentStep === 1 && (
          <section className="public-wizard-panel" aria-label="פרטי בקשה">
            <fieldset className="public-choice-group">
              <legend>סוג הבקשה *</legend>
              <div className="public-choice-row">
                {requestTypes.map((type) => (
                  <button className={requestType === type ? 'active' : ''} key={type} onClick={() => setRequestType(type)} type="button">
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="public-field">
              <span>שם מלא של המבקש/ת *</span>
              <input placeholder="שם מלא" defaultValue="משה ישראלי" />
            </label>
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>עיר מגורים *</span>
                <input placeholder="עיר" defaultValue="ירושלים" />
              </label>
              <label className="public-field">
                <span>תאריך פטירה *</span>
                <input type="date" defaultValue="2025-05-25" />
              </label>
            </div>
            <fieldset className="public-radio-group">
              <legend>האם דרוש עדכון שוטף?</legend>
              <label><input defaultChecked name="updates" type="radio" /> כן, דרך SMS</label>
              <label><input name="updates" type="radio" /> לא דרוש עדכון</label>
            </fieldset>
          </section>
        )}

        {currentStep === 2 && (
          <section className="public-wizard-panel" aria-label="פרטי נפטר ועדכונים">
            <h2 className="public-panel-title">פרטי נפטר ועדכונים</h2>
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>שם הנפטר/ת *</span>
                <input placeholder="שם הנפטר/ת" defaultValue="דוד בן יעקב" />
              </label>
              <label className="public-field">
                <span>שם האם</span>
                <input placeholder="שם האם" defaultValue="שרה" />
              </label>
            </div>
            <label className="public-field">
              <span>נוסח מועדף</span>
              <select defaultValue="אשכנז">
                <option>אשכנז</option>
                <option>ספרד</option>
                <option>עדות המזרח</option>
                <option>לא ידוע</option>
              </select>
            </label>
            <div className="public-form-grid public-form-grid-two">
              <label className="public-field">
                <span>טלפון לקבלת עדכונים *</span>
                <input placeholder="050-1234567" defaultValue="050-1234567" />
              </label>
              <label className="public-field">
                <span>אימייל</span>
                <input placeholder="name@example.com" defaultValue="family@example.com" />
              </label>
            </div>
            <fieldset className="public-checkbox-group">
              <legend>איך תרצו לקבל עדכונים?</legend>
              <label><input defaultChecked type="checkbox" /> וואטסאפ</label>
              <label><input defaultChecked type="checkbox" /> אימייל</label>
              <label><input type="checkbox" /> SMS</label>
            </fieldset>
            <p className="public-privacy-note">הפרטים ישמשו אך ורק לצורך טיפול בבקשה ולא יועברו לצד ג׳.</p>
          </section>
        )}

        {currentStep === 3 && (
          <section className="public-wizard-panel public-review-panel" aria-label="אישור בקשת קדיש">
            <h2>אישור פרטים לפני שליחה</h2>
            <p>הבקשה תישלח במצב דמו בלבד. צוות המוקד לא יקבל מידע אמיתי ולא תתבצע שמירה.</p>
            <div className="public-review-grid">
              <span>סוג הבקשה</span>
              <strong>{requestType}</strong>
              <span>שם הנפטר</span>
              <strong>דוד בן יעקב</strong>
              <span>נוסח</span>
              <strong>אשכנז</strong>
              <span>עדכונים</span>
              <strong>וואטסאפ ואימייל</strong>
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
