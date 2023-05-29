import React, { useState } from 'react'
import styled from 'styled-components'
import { PaginationButton } from '../PaginationButton'

const StyledQuiz = styled.form`
  padding: 2rem;
  margin: 3rem auto;
  border: 1px solid ${ ({ theme }) => theme.color.neutral_300 };
  border-radius: ${ ({ theme }) => theme.borderRadius };
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
    background-color: ${ ({ theme, answeredQuiz }) => (
    !answeredQuiz && theme.color.neutral_200
  ) };
  }

  &:checked + button {
    background-color: ${ ({ theme, answeredQuiz }) => (
    answeredQuiz && theme.color.neutral_200
  ) };
  }

  + button {
    width: 100%;

    label {
      display: block;
      text-align: left;
      padding: 0.5rem;
      border: 1px solid ${ ({ theme }) => theme.color.neutral_200 };
      border-radius: ${ ({ theme }) => theme.borderRadius };
      transition: ${ ({ theme }) => theme.transition.fast };
      background-color: ${ ({ theme, answeredQuiz, correctResponse }) => (
    answeredQuiz && correctResponse && theme.color.red_100
  ) };
      cursor: pointer;
    }
  }
`
/**
 * antes de respondeu
 *   hover ou checked: cinza
 * depois de responder
 *   certa: red
 *   errada e checked: cinza
 *   outros: nada
 */

export default function Quiz() {
  const [ answeredQuiz, setAnsweredQuiz ] = useState(false)
  const [ markedResponse, setMarkedResponse ] = useState(null)
  const [ responseIsCorrect, setResponseIsCorrect ] = useState(false)

  const quiz = {
    title: 'Qual é a cor do cavalo branco de Napoleão?',
    alternatives: [ 'Azul', 'Branco', 'Laranja', 'Vermelho' ],
    correctAlternativeIndex: 1
  }

  const { title, alternatives, correctAlternativeIndex } = quiz

  function handleSubmit(event) {
    event.preventDefault()
    setResponseIsCorrect(markedResponse === correctAlternativeIndex)
    setAnsweredQuiz(true)
  }

  function handleMarkedResponse(event) {
    const markedAlternativeIndex = +event.currentTarget.getAttribute('id')
    setMarkedResponse(markedAlternativeIndex)
  }

  return (
    <StyledQuiz onSubmit={handleSubmit}>
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
              name='534ghj5g4j'
              id={index}
              value={index}
              answeredQuiz={answeredQuiz}
              correctResponse={index === correctAlternativeIndex}
            />
            <button onClick={handleMarkedResponse} type='button' id={index}>
              <label htmlFor={index}>
                {alternative}
              </label>
            </button>
          </li>
        ))}
      </AlternativesList>
      <footer>
        <PaginationButton
          as='button'
          type='submit'
          disabled={answeredQuiz}
        >
          Enviar
        </PaginationButton>
        {answeredQuiz && (
          responseIsCorrect
            ? <p>Resposta certa!</p>
            : <p>Resposta Errada...</p>
        )}
      </footer>
    </StyledQuiz>
  )
}
