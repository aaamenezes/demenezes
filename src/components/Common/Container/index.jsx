import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: ${ ({ theme }) => `${ theme.breakpoints.xxl }px` };
  padding-left: 5%;
  padding-right: 5%;
  margin-left: auto;
  margin-right: auto;
`

export default Container
