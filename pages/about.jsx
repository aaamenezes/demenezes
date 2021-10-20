// Referência de conteúdo pro texto
// https://emersonbroga.com/e/sobre/

import React from 'react'
import Greeting from '../src/components/AboutPage/Greeting'
import Numbers from '../src/components/AboutPage/Numbers'
import pageWrapper from '../src/components/Wrappers/pageWrapper'

function About() {
  return (
    <>
      <Greeting />
      <Numbers />
      <h2>Vídeo</h2>
      <iframe src='http://www.youtube.com/results?search_type=&search_query=video+aula+gimp&gl=BR&hl=pt' frameBorder='0' />
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita, eveniet repellat eaque totam iste voluptatum voluptatem mollitia fugiat eius tempora error harum fugit? Quas aliquam quod vel ipsam rem.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam deserunt harum dignissimos necessitatibus a voluptatibus alias fuga eligendi nihil? Dolor quasi nemo explicabo quo reprehenderit quam, nisi facere delectus?</p>
      <p>Quis quidem quaerat sunt eos animi eveniet impedit nihil et obcaecati beatae commodi voluptas rerum cumque facere numquam, tempora perspiciatis eius deleniti dolores culpa optio veritatis ex incidunt aut! Debitis!</p>
      <p>Nostrum, inventore sint? Beatae eum modi expedita eius, explicabo distinctio voluptates, quod vel animi perspiciatis aperiam assumenda ipsa, ad tempora nostrum? Velit doloremque blanditiis assumenda sunt ullam doloribus, amet eos.</p>
      <img src='https://via.placeholder.com/300' alt='' />
      <img src='https://via.placeholder.com/300' alt='' />
      <img src='https://via.placeholder.com/300' alt='' />
      <img src='https://via.placeholder.com/300' alt='' />
      <img src='https://via.placeholder.com/300' alt='' />
      <img src='https://via.placeholder.com/300' alt='' />
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
