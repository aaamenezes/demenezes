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
import { getContent } from '../src/external/datoCMS'

function About({ aboutPageContent }) {
  const {
    greetingTitle,
    greetingSubtitle,
    greetingDescription,
    profileImage,
    categoriesTitle,
    categoryItemModule,
    historyTitle,
    historyText,
    hobbiesTitle,
    hobbiesText
  } = aboutPageContent.data.aboutPage

  const { contactTitle, contactText } = aboutPageContent.data.contactSection

  return (
    <main>
      <Greeting
        greetingTitle={greetingTitle}
        greetingSubtitle={greetingSubtitle}
        greetingDescription={greetingDescription}
        profileImage={profileImage}
      />
      <Categories
        categoriesTitle={categoriesTitle}
        categoryItems={categoryItemModule}
      />
      <Story
        historyTitle={historyTitle}
        historyText={historyText}
      />
      <Hobbies
        hobbiesTitle={hobbiesTitle}
        hobbiesText={hobbiesText}
      />
      <Container as='section' width='sm'>
        <SocialMedia center />
      </Container>
      <ContactForm contactTitle={contactTitle} contactText={contactText} />
      <Container as='section' width='md'>
        <p>Muito prazer!</p>
      </Container>
    </main>
  )
}

export default pageWrapper(About)

export async function getStaticProps() {
  const aboutPageContent = await getContent('aboutPage', {})

  return {
    props: { aboutPageContent }
  }
}
