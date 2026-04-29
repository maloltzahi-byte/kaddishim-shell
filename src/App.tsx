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
import { HomePage } from './pages/public/HomePage'
import { LoginPage } from './pages/public/LoginPage'
import { MinyanRequestPage } from './pages/public/MinyanRequestPage'
import { PartnersPage } from './pages/public/PartnersPage'
import { PublicHomePage } from './pages/public/PublicHomePage'
import { PublicKaddishRequestPage } from './pages/public/PublicKaddishRequestPage'
import { PublicVolunteerJoinPage } from './pages/public/PublicVolunteerJoinPage'
import { PublicDonationsPage } from './pages/public/PublicDonationsPage'
import { PublicThankYouPage } from './pages/public/PublicThankYouPage'
import { PublicStatusPage } from './pages/public/PublicStatusPage'

const shell = (page: React.ReactNode) => <PageShell>{page}</PageShell>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/kaddish" element={<PublicKaddishRequestPage />} />
        <Route path="/minyan" element={<MinyanRequestPage />} />
        <Route path="/volunteer" element={<PublicVolunteerJoinPage />} />
        <Route path="/donate" element={<PublicDonationsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/status" element={<PublicStatusPage />} />
        <Route path="/thank-you" element={<PublicThankYouPage />} />
        <Route path="/public" element={<PublicHomePage />} />
        <Route path="/public/kaddish-request" element={<PublicKaddishRequestPage />} />
        <Route path="/public/minyan-request" element={<MinyanRequestPage />} />
        <Route path="/public/volunteer-join" element={<PublicVolunteerJoinPage />} />
        <Route path="/public/donations" element={<PublicDonationsPage />} />
        <Route path="/public/thank-you" element={<PublicThankYouPage />} />
        <Route path="/public/status" element={<PublicStatusPage />} />
        <Route path="/calls" element={<CallsList />} />
        <Route path="/calls/new" element={shell(<NewCallPage />)} />
        <Route path="/calls/:callId" element={shell(<CallDetailsPage />)} />
        <Route path="/kaddish-requests" element={shell(<KaddishRequestsList />)} />
        <Route path="/kaddish-requests/new" element={shell(<NewKaddishRequestPage />)} />
        <Route path="/kaddish-requests/:requestId" element={shell(<KaddishRequestDetailsPage />)} />
        <Route path="/volunteers" element={shell(<VolunteersList />)} />
        <Route path="/volunteers/new" element={shell(<NewVolunteerPage />)} />
        <Route path="/volunteers/:volunteerId" element={shell(<VolunteerDetailsPage />)} />
        <Route path="/members" element={shell(<MembersList />} />
        <Route path="/members/new" element={shell(<NewMemberPage />)} />
        <Route path="/members/:memberId" element={shell(<MemberDetailsPage />)} />
        <Route path="/reports" element={shell(<ReportsPage />)} />
        <Route path="/settings" element={shell(<SettingsPage />)} />
      </Routes>
    </BrowserRouter>
  )
}
