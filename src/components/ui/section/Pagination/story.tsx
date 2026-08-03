import Section from '@/components/designSysyem/Section';
import Pagination from '.';

export default function PaginationStory() {
  return (
    <>
      <Section heading="Primeira página">
        <Pagination currentPagination={1} isLastPagination={false} />
      </Section>
      <Section heading="Página intermediária">
        <Pagination currentPagination={2} isLastPagination={false} />
      </Section>
      <Section heading="Última página">
        <Pagination currentPagination={3} isLastPagination />
      </Section>
    </>
  );
}
