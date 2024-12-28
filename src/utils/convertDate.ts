export function convertDate(rawDateTime: string) {
  if (!rawDateTime.includes('T')) return ''

  const rawDate = rawDateTime.split('T')[0]

  if (!rawDate.includes('-')) return ''

  const [year = '', month = '', day = ''] = rawDate.split('-')
  return `${day}/${month}/${year}`
}
