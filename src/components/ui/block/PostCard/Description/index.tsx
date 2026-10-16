import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import { usePostCardContext } from '../context';
import styles from './styles.module.css';
import type { DescriptionProps } from './types';

function Description({ children }: DescriptionProps) {
  const { isCompact } = usePostCardContext();

  return (
    <Text
      className={clsx(
        styles.postCardDescription,
        isCompact && styles.isCompact
      )}
    >
      {children}
    </Text>
  );
}

Description.displayName = 'PostCard.Description';

export default Description;
