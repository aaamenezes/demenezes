import Wrapper from '../../container/Wrapper';
import FontFamily from './FontStyle/FontFamily';
import FontSize from './FontStyle/FontSize';
import FontWeight from './FontStyle/FontWeight';
import LetterSpacing from './FontStyle/LetterSpacing';
import LineHeight from './FontStyle/LineHeight';
import Heading from './base/Heading';
import Footer from './parts/Footer';
import Header from './parts/Header';
import Home from './parts/Home';
import Post from './parts/Post';

export default function StyleGuideScreen() {
  return (
    <Wrapper width="lg">
      <details open>
        <summary>
          <Heading>Casos de uso</Heading>
        </summary>
        <Wrapper width="full">
          <Header />
          <Footer />
          <Home />
          <Post />
        </Wrapper>
      </details>

      <hr />
      <hr />
      <hr />
      <details>
        <summary>
          <Heading>Style Guide</Heading>
        </summary>
        <Wrapper width="full">
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
          <FontWeight
            heading="Font-weight Family mono"
            family="--font-family-mono"
          />
          <hr />
          <LetterSpacing />
          <hr />
          <LineHeight />
        </Wrapper>
      </details>
    </Wrapper>
  );
}
