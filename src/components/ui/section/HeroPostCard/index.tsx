import { CSSProperties } from 'react';
import { PostSummaryProps } from '../../../../types';
import PostCardInfos from '../../block/PostCard/Infos';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function HeroPostCard({ post }: { post: PostSummaryProps }) {
  const { src } = post.thumbnail.responsiveImage;

  return (
    <div
      className={S.heroWrapper}
      style={
        {
          '--background-image-xs': `url(${src}&w=425)`,
          '--background-image-sm': `url(${src}&w=768)`,
          '--background-image-md': `url(${src}&w=992)`,
          '--background-image-lg': `url(${src}&w=1200)`,
          '--background-image-xl': `url(${src}&w=1600)`,
          '--background-image-xxl': `url(${src}&w=2600)`,
        } as CSSProperties
      }
    >
      <Wrapper width="full">
        <Wrapper className={S.heroInner} width="xxxl" spacing={0} isFluid>
          <PostCardInfos post={post} isHero />
        </Wrapper>
      </Wrapper>
    </div>
  );
}
