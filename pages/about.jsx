import React from 'react'
import Greeting from '../src/components/AboutPage/Greeting'
import Categories from '../src/components/AboutPage/Categories'
import pageWrapper from '../src/components/Wrappers/pageWrapper'
import Story from '../src/components/AboutPage/Story'
import SocialMedia from '../src/components/Common/SocialMedia'
import Contact from '../src/components/AboutPage/Contact'
import Container from '../src/components/Common/Container'
// import Collage from '../src/components/AboutPage/Collage'

function About() {
  return (
    <>
      <Greeting />
      <Categories />
      <Story />
      {/* <Collage /> */}
      <Container>
        <h2>Hobbies</h2>
        <p>Meus principais hobbies são ler, tocar violão, jogar futebol, sair com amigos, ir para a praia e jogar vídeo game.</p>
      </Container>
      <SocialMedia />
      <Contact />
      <Container>
        <p>Muito prazer!</p>
      </Container>
    </>
  )
}

export default pageWrapper(About)
