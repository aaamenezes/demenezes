/* eslint-disable max-len */
import React from 'react'
import Greeting from '../src/components/AboutPage/Greeting'
import Categories from '../src/components/AboutPage/Categories'
import pageWrapper from '../src/components/Wrappers/pageWrapper'
import Story from '../src/components/AboutPage/Story'
import SocialMedia from '../src/components/Common/SocialMedia'
import Container from '../src/components/Common/Container'
import Hobbies from '../src/components/AboutPage/Hobbies'
import ContactForm from '../src/components/AboutPage/ContactForm'

function About() {
  return (
    <>
      <Greeting />
      <Categories />
      <Story />
      <Hobbies />
      <Container as='section' width='sm'>
        <SocialMedia center />
      </Container>
      <ContactForm />
      <Container as='section' width='md'>
        <p>Muito prazer!</p>
      </Container>
    </>
  )
}

export default pageWrapper(About)
