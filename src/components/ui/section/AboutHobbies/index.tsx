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
      <h2 className={style.hobbiesTitle}>{hobbiesTitle}</h2>
      <Text lineHeight="md">{hobbiesText}</Text>
    </Wrapper>
  );
}
