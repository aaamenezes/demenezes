import styled from 'styled-components'
import { getGutter } from '../../../utils/getGutter'
import { getWidth } from '../../../utils/getWidth'

export const containerPadding = (
  `max(${ getGutter(3) }, min(5%, ${ getGutter(24) }))`
)

const Container = styled.div`
  width: ${
  ({ fullWidth, maxWidth }) => fullWidth
    ? `min(100%, ${ getWidth('xxx') });`
    : `min(95vw, ${ getWidth(maxWidth || 'lg') })`
};
  padding-right: ${ containerPadding };
  padding-left: ${ containerPadding };
  margin-left: auto;
  margin-right: auto;
  margin-bottom: max(${ getGutter(20) }, min(8vw, ${ getGutter(40) }));
  /* border: 1px solid; */

  /* &:not(:last-child) {
    margin-bottom: max(${ getGutter(20) }, min(8vw, ${ getGutter(40) }));
  } */
`

export default Container
