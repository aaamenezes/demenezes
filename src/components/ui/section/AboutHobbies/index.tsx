import Wrapper from '../../container/Wrapper';
import style from './styles.module.css';

export default function Hobbies({
  hobbiesTitle,
  hobbiesText,
}: {
  hobbiesTitle: string;
  hobbiesText: string;
}) {
  return (
    <Wrapper as="section" width="md">
      <h2 className={style.hobbiesTitle}>{hobbiesTitle}</h2>
      <p>{hobbiesText}</p>
    </Wrapper>
  );
}
