import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

export default function PostCardDescription({
  description,
  isCompact,
}: {
  description: string;
  isCompact: boolean;
}) {
  return (
    <p
      className={clsx(style.postCardDescription, {
        [style.isCompact]: isCompact,
      })}
    >
      {description}
    </p>
  );
}
