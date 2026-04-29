import { Link } from 'react-router-dom'
import { Icon, type IconName } from '../../components/shared/Icon'

type HomeWorkCard = {
  icon: IconName
  title: string
  text: string
  to: string
  action: string
}

const workCards: HomeWorkCard[] = [
  {
    icon: 'users',
    title: 'בקשת מניין',
    text: 'פתיחת קריאה מהירה להשלמת מניין במקום ובשעה הנדרשים.',
    to: '/minyan',
    action: 'לבקשת מניין'
  },
  {
    icon: 'flame',
    title: 'בקשת קדיש',
    text: 'סיוע מסודר באמירת קדיש לעילוי נשמה, בארץ ובעולם.',
    to: '/kaddish',
    action: 'לבקשת קדיש'
  },
  {
    icon: 'user',
    title: 'מתנדבים',
    text: 'הצטרפות למעגל חסד של אנשים שנענים לקריאות בזמן אמת.',
    to: '/volunteer',
    action: 'להצטרפות'
  },
  {
    icon: 'home',
    title: 'תרומות',
    text: 'תמיכה בפעילות המערכת ובמשפחות הזקוקות לליווי מכבד.',
    to: '/donate',
    action: 'לתרומות'
  }
]

const activityStats = [
  { value: '175', label: 'ערים וישובים' },
  { value: '8,967', label: 'מתנדבים פעילים' },
  { value: '23,516', label: 'קדישים שנאמרו' },
  { value: '12,842', label: 'מניינים שתואמו' }
]

export function HomePage() {
  return (
    <main className="public-home" dir="rtl">
      <header className="home-header" aria-label="ניווט ראשי">
        <Link to="/" className="home-logo" aria-label="קדישים - דף הבית">
          <span className="home-logo-mark">◇</span>
          <span>
            <strong>קדישים</strong>
            <small>כבוד. אמת. יחד.</small>
          </span>
        </Link>
        <nav className="home-nav">
          <Link to="/">דף הבית</Link>
          <Link to="/minyan">בקשת מניין</Link>
          <Link to="/kaddish">בקשת קדיש</Link>
          <Link to="/volunteer">מתנדבים</Link>
          <Link to="/donate">תרומות</Link>
          <Link to="/partners">שותפים</Link>
          <Link to="/status">איתור בקשה</Link>
        </nav>
        <Link to="/login" className="home-login">
          כניסה
        </Link>
      </header>

      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="home-kicker">מערכת קדישים</p>
          <h1 id="home-title">אף יהודי אינו לבדו.</h1>
          <p>
            קדישים, מניינים ותמיכה אנושית זמינים בכל מקום, ברגעים שבהם משפחה
            צריכה שקט, סדר וליווי אמין.
          </p>
          <div className="home-hero-actions" aria-label="פעולות מרכזיות">
            <Link to="/kaddish" className="home-btn home-btn-gold">
              בקשת קדיש
            </Link>
            <Link to="/minyan" className="home-btn home-btn-navy">
              בקשת מניין
            </Link>
          </div>
        </div>
        <div className="home-hero-media" aria-hidden="true" />
      </section>

      <section className="home-work" aria-labelledby="work-title">
        <h2 id="work-title">מה אנחנו עושים</h2>
        <div className="home-card-grid">
          {workCards.map((card) => (
            <article className="home-work-card" key={card.title}>
              <span className="home-card-icon">
                <Icon name={card.icon} size={28} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.to}>{card.action}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-activity" aria-label="המערכת בפעולה">
        <h2>המערכת בפעולה</h2>
        <div className="home-stat-grid">
          {activityStats.map((stat) => (
            <article className="home-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <strong>קדישים</strong>
        <span>*6484</span>
        <span>info@kaddishim.org.il</span>
        <span>www.kaddishim.org.il</span>
      </footer>
    </main>
  )
}
