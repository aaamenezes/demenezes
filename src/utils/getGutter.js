import { gutterMultiplier } from '../settings'

function formatValue(value) {
  const stringValue = (value).toString()
  const isPercent = stringValue.includes('%')
  const isAuto = stringValue.includes('auto')
  if (isPercent || isAuto) return value
  return `${ value * gutterMultiplier }px`
}

export function getGutter(...args) {
  const validValues = args.slice(0, 4)
  const formattedValues = validValues.map(formatValue)
  return formattedValues.join(' ')
}
