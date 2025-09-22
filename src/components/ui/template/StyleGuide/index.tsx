import Wrapper from '../../container/Wrapper';
import FontSize from './FontSize';
import FontWeight from './FontWeight';
import styles from './styles.module.css';

export default function StyleGuideScreen() {
  return (
    <Wrapper width="lg">
      <h1 className={styles.heading}>Style Guide</h1>
      <FontSize />
      <hr />
      <FontWeight />
      <hr />
      lineheight letterspacing
    </Wrapper>
  );
}
