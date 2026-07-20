import Link from '@/components/ui/base/Link';
import { componentsByLevelMap } from '@/components/ui/template/Components/data';
import { clsx } from '@/utils/clsx';
import { entriesOf, keysOf } from '@/utils/object';
import { useRouter } from 'next/router';
import Section from '../Section';
import styles from './styles.module.css';

export default function Sidebar() {
  const entriesOfComponentsByLevelMap = entriesOf(componentsByLevelMap).map(
    ([level, componentsMap]) => {
      return [level, keysOf(componentsMap)] as const;
    }
  );

  const router = useRouter();
  const { asPath } = router;

  const sideBarContent = entriesOfComponentsByLevelMap.map(
    ([level, componentNames]) => {
      const levelString = level.toString();

      return (
        <li key={levelString}>
          <Section heading={levelString}>
            <ul>
              {componentNames.map(componentName => {
                const href = `/components/${levelString}/${componentName}/`;
                const isComponentActive = asPath === href;

                return (
                  <li key={componentName}>
                    <Link
                      href={href}
                      className={clsx(styles.link, {
                        [styles.isLinkActive]: isComponentActive,
                      })}
                    >
                      {componentName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Section>
        </li>
      );
    }
  );

  return (
    <aside className={styles.sidebar}>
      <Section heading="Sidebar">
        <ul>{sideBarContent}</ul>
      </Section>
    </aside>
  );
}
