import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBCardTitle,
} from 'mdbreact'
import servicesStyles from './services.module.scss'
import Modal from './modal'
import Service1 from '../content/service1.yaml'
import Service2 from '../content/service2.yaml'
import Service3 from '../content/service3.yaml'
import Service4 from '../content/service4.yaml'
import Service5 from '../content/service5.yaml'
import Service6 from '../content/service6.yaml'

const ServicesSection = () => {
  return (
    <div>
      <MDBCard className="my-5 px-5 border-0">
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Servicios
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
        </MDBCardBody>
      </MDBCard>

      {/* Services 1,2 and 3 */}
      <MDBCard className="px-5 border-0">
        <MDBRow>
          {/* Service 1*/}
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className={`${Service1.color}-text`}>
                    <MDBIcon icon="chart-pie" /> Marketing
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{Service1.title}</strong>
                  </MDBCardTitle>
                  <p>
                    <br></br>
                    {Service1.content}
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                  <Modal
                    title={Service1.title}
                    color={Service1.color}
                    modal={Service1.modal}
                  />
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Service 2*/}
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className={`${Service2.color}-text`}>
                    <MDBIcon icon="desktop" /> Software
                  </h5>
                  <MDBCardTitle tag="h4" className="pt-2">
                    <strong>{Service2.title}</strong>
                  </MDBCardTitle>
                  <br></br>
                  <p>{Service2.content}</p>
                  <MDBBtn color={`${Service2.botonColor}`} rounded>
                    <MDBIcon icon="clone left" /> Ver más
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Service 3*/}
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong   py-5 px-4">
                <div>
                  <h5 className={`${Service3.color}`}>
                    <MDBIcon icon="desktop" /> {Service3.category}
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{Service3.title}</strong>
                  </MDBCardTitle>
                  <p>{Service3.content}</p>
                  <br></br>
                  <MDBBtn color={`${Service3.botonColor}`} rounded>
                    <MDBIcon icon="clone left" /> Ver más
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCard>

      {/* Services 4,5 and 6 */}
      <MDBCard className="my-5 px-5 pb- b5 border-0">
        <MDBRow>
          {/* Services 4*/}
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className={`${Service4.color}-text`}>
                    <MDBIcon icon="chart-pie" /> {Service4.category}
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{Service4.title}</strong>
                  </MDBCardTitle>
                  <p>{Service4.content}</p>
                  <Modal
                    title={Service4.title}
                    color={Service4.color}
                    modal={Service4.modal}
                  />
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Services 5*/}
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className={`${Service5.color}`}>
                    <MDBIcon icon="desktop" /> {Service5.category}
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong> {Service5.title}</strong>
                  </MDBCardTitle>
                  <p>
                    <br></br>
                    {Service5.content}
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                  <MDBBtn color={`${Service5.botonColor}`} rounded>
                    <MDBIcon icon="clone left" /> Ver más
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Services 6*/}
          <MDBCol md="4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className={`${Service6.color}-text`}>
                    <MDBIcon icon="desktop" /> {Service6.category}
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{Service6.title}</strong>
                  </MDBCardTitle>
                  <p>
                    <br></br>
                    {Service6.content}
                    <br></br>
                    <br></br>
                  </p>
                  <MDBBtn color={`${Service6.botonColor}`} rounded>
                    <MDBIcon icon="clone left" /> Ver más
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  )
}

export default ServicesSection
