import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell'
import { Dashboard } from './pages/Dashboard'
import { CallsList } from './pages/CallsList'
import { CallDetailsPage } from './pages/CallDetailsPage'
import { NewCallPage } from './pages/NewCallPage'
import { KaddishRequestsList } from './pages/KaddishRequestsList'
import { KaddishRequestDetailsPage } from './pages/KaddishRequestDetailsPage'
import { VolunteersList } from './pages/VolunteersList'
import { VolunteerDetailsPage } from './pages/VolunteerDetailsPage'
import { MembersList } from './pages/MembersList'
import { MemberDetailsPage } from './pages/MemberDetailsPage'
import { ReportsPage } from './pages/ReportsPage'
import { SettingsPage } from './pages/SettingsPage'

function KaddishRequestsPage() {
  return <PageShell><KaddishRequestsList /></PageShell>
}

function KaddishRequestDetailsPageRoute() {
  return <PageShell><KaddishRequestDetailsPage /></PageShell>
}

function VolunteersPage() {
  return <PageShell><VolunteersList /></PageShell>
}

function VolunteerDetailsPageRoute() {
  return <PageShell><VolunteerDetailsPage /></PageShell>
}

function MembersPage() {
  return <PageShell><MembersList /></PageShell>
}

function MemberDetailsPageRoute() {
  return <PageShell><MemberDetailsPage /></PageShell>
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

function NewCallPageRoute() {
  return <PageShell><NewCallPage /></PageShell>
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Dashboard />} /><Route path="/calls" element={<CallsList />} /><Route path="/calls/new" element={<NewCallPageRoute />} /><Route path="/calls/:callId" element={<CallDetailsPageRoute />} /><Route path="/kaddish-requests" element={<KaddishRequestsPage />} /><Route path="/kaddish-requests/:requestId" element={<KaddishRequestDetailsPageRoute />} /><Route path="/volunteers" element={<VolunteersPage />} /><Route path="/volunteers/:volunteerId" element={<VolunteerDetailsPageRoute />} /><Route path="/members" element={<MembersPage />} /><Route path="/members/:memberId" element={<MemberDetailsPageRoute />} /><Route path="/reports" element={<ReportsPageRoute />} /><Route path="/settings" element={<SettingsPageRoute />} /></Routes></BrowserRouter>
}
