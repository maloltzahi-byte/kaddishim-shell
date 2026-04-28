import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell'
import { Dashboard } from './pages/Dashboard'
import { CallsList } from './pages/CallsList'
import { CallDetailsPage } from './pages/CallDetailsPage'
import { KaddishRequestsList } from './pages/KaddishRequestsList'
import { VolunteersList } from './pages/VolunteersList'
import { MembersList } from './pages/MembersList'
import { ReportsPage } from './pages/ReportsPage'
import { SettingsPage } from './pages/SettingsPage'

function KaddishRequestsPage() {
  return <PageShell><KaddishRequestsList /></PageShell>
}

function VolunteersPage() {
  return <PageShell><VolunteersList /></PageShell>
}

function MembersPage() {
  return <PageShell><MembersList /></PageShell>
}

function ReportsPageRoute() {
  return <PageShell><ReportsPage /></PageShell>
}

function SettingsPageRoute() {
  return <PageShell><SettingsPage /></PageShell>
}

function CallDetailsPageRoute() {
  return <PageShell><CallDetailsPage /></PageShell>
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Dashboard />} /><Route path="/calls" element={<CallsList />} /><Route path="/calls/:callId" element={<CallDetailsPageRoute />} /><Route path="/kaddish-requests" element={<KaddishRequestsPage />} /><Route path="/volunteers" element={<VolunteersPage />} /><Route path="/members" element={<MembersPage />} /><Route path="/reports" element={<ReportsPageRoute />} /><Route path="/settings" element={<SettingsPageRoute />} /></Routes></BrowserRouter>
}
