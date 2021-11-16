import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import { getWidth } from '../../../utils/getWidth'

const Container = styled.div`
  width: min(95vw, ${ ({ maxWidth }) => getWidth(maxWidth || 'lg') });
  padding-right: max(${ getGutter(3) }, min(5%, ${ getGutter(24) }));
  padding-left: max(${ getGutter(3) }, min(5%, ${ getGutter(24) }));
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;

  &:not(:last-child) {
    margin-bottom: max(40px, min(5vw, 160px));
  }
`

export default Container
