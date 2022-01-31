import React from 'react'
import ContactForm from '../src/components/AboutPage/ContactForm'
import pageWrapper from '../src/components/Wrappers/pageWrapper'

function Contact() {
  return (
    <ContactForm />
  )
}

export default pageWrapper(Contact)
