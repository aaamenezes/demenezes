import fontStyle from '@/../styles/fontStyle.module.css';
import Link from '@/components/ui/base/Link';
import { PostSummaryProps } from '@/types';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function PostCardHeader({
  post,
  isHero = false,
  isCompact = false,
}: {
  post: PostSummaryProps;
  isHero?: boolean;
  isCompact?: boolean;
}) {
  const { category, slug, title } = post;

  return (
    <header>
      {isHero && <p className={fontStyle.postCategoryText}>{category}</p>}
      <h3
        className={clsx({
          [style.isHero]: isHero,
          [style.isCompact]: isCompact,
        })}
      >
        <Link
          className={clsx(style.postCardTitleLink, fontStyle.postCardTitle)}
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </h3>
    </header>
  );
}
