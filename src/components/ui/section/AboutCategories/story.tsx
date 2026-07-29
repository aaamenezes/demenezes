import Section from '@/components/designSysyem/Section';
import AboutCategories from '.';

export default function AboutCategoriesStory() {
  return (
    <Section heading="Default">
      <AboutCategories
        categoriesTitle="Categorias"
        categoryItems={[
          {
            categoryItemIcon: 'code-xml',
            categoryItemTitle: 'Front-end',
            categoryItemDescription: 'HTML, CSS, Javascript e mão na massa',
          },
          {
            categoryItemIcon: 'briefcase-business',
            categoryItemTitle: 'Carreira',
            categoryItemDescription: 'Mercado de trabalho',
          },
          {
            categoryItemIcon: 'users',
            categoryItemTitle: 'Pessoas',
            categoryItemDescription: 'Comunidades e eventos',
          },
          {
            categoryItemIcon: 'clock-plus',
            categoryItemTitle: 'Produtividade',
            categoryItemDescription: 'Dicas, truques',
          },
          {
            categoryItemIcon: 'terminal',
            categoryItemTitle: 'Ferramentas',
            categoryItemDescription:
              'Libs, plugins, pacotes, Git, NPM, Yarn, Bash',
          },
          {
            categoryItemIcon: 'wrench',
            categoryItemTitle: 'Equipamentos',
            categoryItemDescription: 'Periféricos, acessórios, etc',
          },
        ]}
      />
    </Section>
  );
}
