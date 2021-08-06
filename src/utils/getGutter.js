export function getGutter(...args) {
  const validValues = args.slice(0, 4)
  const multiplier = 4
  const formatedValues = validValues.map(value => {
    const stringValue = (value).toString()
    const isPercent = stringValue.indexOf('%') !== -1
    const isAuto = stringValue.indexOf('auto') !== -1
    if (isPercent || isAuto) return value
    return `${ value * multiplier }px`
  })
  return formatedValues.join(' ')
}
