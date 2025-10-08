import { clsx } from '../../../../../utils/clsx';
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
      className={clsx(
        style.postCardDescriptionWrapper,
        'postCardDescription',
        isCompact && style.isCompact
      )}
    >
      {description}
    </p>
  );
}
