import React from 'react'
import { Link } from 'gatsby'

import introStyles from './intro.module.scss'
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
} from 'mdbreact'
import './intro.css'
import portada from '../images/portada.jpg'

const Intro = () => {
  return (
    <MDBView src={portada}>
      <MDBMask className="rgba-black-strong" />
      <MDBContainer
        className="d-flex justify-content-center align-items-center px-md-3 px-sm-0"
        style={{ height: '100vh', width: '100%' }}
      >
        <MDBRow style={{ margin: '50px 0px 0px 0px' }}>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <div className={introStyles.title}>
              <h3 className="display-4 font-weight-bold mt-10  mb-0 pt-md-5">
                Transformá tu Pyme{' '}
              </h3>
            </div>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
              Nuestro propósito es brindar servicios a Pymes que busquen crecer,
              optimizar y potenciar sus Recursos. Buscamos trabajar en conjunto
              brindando y desarrollando herramientas que permitan agregarle
              valor a tu Empresa.
            </h4>
            <Link to="/pymes "><MDBBtn rounded color="secondary">
              Pymes <MDBIcon icon="sitemap" />
            </MDBBtn></Link>
            <MDBBtn rounded color="secondary">
              Candidatos <MDBIcon icon="user-friends" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBView>
  )
}

export default Intro
