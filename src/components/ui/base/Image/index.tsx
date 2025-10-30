import NextImage from 'next/image';
import fontStyle from '../../../../../styles/font-style.module.css';
import { clsx } from '../../../../utils/clsx';
import style from './styles.module.css';

export default function Image({
  src,
  width,
  height,
  alt,
  title,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
}) {
  return (
    <figure>
      <NextImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes="(max-width: 1599px) 100vw, 50vw"
        style={{
          maxWidth: '100%',
          margin: '0 auto',
        }}
      />
      {title && (
        <figcaption
          className={clsx(style.figcaption, fontStyle.postFigcaption)}
        >
          {title}
        </figcaption>
      )}
    </figure>
  );
}
