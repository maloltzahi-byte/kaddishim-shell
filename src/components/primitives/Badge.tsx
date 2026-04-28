export type BadgeTone = 'success' | 'warning' | 'danger' | 'neutral'

export function Badge({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}
