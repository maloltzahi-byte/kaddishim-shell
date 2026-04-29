import type { FormEvent } from 'react'
import { useState } from 'react'
import { PublicShell } from '../../components/public/PublicShell'

const amounts = [180, 360, 720, 1800]

const impactCards = [
  { title: 'מניין במקום', text: 'מאפשרים הגעה מהירה של מתנדבים לקריאה דחופה.' },
  { title: 'כבוד לנפטר', text: 'קדיש יתום, מעקב ודיווח למשפחות באופן מסודר.' },
  { title: 'חיזוק הקהילה', text: 'תמיכה במערך חסד קהילתי וזמין.' }
]

export function PublicDonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState(720)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('טופס נשלח — DEMO')
  }

  return (
    <PublicShell>
      <section className="public-page-head public-centered-head">
        <h1>תרומות</h1>
        <p>כל תרומה מסייעת להפעיל מניינים, אמירת קדיש וליווי משפחות ברגעים רגישים.</p>
      </section>

      <form className="public-form-card public-donation-card" onSubmit={handleSubmit}>
        <section className="donation-amounts" aria-label="בחירת סכום">
          {amounts.map((amount) => (
            <button className={selectedAmount === amount ? 'active' : ''} key={amount} onClick={() => setSelectedAmount(amount)} type="button">
              <strong>₪ {amount.toLocaleString('he-IL')}</strong>
              <span>{amount === 720 ? 'מומלץ' : 'תרומה חד פעמית'}</span>
            </button>
          ))}
        </section>

        <section className="donation-impact" aria-label="ההשפעה שלכם">
          <h2>ההשפעה שלכם</h2>
          <div>
            {impactCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="donation-form-section" aria-label="פרטי תרומה">
          <h2>פרטי תרומה</h2>
          <div className="public-form-grid public-form-grid-two">
            <label className="public-field">
              <span>סכום</span>
              <input inputMode="numeric" onChange={(event) => setSelectedAmount(Number(event.target.value) || 0)} value={selectedAmount} />
            </label>
            <label className="public-field">
              <span>מסלול</span>
              <select defaultValue="תרומה חד פעמית">
                <option>תרומה חד פעמית</option>
                <option>תרומה חודשית</option>
              </select>
            </label>
          </div>
          <div className="public-form-grid public-form-grid-two">
            <label className="public-field">
              <span>שם מלא *</span>
              <input placeholder="שם מלא" defaultValue="יוסי לוי" />
            </label>
            <label className="public-field">
              <span>אימייל *</span>
              <input placeholder="name@example.com" defaultValue="yossi.levi@example.com" />
            </label>
          </div>
          <label className="public-field">
            <span>כרטיס אשראי *</span>
            <input placeholder="0000 0000 0000 0000" defaultValue="4580 0000 0000 0000" />
          </label>
          <div className="public-form-grid public-form-grid-two">
            <label className="public-field">
              <span>תוקף</span>
              <input placeholder="MM / YY" defaultValue="12 / 29" />
            </label>
            <label className="public-field">
              <span>CVV</span>
              <input placeholder="123" defaultValue="123" />
            </label>
          </div>
          <label className="public-checkbox-line">
            <input defaultChecked type="checkbox" />
            <span>קבלת קבלה לאימייל</span>
          </label>
        </section>

        <div className="public-actions public-actions-end">
          <button className="public-btn public-btn-primary donation-submit" type="submit">
            לתרומה מאובטחת
          </button>
        </div>
      </form>
    </PublicShell>
  )
}
