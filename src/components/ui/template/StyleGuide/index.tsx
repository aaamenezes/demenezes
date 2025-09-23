import Wrapper from '../../container/Wrapper';
import FontFamily from './FontFamily';
import FontSize from './FontSize';
import FontWeight from './FontWeight';
import LetterSpacing from './LetterSpacing';
import LineHeight from './LineHeight';
import styles from './base/styles.module.css';

export default function StyleGuideScreen() {
  return (
    <Wrapper width="lg">
      <h1 className={styles.heading}>Style Guide</h1>
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
