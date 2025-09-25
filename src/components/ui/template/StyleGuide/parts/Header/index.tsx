import SubHeading from '../../base/SubHeading';
import SubSubHeading from '../../base/SubSubHeading';
import styles from './styles.module.css';

export default function Header() {
  return (
    <>
      <SubHeading>Header</SubHeading>
      <SubSubHeading>Logo</SubSubHeading>
      <p className={styles.logo}>deMenezes</p>
      <SubSubHeading>Menu link</SubSubHeading>
      <p className={styles.menuLink}>Home</p>
      <p className={styles.menuLink}>Sobre</p>
      <p className={styles.menuLink}>Contato</p>
      <p className={styles.menuLink}>Referèncias</p>
    </>
  );
}
