import { clsx } from '../../../../../utils/clsx';
import S from './styles.module.css';

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
        S.postCardDescriptionWrapper,
        'postCardDescription',
        isCompact && S.isCompact
      )}
    >
      {description}
    </p>
  );
}
