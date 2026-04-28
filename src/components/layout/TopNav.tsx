import { Link, useLocation } from 'react-router-dom'
import { LogoBlock } from './LogoBlock'

const navItems = [
  { label: 'דשבורד ראשי', to: '/' },
  { label: 'קריאות מניין', to: '/calls' },
  { label: 'בקשות קדיש', to: '/kaddish-requests' },
  { label: 'מתנדבים', to: '/volunteers' },
  { label: 'חברים', to: '/members' },
  { label: 'דוחות', to: '/reports' },
  { label: 'הגדרות', to: '/settings' }
]

function isActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function TopNav() {
  const location = useLocation()
  return <header className="top"><LogoBlock /><nav className="nav">{navItems.map(item => <Link className={isActive(location.pathname, item.to) ? 'active' : ''} key={item.label} to={item.to}>{item.label}</Link>)}<span className="q">?</span></nav></header>
}
