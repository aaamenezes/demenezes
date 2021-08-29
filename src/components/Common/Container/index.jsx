import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 2000px;
  padding-left: ${ ({ padding }) => padding || '5%' };
  padding-right: ${ ({ padding }) => padding || '5%' };
  margin-left: auto;
  margin-right: auto;
`

export default Container
