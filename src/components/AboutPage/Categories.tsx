// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled, { css } from 'styled-components';
import getBreakpoints from '../../utils/getBreakpoints';
import Icon from '../base/Icon';
import Wrapper from '../container/Wrapper';

const CategoriesTitle = styled.h2`
  margin-top: ${({ theme }) => `${theme.spacing.h2}rem`};
`;

const CategoriesList = styled.ul`
  ${getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      margin: 0;
      text-align: center;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    `,
    xl: css`
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;
    `,
  })}
`;

const CategoryItem = styled.li`
  ${getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 2rem;
      margin: 0 auto;
      box-shadow: none;
      transition: ${({ theme }) => theme.transition.fast};

      &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.high};

        > * {
          opacity: 1;
        }
      }
    `,
    md: css`
      max-width: initial;
      margin: initial;
    `,
  })}
`;

const CategoryItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const CategoryText = styled.p`
  ${getBreakpoints({
    md: css`
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      transition: ${({ theme }) => theme.transition.fast};
    `,
    xl: css`
      opacity: 0;
    `,
  })}
`;

export default function Categories({
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
      <CategoryItem key={categoryItemTitle}>
        <CategoryItemTitle>
          <Icon name={categoryItemIcon} color="black" />
          <span>{categoryItemTitle}</span>
        </CategoryItemTitle>
        <CategoryText>{categoryItemDescription}</CategoryText>
      </CategoryItem>
    )
  );

  return (
    <Wrapper as="section" width="xl">
      <header>
        <CategoriesTitle>{categoriesTitle}</CategoriesTitle>
      </header>

      <CategoriesList>{CategoryItems}</CategoriesList>
    </Wrapper>
  );
}
