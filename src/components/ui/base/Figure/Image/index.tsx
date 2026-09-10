import NextImage from 'next/image';
import type { ImageProps } from './types';

function Image({ src, width, height, alt, className }: ImageProps) {
  return (
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
      className={className}
    />
  );
}

Image.displayName = 'Figure.Image';

export default Image;
