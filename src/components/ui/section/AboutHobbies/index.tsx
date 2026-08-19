import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import style from './styles.module.css';

export default function AboutHobbies({
  hobbiesTitle,
  hobbiesText,
}: {
  hobbiesTitle: string;
  hobbiesText: string;
}) {
  return (
    <Wrapper as="section" width="md">
      <Heading className={style.hobbiesTitle}>{hobbiesTitle}</Heading>
      <Text lineHeight="md">{hobbiesText}</Text>
    </Wrapper>
  );
}
