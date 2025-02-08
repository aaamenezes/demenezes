import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { PostSummaryProps } from '../../types';
import getBreakpoints from '../../utils/getBreakpoints';
import Label from '../base/Label';
import LinkButton from '../base/LinkButton';
import Container from './Container';
import PostCardInfos from './PostCardInfos';

const PostCardWrapper = styled.article<{
  isCompact: boolean;
}>`
  ${({ theme, isCompact }) =>
    getBreakpoints({
      xs: css`
        display: flex;
        flex-direction: column;
        padding: ${isCompact ? '1rem' : '1rem'};
        transition: box-shadow ${theme.transition.fast};
        box-shadow: 0 0 2rem -1rem ${theme.color.neutral_800};
      `,
      sm: css`
        padding: ${isCompact ? '1rem' : '2rem'};
      `,
      md: css`
        flex-direction: ${isCompact ? 'column' : 'row'};
        justify-content: ${isCompact ? 'flex-start' : 'space-between'};
        padding: ${isCompact ? '1rem' : '3rem'};
        box-shadow: none;

        &:hover {
          box-shadow: 0 0 2rem -1rem ${theme.color.neutral_800};
        }
      `,
      lg: css`
        padding: ${isCompact ? '1rem' : '4rem'};
      `,
    })}
`;

const PostCardImageWrapper = styled.div<{
  isCompact: boolean;
}>`
  ${({ isCompact }) =>
    getBreakpoints({
      xs: css`
        position: relative;
        width: 100%;
        margin-bottom: 1rem;
      `,
      md: css`
        width: ${isCompact ? '100%' : '35%'};
        margin-bottom: ${isCompact ? '1rem' : '0'};
        overflow: hidden;
      `,
    })}
`;

const PostCardImageLink = styled(LinkButton)`
  position: relative;
`;

export default function PostCard({
  post,
  isCompact = false,
  spacing = 7,
}: {
  post: PostSummaryProps;
  isCompact?: boolean;
  spacing?: number;
}) {
  const { title, slug, thumbnail, category } = post;
  const { width, height } = thumbnail;
  const { src } = thumbnail.responsiveImage;

  return (
    <Container
      as={PostCardWrapper}
      width="xl"
      spacing={spacing || 7}
      isCompact={isCompact}
    >
      <PostCardImageWrapper isCompact={isCompact} aria-hidden="true">
        <PostCardImageLink href={`/posts/${slug}`} tab-index="-1">
          <NextImage
            src={src}
            alt={`Imagem de capa do post: ${title}`}
            width={width}
            height={height}
            sizes="(max-width: 767px) 100vw, 30vw"
            style={{
              aspectRatio: '4 / 3',
              objectFit: 'cover',
            }}
          />
          <Label>{category}</Label>
        </PostCardImageLink>
      </PostCardImageWrapper>
      <PostCardInfos post={post} isCompact={isCompact} />
    </Container>
  );
}
