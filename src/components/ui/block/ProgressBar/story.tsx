import { useRef } from 'react';
import ProgressBar from '.';
import Section from '@/components/designSysyem/Section';

export default function ProgressBarStory() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <>
      <Section heading="Default">
        <section ref={containerRef} style={{ height: '300vh' }} />
        <ProgressBar containerReference={containerRef} />
      </Section>
    </>
  );
}
