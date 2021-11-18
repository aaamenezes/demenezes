import { theme } from '../theme'

export function getWidth(breakpoint) {
  return theme.breakpoints[breakpoint]
    ? `${ theme.breakpoints[breakpoint] }px`
    : 0
}
