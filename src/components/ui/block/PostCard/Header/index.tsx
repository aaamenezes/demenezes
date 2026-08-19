import Heading from '@/components/ui/base/Heading';
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
      <Heading
        level={3}
        size="lg"
        letterSpacing="sm"
        className={style.postCardTitle}
      >
        <Link
          className={clsx(style.postCardTitleLink, {
            [style.isHero]: isHero,
          })}
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </Heading>
    </header>
  );
}
