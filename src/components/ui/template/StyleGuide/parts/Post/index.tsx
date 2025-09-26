import SubHeading from '../../base/SubHeading';
import SubSubHeading from '../../base/SubSubHeading';
import styles from './styles.module.css';

export default function Post() {
  return (
    <>
      <SubHeading>Post</SubHeading>
      <SubSubHeading>Post title</SubSubHeading>
      <p className={styles.postTitle}>Como fazer lazyload performático</p>
      <SubSubHeading>Post description</SubSubHeading>
      <SubSubHeading>Post date</SubSubHeading>
      <SubSubHeading>Post label</SubSubHeading>
      <SubSubHeading>Post tag</SubSubHeading>
      <SubSubHeading>Post body</SubSubHeading>
      <p className={styles.postBody}>
        Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário.
      </p>
      <p className={styles.postBody}>
        Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário.
      </p>
      <p className={styles.postBody}>
        Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário.
      </p>
    </>
  );
}
