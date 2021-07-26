const storageKey = 'careRecipientState'

export function SaveCareRecipient(id: string) {
  localStorage.setItem(storageKey, JSON.stringify(id))
}

export function GetCareRecipient() {
  const value = localStorage.getItem(storageKey)
  if (value) return JSON.parse(value)
}

export function RemoveCareRecipient() {
  localStorage.removeItem(storageKey)
}
