import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const publicNav = [
  { label: 'דף הבית', to: '/', legacyTo: '/public' },
  { label: 'בקשת קדיש', to: '/kaddish', legacyTo: '/public/kaddish-request' },
  { label: 'בקשת מניין', to: '/minyan', legacyTo: '/public/minyan-request' },
  { label: 'מתנדבים', to: '/volunteer', legacyTo: '/public/volunteer-join' },
  { label: 'תרומות', to: '/donate', legacyTo: '/public/donations' },
  { label: 'שותפים', to: '/partners' },
  { label: 'איתור בקשה', to: '/status', legacyTo: '/public/status' }
]

function isActive(pathname: string, to: string, legacyTo?: string) {
  return pathname === to || pathname === legacyTo
}

export function PublicShell({ children }: { children: ReactNode }) {
  const location = useLocation()
  return <main className="public-shell"><header className="public-header"><Link to="/" className="public-logo"><span className="public-logo-mark">♢</span><span><strong>קדישים</strong><small>כבוד. מעקב. אחריות.</small></span></Link><nav className="public-nav">{publicNav.map(item => <Link key={item.to} to={item.to} className={isActive(location.pathname, item.to, item.legacyTo) ? 'active' : ''}>{item.label}</Link>)}</nav><Link to="/kaddish" className="public-header-cta">פתיחת בקשה</Link></header>{children}<footer className="public-footer"><section><h2>קדישים</h2><p>שירות לתיאום בקשות קדיש, מניינים ומתנדבים.</p></section><nav>{publicNav.slice(0, 6).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav></footer></main>
}
