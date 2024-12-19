import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { PaginationButton } from '../PaginationButton'
import { simplifyString } from '../../utils/simplifyString'
import getBreakpoints from '../../utils/getBreakpoints'

const StyledQuiz = styled.form`
  padding: 2rem;
  margin: 3rem auto;
  border: 1px solid ${ ({ theme }) => theme.color.neutral_600 };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  pointer-events: ${ ({ answeredQuiz }) => answeredQuiz ? 'none' : 'initial' };
`

const HeaderQuiz = styled.header`
  margin-bottom: 1rem;
`

const AlternativesList = styled.ul`
  margin: 0;
  list-style-type: none;

  > li::before {
    content: '\\200B';
    display: block;
    height: 0;
  }
`

const AlternativeInput = styled.input`
  display: none;

  &:checked + button,
  + button:hover {
    color: ${ ({ theme }) => theme.color.neutral_50 };
    background-color: ${ ({ theme }) => theme.color.neutral_600 };
  }

  + button {
    width: 100%;
    border: 1px solid ${ ({ theme, answeredQuiz, correctResponse }) => (
    answeredQuiz && correctResponse
      ? theme.color.red_600
      : theme.color.neutral_600
  ) };
    border-radius: ${ ({ theme }) => theme.borderRadius };
    text-align: left;
    transition: ${ ({ theme }) => theme.transition.fast };

    label {
      display: block;
      padding: 0.5rem;
      color: ${ ({ theme, answeredQuiz, correctResponse }) => (
    answeredQuiz && correctResponse && theme.color.neutral_50
  ) };
      background-color: ${ ({ theme, answeredQuiz, correctResponse }) => (
    answeredQuiz && correctResponse && theme.color.red_600
  ) };
      cursor: pointer;
    }
  }
`

const QuizFooter = styled.footer`
  ${ getBreakpoints({
    xs: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      `,
    md: css`
      flex-direction: row;
    `
  }) }

  p {
    ${ getBreakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      `,
    md: css`
      flex-direction: row;
    `
  }) }
  }
`

export default function Quiz({ title, alternatives, correctAlternativeIndex }) {
  const [ answeredQuiz, setAnsweredQuiz ] = useState(false)
  const [ markedResponse, setMarkedResponse ] = useState(null)
  const [ responseIsCorrect, setResponseIsCorrect ] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setResponseIsCorrect(markedResponse === correctAlternativeIndex - 1)
    setAnsweredQuiz(true)
  }

  function handleMarkedResponse(event) {
    const markedAlternativeIndex = +event.currentTarget.dataset.id
    setMarkedResponse(markedAlternativeIndex)
  }

  return (
    <StyledQuiz onSubmit={handleSubmit} answeredQuiz={answeredQuiz}>
      <HeaderQuiz>
        <p>
          <strong>
            {title}
          </strong>
        </p>
      </HeaderQuiz>
      <AlternativesList>
        {alternatives.map((alternative, index) => (
          <li key={alternative.id}>
            <AlternativeInput
              type='radio'
              name={simplifyString(title)}
              id={`${ simplifyString(title) }-${ index }`}
              value={index}
              answeredQuiz={answeredQuiz}
              correctResponse={index === correctAlternativeIndex - 1}
            />
            <button
              onClick={handleMarkedResponse}
              type='button'
              data-id={index}
              disabled={answeredQuiz}
              aria-disabled={answeredQuiz}
            >
              <label htmlFor={`${ simplifyString(title) }-${ index }`}>
                {alternative}
              </label>
            </button>
          </li>
        ))}
      </AlternativesList>
      <QuizFooter>
        <PaginationButton
          as='button'
          type='submit'
          disabled={answeredQuiz}
          aria-disabled={answeredQuiz}
        >
          Enviar
        </PaginationButton>
        {answeredQuiz && (
          <p>
            <span>
              {
                responseIsCorrect
                  ? 'Resposta certa!'
                  : 'Resposta Errada...'
              }
            </span>
            <span>
              {
                responseIsCorrect
                  ? '😃🎉🎊🎯🥇🏳️‍⚧️💓💯🔟⬆️🔝'
                  : '😥🤡☠️👎🏽💣❌☢️0️⃣'
              }
            </span>
          </p>
        )}
      </QuizFooter>
    </StyledQuiz>
  )
}
