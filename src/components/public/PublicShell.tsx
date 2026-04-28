import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const publicNav = [
  { label: 'דף הבית', to: '/public' },
  { label: 'בקשת קדיש', to: '/public/kaddish-request' },
  { label: 'קריאת מניין', to: '/public/minyan-request' },
  { label: 'התנדבות', to: '/public/volunteer-join' },
  { label: 'סטטוס', to: '/public/status' },
  { label: 'תרומות', to: '/public/donations' }
]

function isActive(pathname: string, to: string) {
  return pathname === to
}

export function PublicShell({ children }: { children: ReactNode }) {
  const location = useLocation()
  return <main className="public-shell"><header className="public-header"><Link to="/public" className="public-logo"><span className="public-logo-mark">♢</span><strong>קדישים</strong><small>כבוד. מעקב. אחריות.</small></Link><nav className="public-nav">{publicNav.map(item => <Link key={item.to} to={item.to} className={isActive(location.pathname, item.to) ? 'active' : ''}>{item.label}</Link>)}</nav><Link to="/public/kaddish-request" className="public-header-cta">פתיחת בקשה</Link></header>{children}<footer className="public-footer"><span>קדישים</span><span>*6484</span><span>info@kaddishim.org.il</span><span>www.kaddishim.org.il</span></footer></main>
}
