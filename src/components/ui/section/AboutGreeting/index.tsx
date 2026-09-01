import Heading from '@/components/ui/base/Heading';
import HiddenA11Y from '@/components/ui/base/HiddenA11Y';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import NextImage from 'next/image';
import styles from './styles.module.css';
import type { AboutGreetingProps } from './types';

export default function Greeting({
  greetingHeading,
  greetingSubheading,
  greetingDescription,
  profileImage,
}: AboutGreetingProps) {
  const {
    alt,
    width,
    height,
    responsiveImage: { src },
  } = profileImage;

  return (
    <Wrapper className={styles.greeting} width="lg">
      <div className={styles.imageWrapper}>
        <NextImage
          src={src}
          alt={alt}
          sizes="(max-width: 767px) 100vw,
                 (max-width: 1199px) 50vw,
                                     33vw"
          width={width}
          height={height}
        />
      </div>
      <Heading level={1}>
        <HiddenA11Y>{greetingHeading}</HiddenA11Y>
      </Heading>
      <Heading>{greetingSubheading}</Heading>
      <Text lineHeight="md" className={styles.greetingDescription}>
        {greetingDescription}
      </Text>
    </Wrapper>
  );
}
