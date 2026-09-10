import styles from './styles.module.css';
import type { FigcaptionProps } from './types';

function Figcaption({ children }: FigcaptionProps) {
  return <figcaption className={styles.figcaption}>{children}</figcaption>;
}

Figcaption.displayName = 'Figure.Figcaption';

export default Figcaption;
