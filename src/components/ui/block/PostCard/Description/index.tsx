import { clsx } from '../../../../../utils/clsx';
import style from './styles.module.css';
import fontStyle from '../../../../../../styles/font-style.module.css';

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
        fontStyle.postCardDescription,
        { [style.isCompact]: isCompact }
      )}
    >
      {description}
    </p>
  );
}
