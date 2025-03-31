import NextImage from 'next/image';
import HiddenA11Y from '../../base/HiddenA11Y';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

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
    <Wrapper className={S.greeting} width="lg">
      <div className={S.imageWrapper}>
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
      <h1>
        <HiddenA11Y>{greetingTitle}</HiddenA11Y>
      </h1>
      <h2 className={S.greetingTitle}>{greetingSubtitle}</h2>
      <p className={S.greetingText}>{greetingDescription}</p>
    </Wrapper>
  );
}
