/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import CropedImage from '../Common/CropedImage'

const StyledGreeting = styled.section`
  max-width: ${ ({ theme }) => `${ theme.breakpoints.lg }px` };
  padding-top: 120px;
`

export default function Greeting() {
  return (
    <Container as={StyledGreeting}>
      <CropedImage
        src='https://via.placeholder.com/600'
        alt='Foto de perfil'
        ratio='4x3'
      />
      <h1>Sobre mim</h1>
      <p>Olá. Trabalho há 1 ano e 3 meses como desenvolvedor front-end, utilizando HTML, CSS (SASS), Javascript/jQuery e Liquid (Shopify).</p>
      <p>Estou estudando tecnologias front-end como React.JS, Styled Components Next.JS. Para isso, realizei o Bootcamp Front-end JamStack da Alura. Também tive contato com DatoCMS, Storybook, e testes no front-end utilizando Cypress e Jest.</p>
      <p>E atualmente estou focando no projeto desse blog que vc está lendo :)</p>
      <p><a href='https://github.com/aaamenezes/demenezes'>Repositório</a></p>
      <p>Costumo usar o Github para versionamento de código, e também já trabalhei com o Gitlab.</p>
      <p>Também quero ter contato com Node, Python e Banco de dados. E num futuro não tão distante, quero me aprofundar na área de UX/UI.</p>
      <p>Minhas área de interesse são desenvolvimento web, mobile, front-end e UX/UI design.</p>
      <p>Estudo programação majoritariamente online desde 2019.</p>
      <p>Você pode conferir os projetos no meu <a href='https://github.com/aaamenezes'>perfil do Github</a></p>
      <p>Decidi seguir na área de desenvolvimento após adquirir experiência em suporte de TI e Marketing Digital. Nesta última, trabalhei com redes sociais, blog, SEO/WordPress e CSS.</p>
      <p>Sou graduado em Administração com ênfase em Marketing (PUCRS), técnico em Publicidade (ETCR) e técnico em Redes de Computadores (SENAI).</p>
      <p>No trabalho voluntário que realizei na ONG Associação 101 Viralatas (Viamão/RS), tive uma boa vivência com edição de vídeo usando o Adobe Premiere e tratamento básico de imagens com Photoshop.</p>
      <p>Meus principais hobbies são ler, tocar violão, jogar futebol, sair com amigos e jogar vídeo game.</p>
      <p>Quer conversar sobre algum projeto, pedir alguma ajuda, ou apenas falar sobre como é prazeroso usar componentes reutilizáveis?</p>
      <p>Pode me chamar aqui mesmo pelo LinkedIn ou pelos contatos:</p>
      <ul>
        <li>Whatsapp: (51) 99666.1314</li>
        <li>E-mail: 1992menezes@gmail.com</li>
      </ul>
      <p>Muito prazer!</p>
    </Container>
  )
}
