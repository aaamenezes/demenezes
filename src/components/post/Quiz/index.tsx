import { FormEvent, MouseEvent, useCallback, useState } from 'react';
import { clsx } from '../../../utils/clsx';
import { simplifyString } from '../../../utils/simplifyString';
import LinkButton from '../../ui/base/LinkButton';
import S from './styles.module.css';

export default function Quiz({
  title,
  alternatives,
  correctAlternativeIndex,
}: {
  title: string;
  alternatives: Array<{ id: string; text: string }>;
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

  const handleMarkedResponse = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const dataId = event.currentTarget.getAttribute('data-id');
      const markedAlternativeIndex = dataId !== null ? Number(dataId) : 0;
      setMarkedResponse(markedAlternativeIndex);
    },
    []
  );

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
        {alternatives.map((alternative, index) => (
          <li key={alternative.id}>
            <input
              className={clsx(
                S.alternativeInput,
                isAnswered && S.isAnswered,
                index === correctAlternativeIndex - 1 && S.isCorrectResponse
              )}
              type="radio"
              name={simplifyString(title)}
              id={`${simplifyString(title)}-${index}`}
              value={index}
            />
            <button
              onClick={handleMarkedResponse}
              type="button"
              data-id={index}
              disabled={isAnswered}
              aria-disabled={isAnswered}
            >
              <label htmlFor={`${simplifyString(title)}-${index}`}>
                {alternative.text}
              </label>
            </button>
          </li>
        ))}
      </ul>
      <footer className={S.footer}>
        <LinkButton
          className={S.submitButton}
          type="submit"
          disabled={isAnswered}
          aria-disabled={isAnswered}
        >
          Enviar
        </LinkButton>
        {isAnswered && (
          <p>
            <span>
              {responseIsCorrect ? 'Resposta certa!' : 'Resposta Errada...'}
            </span>
            <span>
              {responseIsCorrect
                ? '😃🎉🎊🎯🥇🏳️‍⚧️💓💯🔟⬆️🔝'
                : '😥🤡☠️👎🏽💣❌☢️0️⃣'}
            </span>
          </p>
        )}
      </footer>
    </form>
  );
}
