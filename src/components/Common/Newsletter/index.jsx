import React from 'react'
import styled, { css } from 'styled-components'
import getBreakpoints from '../../../utils/getBreakpoints'
import Container from '../Container'
import HiddenA11Y from '../HiddenA11Y'
import Input from '../Input'
import LinkButton from '../LinkButton'
import settings from '../../../../settings.json'

const NewsletterTitle = styled.h3`
  font-size: ${ ({ theme }) => theme.fontSize.h3 };
  line-height: ${ ({ theme }) => theme.lineHeight.h3 };
  letter-spacing: ${ ({ theme }) => theme.letterSpacing.h3 };
  margin-top: 0;
  text-align: center;
`

const NewsletterForm = styled.article`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${ ({ theme }) => theme.color.neutral_400 };
`

const InputsWrapper = styled.div`
  ${ getBreakpoints({
    xs: css`
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    `
  }) }
`

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 auto;
  color: ${ ({ theme }) => theme.color.neutral_100 };
  background-color: ${ ({ theme }) => theme.color.red_700 };

  &:hover {
    background-color: ${ ({ theme }) => theme.color.red_900 };
  }
`

export default function Newsletter() {
  const { TITLE, MAILCHIMP_FORM_ACTION } = settings.FORM.SIGNUP

  return (
    <Container as={NewsletterForm} width='xxxl' fluid>
      <Container width='md' spacing='0'>
        <NewsletterTitle>{TITLE}</NewsletterTitle>

        {/* Begin Mailchimp Signup Form */}
        <div id='mc_embed_signup'>
          <form
            action={MAILCHIMP_FORM_ACTION}
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate'
            target='_blank'
            noValidate
          >
            <div id='mc_embed_signup_scroll'>
              <InputsWrapper>
                <div className='mc-field-group'>
                  <HiddenA11Y>
                    <label htmlFor='mce-FNAME'>
                      Informe seu nome
                    </label>
                  </HiddenA11Y>
                  <Input
                    type='text'
                    name='FNAME'
                    className=''
                    id='mce-FNAME'
                    placeholder='Nome'
                    required
                  />
                </div>
                <div className='mc-field-group'>
                  <HiddenA11Y>
                    <label htmlFor='mce-EMAIL'>
                      Informe seu endereço de email
                    </label>
                  </HiddenA11Y>
                  <Input
                    type='email'
                    name='EMAIL'
                    className='required email'
                    id='mce-EMAIL'
                    placeholder='Email'
                    required
                  />
                </div>
              </InputsWrapper>
              <div id='mce-responses' className='clear foot'>
                <div
                  className='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                />
                <div
                  className='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                />
              </div>
              <HiddenA11Y aria-hidden='true'>
                <input
                  type='text'
                  name='b_931f7d0fb92503537ca06456d_4b0ff01e85'
                  tabIndex='-1'
                  value=''
                  onChange={() => {}}
                />
              </HiddenA11Y>
              <div className='optionalParent'>
                <div className='clear foot'>
                  <LinkButton
                    as={SubmitButton}
                    type='submit'
                    name='subscribe'
                    id='mc-embedded-subscribe'
                    className='button'
                  >
                    Quero receber
                  </LinkButton>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* End mc_embed_signup */}
      </Container>
    </Container>
  )
}
