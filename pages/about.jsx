/* eslint-disable max-len */
import React from 'react'
import Greeting from '../src/components/AboutPage/Greeting'
import Categories from '../src/components/AboutPage/Categories'
import pageWrapper from '../src/components/Wrappers/pageWrapper'
import Story from '../src/components/AboutPage/Story'
import SocialMedia from '../src/components/Common/SocialMedia'
import Contact from '../src/components/AboutPage/Contact'
import Container from '../src/components/Common/Container'
import Hobbies from '../src/components/AboutPage/Hobbies'

function About() {
  return (
    <>
      <Greeting />
      <Categories />
      <Story />
      <Hobbies />
      <SocialMedia center />
      <Contact />
      <Container as='section'>
        <p>Muito prazer!</p>
      </Container>
    </>
  )
}

export default pageWrapper(About)
