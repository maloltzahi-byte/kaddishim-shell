import { TopNav } from './TopNav'

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="app-wrap"><section className="shell"><TopNav />{children}</section></main>
}
