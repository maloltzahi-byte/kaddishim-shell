import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PublicShell } from '../../components/public/PublicShell'
import { supabaseReadAdapter } from '../../lib/supabaseReadAdapter'
import type { KaddishRequestRecord } from '../../types/entities'

const fallbackStatus = {
  title: 'סטטוס לדוגמה: הבקשה בבדיקת מוקד',
  currentStep: 'שלב נוכחי: אימות פרטים',
  nextAction: 'פעולה הבאה: שיבוץ מתנדב'
}

function buildStatus(request: KaddishRequestRecord | undefined) {
  if (!request) return fallbackStatus
  return {
    title: `סטטוס בקשה ${request.requestId}: ${request.status}`,
    currentStep: `שלב נוכחי: ${request.volunteer === 'טרם הוקצה' ? 'איתור מתנדב' : 'שיבוץ מתנדב'}`,
    nextAction: `פעולה הבאה: ${request.status === 'הושלמה' ? 'סגירת טיפול' : 'המשך מעקב מוקד'}`
  }
}

export function PublicStatusPage() {
  const [status, setStatus] = useState(fallbackStatus)

  useEffect(() => {
    let isMounted = true

    async function loadStatus() {
      try {
        const request = await supabaseReadAdapter.kaddishRequests.findById('K-2025-0321')
        if (isMounted) setStatus(buildStatus(request))
      } catch {
        if (isMounted) setStatus(fallbackStatus)
      }
    }

    void loadStatus()

    return () => {
      isMounted = false
    }
  }, [])

  return <PublicShell><section className="public-page-head"><h1>בדיקת סטטוס בקשה</h1><p>הזינו מספר בקשה או מספר טלפון לצורך בדיקת סטטוס ראשונית.</p></section><section className="public-form-card"><div className="public-form-grid public-form-grid-two"><label className="public-field"><span>מספר בקשה</span><input placeholder="K-2025-0321" readOnly /></label><label className="public-field"><span>טלפון</span><input placeholder="050-1234567" readOnly /></label></div><article className="public-result-card"><h2>{status.title}</h2><p>{status.currentStep}</p><p>{status.nextAction}</p></article><div className="public-actions public-actions-end"><Link to="/public" className="public-btn public-btn-outline">חזרה לדף הציבורי</Link><Link to="/public/status" className="public-btn public-btn-primary">בדיקת סטטוס</Link></div></section></PublicShell>
}
