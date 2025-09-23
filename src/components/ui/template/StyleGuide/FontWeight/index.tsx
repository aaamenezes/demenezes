import Wrapper from '../../../container/Wrapper';
import SubHeading from '../base/SubHeading';
import SubSubHeading from '../base/SubSubHeading';
import styles from './styles.module.css';

export default function FontWeight({
  heading,
  family,
}: {
  heading: string;
  family: string;
}) {
  return (
    <Wrapper width="full">
      <SubHeading>{heading}</SubHeading>
      <SubSubHeading>fontWeightThin</SubSubHeading>
      <p
        className={styles.fontWeightThin}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightExtralight</SubSubHeading>
      <p
        className={styles.fontWeightExtralight}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightLight</SubSubHeading>
      <p
        className={styles.fontWeightLight}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightRegular (base)</SubSubHeading>
      <p
        className={styles.fontWeightRegular}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightMedium</SubSubHeading>
      <p
        className={styles.fontWeightMedium}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightSemibold</SubSubHeading>
      <p
        className={styles.fontWeightSemibold}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightBold</SubSubHeading>
      <p
        className={styles.fontWeightBold}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightExtrabold</SubSubHeading>
      <p
        className={styles.fontWeightExtrabold}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
      <SubSubHeading>fontWeightBlack</SubSubHeading>
      <p
        className={styles.fontWeightBlack}
        style={{ '--font-family': `var(${family})` } as React.CSSProperties}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        eum adipisci totam ut, natus at, saepe earum consequatur doloremque,
        dicta doloribus nam explicabo iste nostrum reprehenderit non modi eius
        laudantium.
      </p>
    </Wrapper>
  );
}
