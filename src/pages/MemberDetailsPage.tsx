import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/primitives/Button'
import { Badge, type BadgeTone } from '../components/primitives/Badge'
import { DataTable, type Column } from '../components/table/DataTable'
import { dataAdapter } from '../lib/dataAdapter'
import { supabaseReadAdapter } from '../lib/supabaseReadAdapter'
import type { MemberRecord } from '../types/entities'

type MemberActivityRow = Record<string, React.ReactNode> & { date: string; activityType: string; description: string; status: string }

const membershipDetails = [
  { label: 'סוג חברות', value: 'קבוע' },
  { label: 'תאריך הצטרפות', value: '12/01/2026' },
  { label: 'פעילות החודש', value: '8' },
  { label: 'בקשות קשורות', value: '3' },
  { label: 'מצב אימות', value: 'מאומת' }
]

const systemRelations = [
  { label: 'בקשות קדיש', value: '2' },
  { label: 'קריאות מניין', value: '1' },
  { label: 'תרומות', value: '1' },
  { label: 'מתנדבים מקושרים', value: '0' },
  { label: 'עדכון אחרון', value: 'לפני 6 דק׳' }
]

const recentActivity: MemberActivityRow[] = [
  { date: '28/04/2026', activityType: 'בקשת קדיש', description: 'בקשת קדיש עבור יעקב בן משה', status: 'פעילה' },
  { date: '27/04/2026', activityType: 'עדכון פרטים', description: 'עודכנו פרטי קשר', status: 'הושלם' },
  { date: '26/04/2026', activityType: 'תרומה', description: 'תרומה חד פעמית', status: 'הושלם' },
  { date: '25/04/2026', activityType: 'קריאת מניין', description: 'השתתפות בקריאת מניין', status: 'הושלם' },
  { date: '24/04/2026', activityType: 'אימות', description: 'אימות פרטי חבר', status: 'הושלם' }
]

const treatmentTimeline = [
  '08:10 — החבר נכנס למערכת',
  '08:18 — עודכנו פרטי קשר',
  '08:26 — נפתחה בקשת קדיש חדשה',
  '08:32 — הבקשה שויכה לפרופיל החבר'
]

function badgeTone(value: string): BadgeTone {
  if (['פעיל', 'קבוע', 'מאומת', 'הושלם'].includes(value)) return 'success'
  return 'neutral'
}

const activityColumns: Column<MemberActivityRow>[] = [
  { key: 'date', label: 'תאריך' },
  { key: 'activityType', label: 'סוג פעילות' },
  { key: 'description', label: 'תיאור' },
  { key: 'status', label: 'סטטוס', render: row => <Badge tone={badgeTone(String(row.status))}>{row.status}</Badge> },
  { key: 'actions', label: 'פעולות', render: () => <button className="table-action">צפייה</button> }
]

function MemberStats({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return <div className="calls-stats">{rows.map(item => <article className="calls-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
}

function DetailsPanel({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return <section className="report-panel"><h2>{title}</h2><div className="report-metric-list">{rows.map(row => <div className="report-metric-row" key={row.label}><span>{row.label}</span>{['סטטוס', 'סוג חברות', 'מצב אימות'].includes(row.label) ? <Badge tone={badgeTone(row.value)}>{row.value}</Badge> : <strong>{row.value}</strong>}</div>)}</div></section>
}

function HeaderActions() {
  return <div className="details-actions"><Link to="/members" className="details-back-link">חזרה לחברים</Link><Button>עריכת פרטים</Button><Button variant="outline">פתיחת בקשה</Button></div>
}

function TreatmentTimeline() {
  return <section className="reports-table-section details-timeline"><h2>יומן טיפול</h2><div className="timeline-list">{treatmentTimeline.map(item => <div className="timeline-item" key={item}><span />{item}</div>)}</div></section>
}

export function MemberDetailsPage() {
  const { memberId } = useParams()
  const fallbackMember = dataAdapter.members.findById(memberId || '') || dataAdapter.members.findById('C-2025-1284')
  const [member, setMember] = useState<MemberRecord | undefined>(fallbackMember)

  useEffect(() => {
    let isMounted = true

    async function loadMember() {
      if (!memberId) return
      try {
        const row = await supabaseReadAdapter.members.findById(memberId)
        if (isMounted && row) setMember(row)
      } catch {
        if (isMounted) setMember(fallbackMember)
      }
    }

    void loadMember()

    return () => {
      isMounted = false
    }
  }, [memberId, fallbackMember])

  if (!member) return <div className="content calls-content"><div className="title calls-title"><h1>הפריט לא נמצא</h1></div></div>
  const memberStats = [{ label: 'סטטוס', value: member.status }, { label: 'סוג חברות', value: member.membershipType }, { label: 'פעילות החודש', value: '8' }, { label: 'בקשות קשורות', value: '3' }]
  const memberDetails = [{ label: 'שם מלא', value: member.fullName }, { label: 'מס׳ חבר', value: member.memberId }, { label: 'עיר', value: member.city }, { label: 'טלפון', value: member.phone }, { label: 'אימייל', value: member.email }, { label: 'סטטוס', value: member.status }]
  return <div className="content calls-content"><div className="title calls-title"><h1>חבר {member.memberId}</h1><p>ניהול פרטי החבר, פעילות קהילתית, קשרים ובקשות</p></div><section className="calls-panel"><HeaderActions /><MemberStats rows={memberStats} /><div className="reports-grid"><DetailsPanel title="פרטי חבר" rows={memberDetails} /><DetailsPanel title="פרטי חברות" rows={membershipDetails} /><DetailsPanel title="קשרים במערכת" rows={systemRelations} /></div><section className="reports-table-section"><h2>פעילות אחרונה</h2><DataTable columns={activityColumns} rows={recentActivity} /></section><TreatmentTimeline /></section></div>
}
