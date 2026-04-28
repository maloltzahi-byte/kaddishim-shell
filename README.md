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
Approval Date: 28/04/2026
Approved By: Architect QA Overlay
Cosmetic Punch List: 4 items deferred to Final Polish sprint

Sprint 1: Calls List Screen — Passed
Route: /calls
Approval Date: 28/04/2026
Approved By: Architect QA
Status: functional visual screen approved; cosmetic refinements deferred to Final Polish.

Sprint 2: Kaddish Requests Screen — implemented, pending live screenshot QA
Route: /kaddish-requests
Scope: reused DataTable generic component, shared filter structure, KPI row, hardcoded kaddish request data, action column and bottom activity summary.
