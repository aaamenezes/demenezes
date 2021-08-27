export function convertDate(rawDateTime) {
  const rawDate = rawDateTime.split('T')[0]
  const [ year, month, day ] = rawDate.split('-')
  return `${ day }/${ month }/${ year }`
}
