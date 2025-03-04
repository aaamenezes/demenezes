import Icon from '../../base/Icon';
import { IconName } from '../../base/Icon/types';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

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
      <li className={S.categoryItem} key={categoryItemTitle}>
        <h3 className={S.categoryItemTitle}>
          {/* não gostei desse "as IconName", corrigir isso */}
          <Icon name={categoryItemIcon as IconName} color="black" />
          <span>{categoryItemTitle}</span>
        </h3>
        <p className={S.categoryText}>{categoryItemDescription}</p>
      </li>
    )
  );

  return (
    <Wrapper as="section" width="xl">
      <header>
        <h2 className={S.categoriesTitle}>{categoriesTitle}</h2>
      </header>

      <ul className={S.categoriesList}>{CategoryItems}</ul>
    </Wrapper>
  );
}
