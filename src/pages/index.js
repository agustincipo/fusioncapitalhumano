import React, { Component } from 'react'
import Layout from '../components/layout'
import Intro from '../components/intro'
import SEO from '../components/seo'
import TeamSection from '../components/teamSection'
import ContactForm from '../components/contactForm'
import PdfUpload from '../components/pdfUpload'

const IndexPage = () => {
    return (
      <>
          <SEO
            title="Home"
            keywords={[
              `fusion`,
              `capital`,
              `humano`,
              `fusion capital humano`,
            ]}
          />
          <Layout>
          <Intro />
          <main>
            <TeamSection />
            <ContactForm />
          </main>
          </Layout>
      </>
    )
}

export default IndexPage
