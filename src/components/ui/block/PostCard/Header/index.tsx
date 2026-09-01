import Heading from '@/components/ui/base/Heading';
import Link from '@/components/ui/base/Link';
import { clsx } from '@/utils/clsx';
import PostCategory from '../../PostCategory';
import style from './styles.module.css';
import type { PostCardHeaderProps } from './types';

export default function PostCardHeader({ post, isHero }: PostCardHeaderProps) {
  const { category, slug, title } = post;

  return (
    <header>
      {isHero && <PostCategory>{category}</PostCategory>}
      <Heading
        level={3}
        size="lg"
        letterSpacing="sm"
        className={style.postCardHeading}
      >
        <Link
          className={clsx(style.postCardHeadingLink, isHero && style.isHero)}
          href={`/posts/${slug}`}
        >
          {title}
        </Link>
      </Heading>
    </header>
  );
}
