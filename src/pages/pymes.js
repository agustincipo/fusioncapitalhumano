import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { MDBRow } from 'mdbreact'
import ServicesSection from '../components/servicesSection'

class PymesPage extends Component {
  render() {
    return (
      <>
        <SEO
          title="Servicios"
          keywords={[
            `RRHH`,
            `Consultoria RRHH`,
            `Servicios RRHH`,
            `Fusion Capital Humano servicios`,
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
