import Link from '@/components/ui/base/Link';
import type { PostSummaryProps } from '@/types';
import { clsx } from '@/utils/clsx';
import PostCategory from '../../PostCategory';
import style from './styles.module.css';

export default function PostCardHeader({
  post,
  isHero = false,
}: {
  post: PostSummaryProps;
  isHero?: boolean;
}) {
  const { category, slug, title } = post;

  return (
    <header>
      {isHero && <PostCategory>{category}</PostCategory>}
      <h3 className={style.postCardTitle}>
        <Link
          className={clsx(style.postCardTitleLink, {
            [style.isHero]: isHero,
          })}
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </h3>
    </header>
  );
}
