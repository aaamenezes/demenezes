import Wrapper from '../../../container/Wrapper';
import SubHeading from '../base/SubHeading';
import SubSubHeading from '../base/SubSubHeading';
import styles from './styles.module.css';

export default function FontFamily() {
  return (
    <Wrapper width="full">
      <SubHeading>Font-family</SubHeading>
      <SubSubHeading>fontFamilyHeading</SubSubHeading>
      <p className={styles.fontFamilyHeading}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontFamilyBody</SubSubHeading>
      <p className={styles.fontFamilyBody}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontFamilyMono</SubSubHeading>
      <p className={styles.fontFamilyMono}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
    </Wrapper>
  );
}
