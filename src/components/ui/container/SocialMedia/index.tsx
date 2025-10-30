import fontStyle from '@/../styles/fontStyles.module.css';
import Icon from '@/components/ui/base/Icon';
import type { IconName } from '@/components/ui/base/Icon/types';
import Link from '@/components/ui/base/Link';
import settings from '@/data/settings.json';
import { clsx } from '@/utils/clsx';
import style from './styles.module.css';

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
