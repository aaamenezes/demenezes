import { PostSummaryProps } from '../../../../../types';
import { clsx } from '../../../../../utils/clsx';
import LinkButton from '../../../base/LinkButton';
import S from './styles.module.css';

export default function PostCardHeader({
  post,
  isHero = false,
  isCompact,
}: {
  post: PostSummaryProps;
  isHero?: boolean;
  isCompact: boolean;
}) {
  const { category, slug, title } = post;

  return (
    <header>
      {isHero && <p className={S.categoryText}>{category}</p>}
      <h3
        className={clsx(
          S.postCardTitle,
          isHero && S.isHero,
          isCompact && S.isCompact
        )}
      >
        <LinkButton className={S.postCardTitleLink} href={`/posts/${slug}`}>
          {title}
        </LinkButton>
      </h3>
    </header>
  );
}
