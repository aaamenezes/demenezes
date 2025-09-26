import SubHeading from '../../base/SubHeading';
import SubSubHeading from '../../base/SubSubHeading';
import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <SubHeading>Home/Listing</SubHeading>
      <SubSubHeading>Post card label</SubSubHeading>
      <p className={styles.postCardLabel}>Front-end</p>
      <SubSubHeading>Post card header</SubSubHeading>
      <p className={styles.postCardHeader}>Como fazer lazyload performático</p>
      <SubSubHeading>Post card description</SubSubHeading>
      <p className={styles.postCardDescription}>
        Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário. Aprenda como fazer
        lazyload de forma rápida e fácil para melhorar a performance do seu site
        e a experiência do usuário.
      </p>
      <SubSubHeading>Post card date</SubSubHeading>
      <p className={styles.postCardDate}>20 de agosto de 2023</p>
      <SubSubHeading>Newsletter form header</SubSubHeading>
      <p className={styles.newsletterFormHeader}>
        Inscreva-se na nossa newsletter
      </p>
      <SubSubHeading>Newsletter form input</SubSubHeading>
      <p className={styles.newsletterFormInput}>Digite seu e-mail</p>
    </>
  );
}
