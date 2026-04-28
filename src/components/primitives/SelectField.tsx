import { Icon } from '../shared/Icon'

export function SelectField({ value }: { value: string }) {
  return <button className="select-field"><span>{value}</span><Icon name="chevron" size={14} /></button>
}
