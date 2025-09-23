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
      <FontWeight />
      <hr />
      <LetterSpacing />
      <hr />
      <LineHeight />
    </Wrapper>
  );
}
