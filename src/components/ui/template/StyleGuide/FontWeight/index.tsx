import Wrapper from '../../../container/Wrapper';
import SubHeading from '../base/SubHeading';
import SubSubHeading from '../base/SubSubHeading';
import styles from './styles.module.css';

export default function FontWeight() {
  return (
    <Wrapper width="full">
      <SubHeading>Font-weight</SubHeading>
      <SubSubHeading>fontWeightThin</SubSubHeading>
      <p className={styles.fontWeightThin}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightExtralight</SubSubHeading>
      <p className={styles.fontWeightExtralight}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightLight</SubSubHeading>
      <p className={styles.fontWeightLight}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightRegular</SubSubHeading>
      <p className={styles.fontWeightRegular}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightMedium</SubSubHeading>
      <p className={styles.fontWeightMedium}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightSemibold</SubSubHeading>
      <p className={styles.fontWeightSemibold}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightBold (base)</SubSubHeading>
      <p className={styles.fontWeightBold}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightExtrabold</SubSubHeading>
      <p className={styles.fontWeightExtrabold}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightBlack</SubSubHeading>
      <p className={styles.fontWeightBlack}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
    </Wrapper>
  );
}
