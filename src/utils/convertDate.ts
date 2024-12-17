/**
 * Se pá esse arquivo é descartável
 * dá pra fazer isso com js puro
 */

export function convertDate(rawDateTime: string) {
  if (!rawDateTime.includes('T')) return ''

  const rawDate = rawDateTime.split('T')[0]

  if (!rawDate.includes('-')) return ''

  const [ year = '', month = '', day = '' ] = rawDate.split('-')
  return `${ day }/${ month }/${ year }`
}
