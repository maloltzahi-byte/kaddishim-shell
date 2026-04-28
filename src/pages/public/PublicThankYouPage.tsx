import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'

const cards = [
  { title: 'מה קורה עכשיו', text: 'נציג מטעם המוקד יבדוק את הפרטים ויעדכן את המשך הטיפול.' },
  { title: 'זמן טיפול משוער', text: 'בדרך כלל בדיקה ראשונית מתבצעת בהקדם בהתאם לדחיפות הבקשה.' },
  { title: 'איך עוקבים אחר הבקשה', text: 'ניתן להיכנס למסך בדיקת סטטוס ולהזין מספר בקשה או טלפון.' }
]

export function PublicThankYouPage() {
  return <PublicShell><section className="public-page-head public-centered-head"><p className="public-eyebrow">המשך טיפול</p><h1>הבקשה התקבלה לבדיקה</h1><p>הפרטים נקלטו במערכת הציבורית. בשלב הבא נציג מטעם המוקד יבדוק את הבקשה וימשיך את הטיפול.</p></section><section className="public-section-grid">{cards.map(card => <article className="public-card" key={card.title}><h2>{card.title}</h2><p>{card.text}</p></article>)}</section><section className="public-form-card public-compact-card"><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הראשי</Link><Link to="/public/status" className="public-btn public-btn-primary">בדיקת סטטוס בקשה</Link></div></section></PublicShell>
}
