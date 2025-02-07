import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import getBreakpoints from '../../../utils/getBreakpoints';

const Figcaption = styled.figcaption`
  ${getBreakpoints({
    xs: css`
      width: fit-content;
      padding: 1rem 1rem;
      margin: 1rem auto 0;
      line-height: ${theme.lineHeight.h4};
      font-size: ${theme.fontSize.small};
      background-color: ${theme.color.neutral_300};
    `,
    sm: css`
      padding: 1rem 1.5rem;
    `,
    md: css`
      padding: 1rem 2rem;
    `,
    lg: css`
      padding: 1rem 2.5rem;
    `,
  })}
`;

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
      {title && <Figcaption>{title}</Figcaption>}
    </figure>
  );
}
