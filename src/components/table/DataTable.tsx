import { Badge, type BadgeTone } from '../primitives/Badge'

export type CallsRow = {
  callId: string
  city: string
  time: string
  required: string
  missing: string
  confirmed: string
  status: string
  urgency: string
  updated: string
}

const columns = ['מס׳ קריאה', 'עיר', 'שעה', 'נדרשים', 'חסרים', 'אישרו', 'סטטוס', 'דחיפות', 'עדכון אחרון']

function statusTone(status: string): BadgeTone {
  if (status === 'הושלמה') return 'success'
  if (status === 'בטיפול') return 'warning'
  return 'neutral'
}

function urgencyTone(urgency: string): BadgeTone {
  if (urgency === 'גבוהה') return 'danger'
  if (urgency === 'רגילה') return 'warning'
  return 'success'
}

export function DataTable({ rows }: { rows: CallsRow[] }) {
  return <div className="table-wrap"><table className="data-table"><thead><tr>{columns.map(col => <th key={col}>{col}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row.callId}><td>{row.callId}</td><td>{row.city}</td><td>{row.time}</td><td>{row.required}</td><td>{row.missing}</td><td>{row.confirmed}</td><td><Badge tone={statusTone(row.status)}>{row.status}</Badge></td><td><Badge tone={urgencyTone(row.urgency)}>{row.urgency}</Badge></td><td>{row.updated}</td></tr>)}</tbody></table></div>
}
