import SubHeading from '../../base/SubHeading';
import SubSubHeading from '../../base/SubSubHeading';
import styles from './styles.module.css';

export default function Header() {
  return (
    <>
      <SubHeading>Header</SubHeading>
      <SubSubHeading>Logo</SubSubHeading>
      <p className={styles.logo}>deMenezes</p>
    </>
  );
}
