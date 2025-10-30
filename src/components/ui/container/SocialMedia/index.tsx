import settings from '@/data/settings.json';
import { clsx } from '../../../../utils/clsx';
import Icon from '../../base/Icon';
import { IconName } from '../../base/Icon/types';
import Link from '../../base/Link';
import style from './styles.module.css';
import fontStyle from '../../../../../styles/font-style.module.css';

export default function SocialMedia({
  isCenter = true,
}: {
  isCenter?: boolean;
}) {
  const socialElements = settings.socialMedia.map(socialMedia => (
    <li className={style.socialItem} key={socialMedia.title}>
      <Link
        className={style.socialMediaLink}
        href={socialMedia.url}
        aria-label={`Acessar o ${socialMedia.title} do autor do blog`}
        isExternal
      >
        {/* não gostei desse "as IconName", corrigir isso */}
        <Icon name={socialMedia.title as IconName} />
        <span
          className={clsx(style.socialMediaLabel, fontStyle.socialMediaLabel)}
        >
          {socialMedia.title}
        </span>
      </Link>
    </li>
  ));

  return (
    <nav
      className={clsx(style.socialMediaWrapper, { [style.isCenter]: isCenter })}
    >
      <ul className={style.socialMediaList}>{socialElements}</ul>
    </nav>
  );
}
