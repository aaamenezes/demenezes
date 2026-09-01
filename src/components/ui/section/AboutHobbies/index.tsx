import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import styles from './styles.module.css';
import type { AboutHobbiesProps } from './types';

export default function AboutHobbies({
  hobbiesHeading,
  hobbiesDescription,
}: AboutHobbiesProps) {
  return (
    <Wrapper as="section" width="md">
      <Heading className={styles.hobbiesHeading}>{hobbiesHeading}</Heading>
      <Text lineHeight="md">{hobbiesDescription}</Text>
    </Wrapper>
  );
}
