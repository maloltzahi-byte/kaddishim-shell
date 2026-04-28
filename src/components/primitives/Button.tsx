export function Button({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }) {
  return <button className={`btn btn-${variant}`}>{children}</button>
}
