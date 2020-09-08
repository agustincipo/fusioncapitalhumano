import React, { Component } from 'react'
import portada from '../images/portada-candidatos.jpg'
import candidatosStyles from '../components/candidatos.module.scss'

import ContactForm from '../components/contactFormCandidatos'
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBIcon,
  MDBContainer,
} from 'mdbreact'
import Layout from '../components/layout'

class CandidatosPage extends Component {
  render() {
    return (
      <Layout>
        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                    <img
                      src={portada}
                      alt=""
                      className="img-fluid"
                    />
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </MDBView>
                  <MDBCardBody cascade className="">
                    <h3 className="text-center h1-responsive font-weight-bold my-5">
                      <a className={candidatosStyles.color} href="#!">¿Querés formar parte de nuestra base de datos?</a>
                    </h3>
                    <MDBContainer className="mt-5 dark-grey-text mx-auto  text-center">
                  <p>
                  En Fusion contamos con base de datos propia, en la cual recopilamos y clasificamos los Curriculum de modo tal que se vuelvan de facil acceso para nuestros clientes.
De esta manera, ofrecemos una amplia variedad de perfiles a las diferentes PYMES que se encuentran buscando cubrir una posicion.
Si queres formar parte de nuestra base de datos te invitamos a que cargues tu CV.

                  </p>

                </MDBContainer>
                    <ContactForm/>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">

                </MDBContainer>
              </MDBCol>
            </MDBRow>
            <hr className="mb-5 mt-4" />
          </MDBCardBody>
        </MDBCard>
      </Layout>
    )
  }
}

export default CandidatosPage
