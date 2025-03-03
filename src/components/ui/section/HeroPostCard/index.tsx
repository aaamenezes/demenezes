import { CSSProperties } from 'react';
import { PostSummaryProps } from '../../../../types';
import PostCardInfos from '../../block/PostCard/Infos';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function HeroPostCard({ post }: { post: PostSummaryProps }) {
  const { src } = post.thumbnail.responsiveImage;

  return (
    <div style={{ '--background-image': src } as CSSProperties}>
      <Wrapper className={S.heroWrapper} width="full">
        <Wrapper className={S.heroInner} width="xxxl" spacing={0} isFluid>
          <PostCardInfos post={post} isHero />
        </Wrapper>
      </Wrapper>
    </div>
  );
}
