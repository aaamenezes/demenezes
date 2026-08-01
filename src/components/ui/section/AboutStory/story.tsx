import Section from '@/components/designSysyem/Section';
import AboutStory from '.';

export default function AboutStoryStory() {
  return (
    <Section heading="Default">
      <AboutStory
        historyTitle="Minha história"
        historyText={
          'Comecei a trabalhar com tecnologia por curiosidade e vontade de criar coisas para a web.\nAo participar de eventos e comunidades, encontrei pessoas que me inspiraram a compartilhar o que aprendo.\nHoje, sigo estudando, criando interfaces e trocando experiências com outros profissionais.\nCada novo projeto é uma oportunidade de aprender algo diferente.'
        }
      />
    </Section>
  );
}
