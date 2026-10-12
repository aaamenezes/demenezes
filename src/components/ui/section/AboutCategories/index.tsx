import CmsIcon from '@/components/ui/base/CmsIcon';
import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import Grid from '../../container/Grid';
import type { AboutCategoriesProps } from './types';

export default function AboutCategories({
  categoriesHeading,
  categoryItems,
}: AboutCategoriesProps) {
  const categoryItemsElement = categoryItems.map(
    ({ categoryItemIcon, categoryItemTitle, categoryItemDescription }) => {
      return (
        <Wrapper
          as="li"
          width="full"
          padding="none"
          direction="column"
          alignItems="center"
          gap="md"
          key={categoryItemTitle}
        >
          <Wrapper
            width="full"
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="sm"
            padding="none"
          >
            <CmsIcon name={categoryItemIcon} size={18} />
            <Heading level={3} size="lg">
              <Text as="span" inheritTypographyStyles>
                {categoryItemTitle}
              </Text>
            </Heading>
          </Wrapper>
          <Text>{categoryItemDescription}</Text>
        </Wrapper>
      );
    }
  );
  return (
    <Wrapper width="full" as="section">
      <Wrapper width="xxl" as="header" direction="column" gap="lg">
        <Heading>{categoriesHeading}</Heading>
        <Grid
          columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3, xxxl: 3 }}
          as="ul"
        >
          {categoryItemsElement}
        </Grid>
      </Wrapper>
    </Wrapper>
  );
}
