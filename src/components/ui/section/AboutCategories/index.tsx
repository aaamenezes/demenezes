import Icon from '@/components/ui/base/Icon';
import type { IconName } from '@/components/ui/base/Icon/types';
import Wrapper from '@/components/ui/container/Wrapper';
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
    ({ categoryItemIcon, categoryItemTitle, categoryItemDescription }) => (
      <li className={style.categoryItem} key={categoryItemTitle}>
        <h3 className={style.categoryItemTitle}>
          {/* não gostei desse "as IconName", corrigir isso */}
          <Icon name={categoryItemIcon as IconName} color="black" />
          <span>{categoryItemTitle}</span>
        </h3>
        <p className={style.categoryText}>{categoryItemDescription}</p>
      </li>
    )
  );

  return (
    <Wrapper as="section" width="xl">
      <header>
        <h2 className={style.categoriesTitle}>{categoriesTitle}</h2>
      </header>

      <ul className={style.categoriesList}>{CategoryItems}</ul>
    </Wrapper>
  );
}
