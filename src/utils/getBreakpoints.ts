import { css } from 'styled-components'
import { theme } from '../theme'

const { breakpoints } = theme

export default function getBreakpoints(cssByBreakpoints: Partial<Record<keyof typeof breakpoints, any[]>>) {
  /**
   * o type assertion abaixo foi a solução menor pior
   * as [PageName, PageProps][]
   * acontece erro de typo pq é chato typar dados do json importado
   * e o object.entries transforma a key do objeto em string
   * e deixa de ser PageName
   * talvez se isso vir do cms e typar o retorno do request melhore
   * e assim possa remover esse type assertion
   */
  const breakpointsNames = Object.keys(cssByBreakpoints) as (keyof typeof cssByBreakpoints)[]

  return breakpointsNames.map(breakpointName => css`
    @media screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]}
    }
  `)
}
