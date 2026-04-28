import type { ReactNode } from 'react'

export type Column<T> = {
  key: keyof T | string
  label: string
  render?: (row: T) => ReactNode
}

export function DataTable<T extends Record<string, ReactNode>>({ columns, rows }: { columns: Column<T>[]; rows: T[] }) {
  return <div className="table-wrap"><table className="data-table"><thead><tr>{columns.map(col => <th key={String(col.key)}>{col.label}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={String(row.id ?? row.callId ?? row.requestId ?? index)}>{columns.map(col => <td key={String(col.key)}>{col.render ? col.render(row) : row[col.key as keyof T]}</td>)}</tr>)}</tbody></table></div>
}
