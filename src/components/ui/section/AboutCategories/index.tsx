import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import CmsIcon from '../../base/CmsIcon';
import style from './styles.module.css';

export default function AboutCategories({
  categoriesTitle,
  categoryItems,
}: {
  categoriesTitle: string;
  categoryItems: Array<{
    categoryItemIcon: string;
    categoryItemTitle: string;
    categoryItemDescription: string;
  }>;
}) {
  const CategoryItems = categoryItems.map(
    ({ categoryItemIcon, categoryItemTitle, categoryItemDescription }) => {
      return (
        <li className={style.categoryItem} key={categoryItemTitle}>
          <Heading level={3} size="lg" className={style.categoryItemTitle}>
            <CmsIcon name={categoryItemIcon} />
            <Text as="span">{categoryItemTitle}</Text>
          </Heading>
          <Text className={style.categoryText}>{categoryItemDescription}</Text>
        </li>
      );
    }
  );

  return (
    <Wrapper as="section" width="xl">
      <header className={style.categoriesHeader}>
        <Heading>{categoriesTitle}</Heading>
      </header>

      <ul className={style.categoriesList}>{CategoryItems}</ul>
    </Wrapper>
  );
}
