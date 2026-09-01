import Link from '@/components/ui/base/Link';
import Text from '@/components/ui/base/Text';
import settings from '@/data/settings.json';
import type { IconType } from 'react-icons';
import { BiLogoDevTo } from 'react-icons/bi';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './styles.module.css';
import type { SocialMediaProps } from './types';

export default function SocialMedia({ inverseColor }: SocialMediaProps) {
  const socialMediaMap: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter,
    medium: FaMedium,
    devto: BiLogoDevTo,
    instagram: FaInstagram,
  };

  const socialElements = settings.socialMedia.map(socialMedia => {
    const Icon = socialMediaMap[socialMedia.name];
    const color = inverseColor
      ? 'var(--color-neutral-100)'
      : (socialMedia.color ?? 'var(--color-neutral-900)');

    return (
      <li className={styles.socialMediaItem} key={socialMedia.name}>
        <Link
          className={styles.socialMediaLink}
          href={socialMedia.url}
          aria-label={`Acessar o ${socialMedia.name} do autor de André Menezes`}
          isExternal
        >
          {Icon && (
            <Icon size={24} color={color} className={styles.socialMediaIcon} />
          )}
          <Text
            as="span"
            family="heading"
            size="xxs"
            weight={500}
            className={styles.socialMediaLabel}
          >
            {socialMedia.name}
          </Text>
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className={styles.socialMediaList}>{socialElements}</ul>
    </nav>
  );
}
