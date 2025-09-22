import Wrapper from '../../container/Wrapper';
import FontSize from './FontSize';
import LineHeight from './LineHeight';
import styles from './base/styles.module.css';

export default function StyleGuideScreen() {
  return (
    <Wrapper width="lg">
      <h1 className={styles.heading}>Style Guide</h1>
      <FontSize />
      <hr />
      <LineHeight />
      <hr />
      fontweight letterspacing
    </Wrapper>
  );
}
