import { theme } from '../theme'

export function getWidth(breakpoint) {
  return `${ theme.breakpoints[breakpoint] }px`
}
