import Button from '@/components/ui/base/Button';
import Text from '@/components/ui/base/Text';
import { clsx } from '@/utils/clsx';
import { simplifyString } from '@/utils/simplifyString';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import styles from './styles.module.css';
import type { QuizProps } from './types';

/***
 * Esse component não está sendo usado pelos posts até hoje 19/08/2026
 * Acessar https://demenezes-dev.admin.datocms.com/cda-explorer
 * Usar query abaixo
 * {
  allPosts(first: 100) {
    slug
    content {
      blocks {
        __typename
      }
    }
  }
}
 * E confirmar que o resultado da consulta não menciona "quiz".
 * Sendo assim, esse componente está fora de alguns padrão da codebase
 */

export default function Quiz({
  question,
  alternatives,
  correctAlternativeIndex,
}: QuizProps) {
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
      className={clsx(styles.quizForm, isAnswered && styles.isAnswered)}
      onSubmit={handleSubmit}
    >
      <header className={styles.header}>
        <Text>
          <Text as="strong">{question}</Text>
        </Text>
      </header>
      <ul className={styles.alternativesList}>
        {alternatives.map((alternative, index) => {
          const currentId = `${simplifyString(question)}-${index}`;

          return (
            <li
              className={styles.alternativeItem}
              key={simplifyString(alternative)}
            >
              <input
                className={clsx(
                  styles.alternativeInput,
                  isAnswered && styles.isAnswered,
                  index === correctAlternativeIndex - 1 &&
                    styles.isCorrectResponse
                )}
                type="radio"
                name={simplifyString(question)}
                id={currentId}
                value={index}
              />
              <label className={styles.alternativeLabel} htmlFor={currentId}>
                <button
                  className={clsx(
                    styles.alternativeButton,
                    isAnswered && styles.isAnswered,
                    index === correctAlternativeIndex - 1 &&
                      styles.isCorrectResponse
                  )}
                  onClick={() => setMarkedResponse(index)}
                  type="button"
                  disabled={isAnswered}
                >
                  {alternative}
                </button>
              </label>
            </li>
          );
        })}
      </ul>
      <footer className={styles.footer}>
        <Button
          className={styles.submitButton}
          type="submit"
          disabled={isAnswered}
        >
          Responder
        </Button>
        {isAnswered && (
          <Text className={styles.feedback}>
            {responseIsCorrect ? (
              <>
                <Text as="span">Resposta certa!</Text>
                <Text as="span">😃🎉🎊🎯🥇🏳️‍⚧️💓💯🔟⬆️🔝</Text>
              </>
            ) : (
              <>
                <Text as="span">Resposta Errada...</Text>
                <Text as="span">😥🤡☠️👎🏽💣❌☢️0️⃣</Text>
              </>
            )}
          </Text>
        )}
      </footer>
    </form>
  );
}
