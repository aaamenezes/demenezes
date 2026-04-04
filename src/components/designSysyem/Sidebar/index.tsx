import Link from '@/components/ui/base/Link';
import { clsx } from '@/utils/clsx';
import { getDesignSystemValidPaths } from '@/utils/getDesignSystemValidPaths';
import { useRouter } from 'next/router';
import Section from '../Section';
import styles from './styles.module.css';

export default function Sidebar() {
  const designSystemValidPaths = getDesignSystemValidPaths();
  const router = useRouter();

  const sideBarContent = designSystemValidPaths.map(
    ({ level, componentName }) => {
      const href = `/components/${level}/${componentName}/`;
      const isComponentActive = router.asPath === href;

      return (
        <li key={`${level}-${componentName}`}>
          <Link
            href={href}
            className={clsx({ [styles.isLinkActive]: isComponentActive })}
          >
            {componentName}
          </Link>
        </li>
      );
    }
  );

  return (
    <aside className={styles.sidebar}>
      <Section heading="Sidebar" direction="column">
        <ul>{sideBarContent}</ul>
      </Section>
    </aside>
  );
}
