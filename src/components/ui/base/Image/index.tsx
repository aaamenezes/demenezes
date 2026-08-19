import NextImage from 'next/image';
import { clsx } from '../../../../utils/clsx';
import style from './styles.module.css';
import type { ImageProps } from './types';

export default function Image({
  src,
  width,
  height,
  alt,
  title,
  className,
}: ImageProps) {
  return (
    <figure className={className}>
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
        <figcaption className={clsx(style.figcaption)}>{title}</figcaption>
      )}
    </figure>
  );
}
