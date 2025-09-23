import Wrapper from '../../container/Wrapper';
import FontFamily from './FontFamily';
import FontSize from './FontSize';
import FontWeight from './FontWeight';
import LetterSpacing from './LetterSpacing';
import LineHeight from './LineHeight';
import Heading from './base/Heading';

export default function StyleGuideScreen() {
  return (
    <Wrapper width="lg">
      <Heading>Style Guide</Heading>
      <hr />
      <FontFamily />
      <hr />
      <FontSize />
      <hr />
      <FontWeight
        heading="Font-weight Family body"
        family="--font-family-body"
      />
      <hr />
      <FontWeight
        heading="Font-weight Family heading"
        family="--font-family-heading"
      />
      <hr />
      <LetterSpacing />
      <hr />
      <LineHeight />
    </Wrapper>
  );
}
