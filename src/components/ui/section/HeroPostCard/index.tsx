import PostCardInfos from '@/components/ui/block/PostCard/Infos';
import Wrapper from '@/components/ui/container/Wrapper';
import type { PostSummaryProps } from '@/types';
import type { CSSProperties } from 'react';
import style from './styles.module.css';

export default function HeroPostCard({ post }: { post: PostSummaryProps }) {
  const { src } = post.thumbnail.responsiveImage;

  const separator = src.includes('?') ? '&' : '?';

  return (
    <div
      className={style.heroWrapper}
      style={
        {
          '--background-image-xs': `url(${src}${separator}w=425)`,
          '--background-image-sm': `url(${src}${separator}w=768)`,
          '--background-image-md': `url(${src}${separator}w=992)`,
          '--background-image-lg': `url(${src}${separator}w=1200)`,
          '--background-image-xl': `url(${src}${separator}w=1600)`,
          '--background-image-xxl': `url(${src}${separator}w=2600)`,
        } as CSSProperties
      }
    >
      <Wrapper className={style.heroInner} width="xxxl">
        <PostCardInfos post={post} isHero />
      </Wrapper>
    </div>
  );
}
