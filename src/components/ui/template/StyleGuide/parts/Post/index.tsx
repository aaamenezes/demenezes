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
      <p className={styles.postDescription}>
        Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário. Aprenda como fazer
        lazyload de forma rápida e fácil para melhorar a performance do seu site
        e a experiência do usuário.
      </p>
      <SubSubHeading>Post date</SubSubHeading>
      <p className={styles.postDate}>01/01/2023</p>
      <SubSubHeading>Post label</SubSubHeading>
      <p className={styles.postLabel}>Front-end</p>
      <SubSubHeading>Post tag</SubSubHeading>
      <p className={styles.postTag}>#javascript</p>
      <SubSubHeading>Post h2</SubSubHeading>
      <p className={styles.postH2}>
        Como fazer tal coisa como fazer tal coisa como fazer tal coisa
      </p>
      <SubSubHeading>Post h3</SubSubHeading>
      <p className={styles.postH3}>
        Como fazer tal coisa como fazer tal coisa como fazer tal coisa
      </p>
      <SubSubHeading>Post h4</SubSubHeading>
      <p className={styles.postH4}>
        Como fazer tal coisa como fazer tal coisa como fazer tal coisa
      </p>
      <SubSubHeading>Post h5</SubSubHeading>
      <p className={styles.postH5}>
        Como fazer tal coisa como fazer tal coisa como fazer tal coisa
      </p>
      <SubSubHeading>Post h6</SubSubHeading>
      <p className={styles.postH6}>
        Como fazer tal coisa como fazer tal coisa como fazer tal coisa
      </p>
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
      <SubSubHeading>Post code</SubSubHeading>
      <pre>
        <code className={styles.postCode}>
          {`const divs = document.getElementsByTagName('div');
// ou...
const divs = document.querySelector('div');

for (const div of divs) {
  console.log(div);
}

// todas as divs do site serão jogadas no console uma a uma`}
        </code>
      </pre>
      <SubSubHeading>Post quote cite</SubSubHeading>
      <p className={styles.postQuoteCite}>
        {`"Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário."`}
      </p>
      <p className={styles.postQuoteCite}>
        {`"Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário."`}
      </p>
      <p className={styles.postQuoteCite}>
        {`"Aprenda como fazer lazyload de forma rápida e fácil para melhorar a
        performance do seu site e a experiência do usuário."`}
      </p>
      <SubSubHeading>Post quote author</SubSubHeading>
      <p className={styles.postQuoteAuthor}>Fulano de tal</p>
    </>
  );
}
