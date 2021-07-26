export function getEventTypeText(eventType: string) {
  return eventType.replace(new RegExp('_', 'g'), ' ').toUpperCase()
}
