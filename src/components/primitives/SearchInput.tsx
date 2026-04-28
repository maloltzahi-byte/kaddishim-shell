import { Icon } from '../shared/Icon'

export function SearchInput({ placeholder = 'חיפוש לפי מספר או עיר' }: { placeholder?: string }) {
  return <label className="search-input"><Icon name="search" size={15} /><input placeholder={placeholder} /></label>
}
