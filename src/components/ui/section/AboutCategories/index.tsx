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
          <h3 className={style.categoryItemTitle}>
            <CmsIcon name={categoryItemIcon} />
            <span>{categoryItemTitle}</span>
          </h3>
          <p className={style.categoryText}>{categoryItemDescription}</p>
        </li>
      );
    }
  );

  return (
    <Wrapper as="section" width="xl">
      <header className={style.categoriesHeader}>
        <h2 className={style.categoriesTitle}>{categoriesTitle}</h2>
      </header>

      <ul className={style.categoriesList}>{CategoryItems}</ul>
    </Wrapper>
  );
}
