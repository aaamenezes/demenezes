import settings from '../../../../../settings.json';
import { clsx } from '../../../../utils/clsx';
import Icon from '../../base/Icon';
import { IconName } from '../../base/Icon/types';
import LinkButton from '../../base/LinkButton';
import S from './styles.module.css';

export default function SocialMedia({
  isCenter = true,
}: {
  isCenter?: boolean;
}) {
  const socialElements = settings.socialMedia.map(socialMedia => (
    <li className={S.socialItem} key={socialMedia.title}>
      <LinkButton
        className={S.socialLink}
        href={socialMedia.url}
        aria-label={`Acessar o ${socialMedia.title} do autor do blog`}
        external
      >
        {/* não gostei desse "as IconName", corrigir isso */}
        <Icon name={socialMedia.title as IconName} />
        <span className={S.socialLabel}>{socialMedia.title}</span>
      </LinkButton>
    </li>
  ));

  return (
    <nav className={clsx(S.socialMediaWrapper, isCenter && S.isCenter)}>
      <ul className={S.socialList}>{socialElements}</ul>
    </nav>
  );
}
