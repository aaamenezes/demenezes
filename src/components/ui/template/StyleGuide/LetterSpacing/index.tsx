import Wrapper from '../../../container/Wrapper';
import SubHeading from '../base/SubHeading';
import SubSubHeading from '../base/SubSubHeading';
import styles from './styles.module.css';

export default function LetterSpacing() {
  return (
    <Wrapper width="full">
      <SubHeading>Letter-spacing</SubHeading>
      <SubSubHeading>letterSpacingXxxs</SubSubHeading>
      <p className={styles.letterSpacingXxxs}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingXxs</SubSubHeading>
      <p className={styles.letterSpacingXxs}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingXs (base)</SubSubHeading>
      <p className={styles.letterSpacingXs}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingSm</SubSubHeading>
      <p className={styles.letterSpacingSm}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingMd</SubSubHeading>
      <p className={styles.letterSpacingMd}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingLg</SubSubHeading>
      <p className={styles.letterSpacingLg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingXl</SubSubHeading>
      <p className={styles.letterSpacingXl}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingXxl</SubSubHeading>
      <p className={styles.letterSpacingXxl}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>letterSpacingXxxl</SubSubHeading>
      <p className={styles.letterSpacingXxxl}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
    </Wrapper>
  );
}
