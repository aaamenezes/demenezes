import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function Hobbies({
  hobbiesTitle,
  hobbiesText,
}: {
  hobbiesTitle: string;
  hobbiesText: string;
}) {
  return (
    <Wrapper as="section" width="md">
      <h2 className={S.hobbiesTitle}>{hobbiesTitle}</h2>
      <p>{hobbiesText}</p>
    </Wrapper>
  );
}
