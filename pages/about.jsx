// Referência de conteúdo pro texto
// https://emersonbroga.com/e/sobre/

import React from 'react'
import Greeting from '../src/components/AboutPage/Greeting'
import Categories from '../src/components/AboutPage/Categories'
import pageWrapper from '../src/components/Wrappers/pageWrapper'
import HighlightText from '../src/components/AboutPage/HighlightText'
import Texts from '../src/components/AboutPage/Texts'
import Collage from '../src/components/AboutPage/Collage'

function About() {
  return (
    <>
      <Greeting />
      <Categories />
      <HighlightText />
      <Texts />
      <Collage />
      <h2>Não sei</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur et dolorem pariatur, in explicabo modi minus id obcaecati odio tempora. Dolorum, voluptatibus. Tenetur quisquam, libero voluptatum cum accusantium ea?</p>
      <img src='https://via.placeholder.com/600' alt='temp' />
      <h2>HTML</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam hic rem deleniti quaerat beatae tempore ut repellendus. Esse animi, cumque officia, est at dolores doloribus sapiente aperiam necessitatibus illum cupiditate.</p>
      <h2>CSS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore nihil quos illo id cumque natus nostrum ipsum deserunt in sunt, maiores eos maxime deleniti animi molestiae quasi pariatur quidem.</p>
      <h2>JS</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fugiat eos quam, asperiores officiis dolorum, nihil, minus itaque fuga eveniet alias rerum? Ipsum eveniet natus molestias quod aliquid. Asperiores, dignissimos.</p>
      <h2>Redes Sociais</h2>
      <div>github</div>
      <div>linkedin</div>
      <div>twitter</div>
      <div>instagram</div>
      <h2>Faça contato</h2>
      <div>formulário de contato</div>

    </>
  )
}

export default pageWrapper(About)
