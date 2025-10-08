import { PostSummaryProps } from '../../../../../types';
import { clsx } from '../../../../../utils/clsx';
import Link from '../../../base/Link';
import style from './styles.module.css';

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
      {isHero && <p className="postCategoryText">{category}</p>}
      <h3
        className={clsx(
          style.postCardTitle,
          isHero && style.isHero,
          isCompact && style.isCompact
        )}
      >
        <Link
          className={clsx(style.postCardTitleLink, 'postCardTitle')}
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </h3>
    </header>
  );
}
