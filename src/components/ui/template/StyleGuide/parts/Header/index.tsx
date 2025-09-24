import SubHeading from '../../base/SubHeading';
import styles from './styles.module.css';

export default function Header() {
  return (
    <>
      <SubHeading>Logo</SubHeading>
      <p className={styles.logo}>deMenezes</p>
    </>
  );
}
