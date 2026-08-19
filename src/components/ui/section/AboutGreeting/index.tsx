import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import HiddenA11Y from '@/components/ui/base/HiddenA11Y';
import Wrapper from '@/components/ui/container/Wrapper';
import NextImage from 'next/image';
import style from './styles.module.css';

export default function Greeting({
  greetingTitle,
  greetingSubtitle,
  greetingDescription,
  profileImage,
}: {
  greetingTitle: string;
  greetingSubtitle: string;
  greetingDescription: string;
  profileImage: {
    alt: string;
    responsiveImage: {
      src: string;
    };
    width: number;
    height: number;
  };
}) {
  const {
    alt,
    width,
    height,
    responsiveImage: { src },
  } = profileImage;

  return (
    <Wrapper className={style.greeting} width="lg">
      <div className={style.imageWrapper}>
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
        <HiddenA11Y>{greetingTitle}</HiddenA11Y>
      </Heading>
      <Heading>{greetingSubtitle}</Heading>
      <Text lineHeight="md" className={style.greetingDescription}>
        {greetingDescription}
      </Text>
    </Wrapper>
  );
}
