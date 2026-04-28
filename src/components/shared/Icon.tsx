export type IconName = 'clock' | 'users' | 'mail' | 'bell' | 'clipboard' | 'home' | 'flame' | 'alert' | 'file' | 'plus' | 'search' | 'user' | 'info' | 'chevron'

export function Icon({ name, size = 22, className = '' }: { name: IconName; size?: number; className?: string }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className }
  switch (name) {
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    case 'users': return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    case 'mail': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    case 'bell': return <svg {...common}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    case 'clipboard': return <svg {...common}><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
    case 'home': return <svg {...common}><path d="M3 21V9l9-7 9 7v12"/><path d="M9 21V12h6v9"/></svg>
    case 'flame': return <svg {...common}><path d="M12 2C16.5 7.5 19 11.5 19 15.2A7 7 0 0 1 5 15.2C5 11.5 7.5 7.5 12 2Z"/><path d="M12 9c1.9 3.1 2.8 4.9 2.8 6.5a2.8 2.8 0 0 1-5.6 0C9.2 13.9 10.1 12.1 12 9Z"/></svg>
    case 'alert': return <svg {...common}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    case 'file': return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    case 'plus': return <svg {...common}><path d="M12 5v14"/><path d="M5 12h14"/></svg>
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    case 'user': return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
    case 'info': return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    case 'chevron': return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>
  }
}
