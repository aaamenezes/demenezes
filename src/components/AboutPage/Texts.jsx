import React from 'react'
import styled from 'styled-components'
import Container from '../Common/Container'

const StyledTexts = styled.section`
  
`

export default function Texts() {
  return (
    <Container as={StyledTexts}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam deserunt harum dignissimos necessitatibus a voluptatibus alias fuga eligendi nihil? Dolor quasi nemo explicabo quo reprehenderit quam, nisi facere delectus?</p>
      <p>Quis quidem quaerat sunt eos animi eveniet impedit nihil et obcaecati beatae commodi voluptas rerum cumque facere numquam, tempora perspiciatis eius deleniti dolores culpa optio veritatis ex incidunt aut! Debitis!</p>
      <p>Nostrum, inventore sint? Beatae eum modi expedita eius, explicabo distinctio voluptates, quod vel animi perspiciatis aperiam assumenda ipsa, ad tempora nostrum? Velit doloremque blanditiis assumenda sunt ullam doloribus, amet eos.</p>
    </Container>
  )
}
