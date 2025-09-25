import SubHeading from '../../base/SubHeading';
import SubSubHeading from '../../base/SubSubHeading';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <>
      <SubHeading>Footer</SubHeading>
      <SubSubHeading>Logo</SubSubHeading>
      <p>Logo já existe no componente header</p>
      <SubSubHeading>Social Media Label</SubSubHeading>
      <p className={styles.socialMediaLabel}>github</p>
      <p className={styles.socialMediaLabel}>linkedin</p>
      <p className={styles.socialMediaLabel}>twitter</p>
      <p className={styles.socialMediaLabel}>medium</p>
      <p className={styles.socialMediaLabel}>dev.to</p>
    </>
  );
}
