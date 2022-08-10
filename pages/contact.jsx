import React from 'react'
import ContactForm from '../src/components/AboutPage/ContactForm'
import pageWrapper from '../src/components/Wrappers/pageWrapper'
import { getContent } from '../src/external/datoCMS'

function Contact({ contactContent }) {
  return (
    <ContactForm contactContent={contactContent} />
  )
}

export default pageWrapper(Contact)

export async function getStaticProps() {
  const contactContent = await getContent('contactSection', {})

  return {
    props: {
      contactContent
    }
  }
}
