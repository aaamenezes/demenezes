import Wrapper from '@/components/ui/container/Wrapper';
import { clsx } from '@/utils/clsx';
import type { PostCardContextValue } from '../types';
import styles from './styles.module.css';
import type { PostCardProps } from './types';
import { PostCardContext } from '../context';

function Root({ children, category, slug, isCompact, isHero }: PostCardProps) {
  const contextValue: PostCardContextValue = {
    category,
    slug,
    isCompact,
    isHero,
  };

  return (
    <PostCardContext.Provider value={contextValue}>
      <Wrapper
        className={clsx(styles.wrapper, isCompact && styles.isCompact)}
        width="xl"
      >
        {children}
      </Wrapper>
    </PostCardContext.Provider>
  );
}

Root.displayName = 'PostCard';

export default Root;
