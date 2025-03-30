export function clsx(...classes: (string | false)[]) {
  return classes
    .filter(className => typeof className === 'string')
    .map(className => className.trim())
    .filter(className => className.length > 0)
    .join(' ')
    .replace(/\s+/g, ' '); // remove extra spaces
}
