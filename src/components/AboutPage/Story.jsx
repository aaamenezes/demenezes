/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'
import HighlightText from './HighlightText'

export default function Story() {
  return (
    <>
      <Container>
        <h2>Como tudo começou...</h2>
        <p>A primeira vez que "programei" na vida foi durante o técnico em Redes de Computadores que fiz no Senai. Digo "programei", porque foi em HTML e CSS, e tem uma galera que faz treta se chamar elas de linguagem de programação. Mas sempre foi algo por hobbie mesmo, até porque eu achava muito difícil (e é).</p>
      </Container>
      <HighlightText>
        Nas duas primeiras empresas que trabalhei como suporte eu fiz questão de criar uma intranet pra documentar os manuais do setor. Fiz isso subindo um servidorzinho com o famigerado Xampp (Apache, MySQL e PHP), mas entendia muito pouco de PHP. Isso tudo foi por volta de 2011 ~ 2013.
      </HighlightText>
      <Container>
        <p>Dessa época até 2019 deixei a programação um pouco de lado, o máximo que fiz foi criar algumas planilhas (low code? No code? Fica o questionamento) e edição de vídeo. Vejo muitas coisas em comum entre programação e edição de vídeo, Premiere e VS Code foram amor à primeira vista.</p>
      </Container>
      <HighlightText>
        Então foi nesse ano que eu caí de verdade no mundo da programação, num <a href="https://events.withgoogle.com/google-em-poa/">evento do Google em Porto Alegre</a>. A intenção era apenas registrar as palestras para escrever um post de blog, eu trabalhava com marketing digital na época.
      </HighlightText>
      <Container>
        <p>Assiti ao painel que falou sobre a carreira dos desenvolvedores, e fiquei encantado com a empolgação dos magníficos <a href="https://twitter.com/brjavaman">Bruno Souza</a> (o Javaman) e <a href="https://twitter.com/yarasenger">Yara Senger</a>.</p>
      </Container>
      <HighlightText>
        A empolgação foi tanta que no outro dia resolvi retomar uns conceitos de HTML, CSS, me arriquei no Javascript, e confesso que foi apenas uma porta de entrada para drogas mais fortes. Hoje em dia preciso iterar uma array dia sim dia não pelo menos.
      </HighlightText>
      <Container>
        <p>Conforme percebi uma evolução nos estudos (que sempre foram online) e que eu gostei de criar coisas e colocar ideias em prática, decidi mudar de carreira. Minha primeira vaga veio no ano seguinte, 2020.</p>
        <p>Desde então sempre foquei no front-end, criei esse blog usando 3 tecnologias que gosto muito (React, Next e Styled Componentes) com o objetivo de praticar e registrar aqui o que eu estiver aprendendo.</p>
      </Container>
    </>
  )
}
