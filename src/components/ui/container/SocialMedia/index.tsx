import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import settings from '@/data/settings.json';
import type { IconType } from 'react-icons';
import { BiLogoDevTo } from 'react-icons/bi';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import style from './styles.module.css';

export default function SocialMedia({
  inverseColor = false,
}: {
  inverseColor?: boolean;
}) {
  const socialMediaMap: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter,
    medium: FaMedium,
    devto: BiLogoDevTo,
    instagram: FaInstagram,
  };

  const socialElements = settings.socialMedia.map(socialMedia => {
    const Icon = socialMediaMap[socialMedia.title];
    const color = inverseColor
      ? 'var(--color-neutral-100)'
      : (socialMedia.color ?? 'var(--color-neutral-900)');

    return (
      <li className={style.socialMediaItem} key={socialMedia.title}>
        <Link
          className={style.socialMediaLink}
          href={socialMedia.url}
          aria-label={`Acessar o ${socialMedia.title} do autor de André Menezes`}
          isExternal
        >
          {Icon && (
            <Icon size={24} color={color} className={style.socialMediaIcon} />
          )}
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            className={style.socialMediaLabel}
          >
            {socialMedia.title}
          </Text>
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
