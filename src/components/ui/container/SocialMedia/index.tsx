import Link from '@/components/ui/base/Link';
import settings from '@/data/settings.json';
import type { IconType } from 'react-icons';
import { BiLogoDevTo } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import style from './styles.module.css';

export default function SocialMedia() {
  const socialMediaMap: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter,
    medium: FaMedium,
    devto: BiLogoDevTo,
  };

  const socialElements = settings.socialMedia.map(socialMedia => {
    const Icon = socialMediaMap[socialMedia.title];

    return (
      <li className={style.socialMediaItem} key={socialMedia.title}>
        <Link
          className={style.socialMediaLink}
          href={socialMedia.url}
          aria-label={`Acessar o ${socialMedia.title} do autor de André Menezes`}
          isExternal
        >
          {Icon && (
            <Icon
              size={24}
              color={'var(--color-neutral-900)'}
              className={style.socialMediaIcon}
            />
          )}
          <span className={style.socialMediaLabel}>{socialMedia.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className={style.socialMediaList}>{socialElements}</ul>
    </nav>
  );
}
