import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { MDBRow } from 'mdbreact'
import ServicesSection from '../components/servicesSection'
import Modal from '../components/modal'

class PymesPage extends Component {
  render() {
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
          <MDBRow className="m-0" center>
            <ServicesSection />
          </MDBRow>
        </Layout>
      </>
    )
  }
}

export default PymesPage
