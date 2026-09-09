import CmsIcon from '@/components/ui/base/CmsIcon';
import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import styles from './styles.module.css';
import type { AboutCategoriesProps } from './types';

export default function AboutCategories({
  categoriesHeading,
  categoryItems,
}: AboutCategoriesProps) {
  const CategoryItems = categoryItems.map(
    ({ categoryItemIcon, categoryItemTitle, categoryItemDescription }) => {
      return (
        <li className={styles.categoryItem} key={categoryItemTitle}>
          <Heading level={3} size="lg" className={styles.categoryItemHeading}>
            <CmsIcon name={categoryItemIcon} />
            <Text as="span" inheritTypographyStyles>
              {categoryItemTitle}
            </Text>
          </Heading>
          <Text className={styles.categoryText}>{categoryItemDescription}</Text>
        </li>
      );
    }
  );

  return (
    <Wrapper as="section" width="xl">
      <header className={styles.categoriesHeader}>
        <Heading>{categoriesHeading}</Heading>
      </header>

      <ul className={styles.categoriesList}>{CategoryItems}</ul>
    </Wrapper>
  );
}
