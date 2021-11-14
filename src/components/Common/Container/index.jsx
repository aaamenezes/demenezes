import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: ${ ({ theme, maxWidth }) => (
    `${ theme.breakpoints[maxWidth] }px` || '2000px'
  ) };
  padding-left: 5%;
  padding-right: 5%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

export default Container
