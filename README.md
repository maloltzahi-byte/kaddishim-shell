# Kaddishim Shell

React + Vite + TypeScript visual shell for the Kaddishim management system.

## Canonical source

The canonical source of truth is the React application under `src/`.

`visual-preview/` is deprecated and must not be used as a source of truth.

## Run

```bash
npm install
npm run build
npm run dev
```

## Live URL

StackBlitz:

https://stackblitz.com/github/maloltzahi-byte/kaddishim-shell

## Sprint status

Dashboard: Visual Locked — V1.0.0

Sprint 1: Calls List Screen — Passed
Route: /calls

Sprint 2: Kaddish Requests Screen — Passed
Route: /kaddish-requests

Sprint 3: Volunteers Screen — Passed
Route: /volunteers

Sprint 4: Members Screen — Passed
Route: /members

Sprint 5: Reports Screen — Passed
Route: /reports

Sprint 6: Settings Screen — Passed
Route: /settings

Sprint 7: Structural Refactor — Passed
Scope: App.tsx cleanup, layout extraction, Dashboard extraction, Calls extraction.

Sprint 8: Call Details Screen — Passed
Route: /calls/:callId
Test Route: /calls/M-2025-0548

Sprint 9: Kaddish Request Details Screen — Passed
Route: /kaddish-requests/:requestId
Test Route: /kaddish-requests/K-2025-0321

Sprint 10: Volunteer Details Screen — Passed
Route: /volunteers/:volunteerId
Test Route: /volunteers/V-2025-0142

Sprint 11: Member Details Screen — Passed
Route: /members/:memberId
Test Route: /members/C-2025-1284

Sprint 12: List-to-Details Navigation — Passed
Scope: connect primary list view buttons to details routes.

Sprint 13: New Call Screen — QA Pending
Route: /calls/new
Scope: static visual shell for creating a new minyan call.
Status: live in StackBlitz, pending Architect QA.

Sprint 14: New Kaddish Request Screen — QA Pending
Route: /kaddish-requests/new
Scope: static visual shell for creating a new kaddish request.
Status: live in StackBlitz, pending Architect QA.

Sprint 15: New Volunteer Screen — QA Pending
Route: /volunteers/new
Scope: static visual shell for creating a new volunteer.
Status: live in StackBlitz, pending Architect QA.

Sprint 16: New Member Screen — QA Pending
Route: /members/new
Scope: static visual shell for creating a new member.
Status: live in StackBlitz, pending Architect QA.
