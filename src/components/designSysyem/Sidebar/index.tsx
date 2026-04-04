import { getDesignSystemValidPaths } from '@/utils/getDesignSystemValidPaths';
import Section from '../Section';
import styles from './styles.module.css';

export default function Sidebar() {
  const designSystemValidPaths = getDesignSystemValidPaths();

  const sideBarContent = designSystemValidPaths.map(
    ({ level, componentName }) => {
      return (
        <li key={`${level}-${componentName}`}>
          <a href={`/components/${level}/${componentName}`}>{componentName}</a>
        </li>
      );
    }
  );

  return (
    <aside className={styles.sidebar}>
      <Section heading="Sidebar" direction="column">
        {sideBarContent}
      </Section>
    </aside>
  );
}
