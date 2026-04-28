import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell'
import { Dashboard } from './pages/Dashboard'
import { CallsList } from './pages/CallsList'
import { CallDetailsPage } from './pages/CallDetailsPage'
import { NewCallPage } from './pages/NewCallPage'
import { KaddishRequestsList } from './pages/KaddishRequestsList'
import { KaddishRequestDetailsPage } from './pages/KaddishRequestDetailsPage'
import { NewKaddishRequestPage } from './pages/NewKaddishRequestPage'
import { VolunteersList } from './pages/VolunteersList'
import { VolunteerDetailsPage } from './pages/VolunteerDetailsPage'
import { NewVolunteerPage } from './pages/NewVolunteerPage'
import { MembersList } from './pages/MembersList'
import { MemberDetailsPage } from './pages/MemberDetailsPage'
import { NewMemberPage } from './pages/NewMemberPage'
import { ReportsPage } from './pages/ReportsPage'
import { SettingsPage } from './pages/SettingsPage'

const shell = (page: React.ReactNode) => <PageShell>{page}</PageShell>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calls" element={<CallsList />} />
        <Route path="/calls/new" element={shell(<NewCallPage />)} />
        <Route path="/calls/:callId" element={shell(<CallDetailsPage />)} />
        <Route path="/kaddish-requests" element={shell(<KaddishRequestsList />)} />
        <Route path="/kaddish-requests/new" element={shell(<NewKaddishRequestPage />)} />
        <Route path="/kaddish-requests/:requestId" element={shell(<KaddishRequestDetailsPage />)} />
        <Route path="/volunteers" element={shell(<VolunteersList />)} />
        <Route path="/volunteers/new" element={shell(<NewVolunteerPage />)} />
        <Route path="/volunteers/:volunteerId" element={shell(<VolunteerDetailsPage />)} />
        <Route path="/members" element={shell(<MembersList />)} />
        <Route path="/members/new" element={shell(<NewMemberPage />)} />
        <Route path="/members/:memberId" element={shell(<MemberDetailsPage />)} />
        <Route path="/reports" element={shell(<ReportsPage />)} />
        <Route path="/settings" element={shell(<SettingsPage />)} />
      </Routes>
    </BrowserRouter>
  )
}
