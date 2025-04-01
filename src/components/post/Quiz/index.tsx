import { FormEvent, useCallback, useState } from 'react';
import { clsx } from '../../../utils/clsx';
import { simplifyString } from '../../../utils/simplifyString';
import Button from '../../ui/base/Button';
import S from './styles.module.css';

export default function Quiz({
  title,
  alternatives,
  correctAlternativeIndex,
}: {
  title: string;
  alternatives: string[];
  correctAlternativeIndex: number;
}) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [markedResponse, setMarkedResponse] = useState<number | null>(null);
  const [responseIsCorrect, setResponseIsCorrect] = useState(false);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResponseIsCorrect(markedResponse === correctAlternativeIndex - 1);
    setIsAnswered(true);
  }, []);

  return (
    <form
      className={clsx(S.quizForm, isAnswered && S.isAnswered)}
      onSubmit={handleSubmit}
    >
      <header className={S.header}>
        <p>
          <strong>{title}</strong>
        </p>
      </header>
      <ul className={S.alternativesList}>
        {alternatives.map((alternative, index) => {
          const currentId = `${simplifyString(title)}-${index}`;

          return (
            <li key={simplifyString(alternative)}>
              <input
                className={clsx(
                  S.alternativeInput,
                  isAnswered && S.isAnswered,
                  index === correctAlternativeIndex - 1 && S.isCorrectResponse
                )}
                type="radio"
                name={simplifyString(title)}
                id={currentId}
                value={index}
              />
              <button
                onClick={() => setMarkedResponse(index)}
                type="button"
                disabled={isAnswered}
              >
                <label htmlFor={currentId}>{alternative}</label>
              </button>
            </li>
          );
        })}
      </ul>
      <footer className={S.footer}>
        <Button className={S.submitButton} type="submit" disabled={isAnswered}>
          Responder
        </Button>
        {isAnswered && (
          <p>
            {responseIsCorrect ? (
              <>
                <span>Resposta certa!</span>
                <span>😃🎉🎊🎯🥇🏳️‍⚧️💓💯🔟⬆️🔝</span>
              </>
            ) : (
              <>
                <span>Resposta Errada...</span>
                <span>😥🤡☠️👎🏽💣❌☢️0️⃣</span>
              </>
            )}
          </p>
        )}
      </footer>
    </form>
  );
}
