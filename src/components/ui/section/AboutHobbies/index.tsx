import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import style from './styles.module.css';

export default function AboutHobbies({
  hobbiesHeading,
  hobbiesDescription,
}: {
  hobbiesHeading: string;
  hobbiesDescription: string;
}) {
  return (
    <Wrapper as="section" width="md">
      <Heading className={style.hobbiesHeading}>{hobbiesHeading}</Heading>
      <Text lineHeight="md">{hobbiesDescription}</Text>
    </Wrapper>
  );
}
