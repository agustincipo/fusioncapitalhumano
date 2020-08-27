import React, { Component } from 'react'
import Layout from '../components/layout'
import Intro from '../components/intro'
import SEO from '../components/seo'
import TeamSection from '../components/teamSection'
import ContactForm from '../components/contactForm'

import { MDBRow } from 'mdbreact'
import ServicesSection from '../components/servicesSection'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
      <>
          <SEO
            title="Home"
            keywords={[
              `gatsby`,
              `MDBReact`,
              `react`,
              `Material Design For Bootstrap`,
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
