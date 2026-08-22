interface CategoryItem {
  categoryItemIcon: string;
  categoryItemTitle: string;
  categoryItemDescription: string;
}

export interface AboutCategoriesProps {
  categoriesHeading: string;
  categoryItems: CategoryItem[];
}
