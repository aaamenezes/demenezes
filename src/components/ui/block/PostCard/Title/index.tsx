import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import { usePostCardContext } from '../context';
import styles from './styles.module.css';
import type { TitleProps } from './types';

function Title({ children }: TitleProps) {
  const { isHero, slug } = usePostCardContext();

  return (
    <Text
      size="lg"
      letterSpacing="sm"
      as="strong"
      family="heading"
      weight={700}
      className={styles.title}
    >
      <Link
        className={clsx(styles.link, isHero && styles.isHero)}
        href={`/posts/${slug}`}
      >
        {children}
      </Link>
    </Text>
  );
}

Title.displayName = 'PostCard.Title';

export default Title;
