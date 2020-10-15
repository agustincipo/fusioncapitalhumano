import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardTitle,
} from 'mdbreact'
import Modal from './modal'
import Service1 from '../content/service1.yaml'
import Service2 from '../content/service2.yaml'
import Service3 from '../content/service3.yaml'
import Service4 from '../content/service4.yaml'
import Service5 from '../content/service5.yaml'
import Service6 from '../content/service6.yaml'
import ImageService1 from '../images/Service1.jpeg'
import ImageService2 from '../images/Service2.jpeg'
import ImageService3 from '../images/Service3.jpeg'
import ImageService4 from '../images/Service4.jpeg'
import ImageService5 from '../images/Service5.jpeg'
import ImageService6 from '../images/Service6.jpeg'

const ServicesSection = () => {
  return (
    <div>
      <MDBCard className="my-5 px-5 border-0">
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Servicios
          </h2>
          <p className="dark-grey-text mx-auto mb-1 w-75 text-center">
            En Fusion brindamos soluciones integrales en Capital Humano. A
            traves de la consultoría ayudamos a empresas a detectar
            oportunidades de mejora. Trabajamos de manera conjunta brindando y
            desarrollando herramientas que permitan agregarle valor a tu
            empresa. Te proponeosconstruir un plan de accion alineado a las
            necesidades de tu pymes para adaptarse al nuevo contexto.
          </p>
        </MDBCardBody>
      </MDBCard>

      {/* Services 1,2 and 3 */}
      <MDBCard className="px-5 border-0">
        <MDBRow>
          {/* Service 1*/}
          <MDBCol md="4" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: `url(${ImageService1})`,
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  {/*<h5 className={`${Service1.color}-text`}>
                    <MDBIcon icon="chart-pie" /> Marketing
                  </h5>*/}
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
          <MDBCol md="4" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: `url(${ImageService2})`,
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <MDBCardTitle tag="h4" className="pt-2">
                    <strong>{Service2.title}</strong>
                  </MDBCardTitle>
                  <br></br>
                  <p>{Service2.content}</p>
                  <Modal
                    title={Service2.title}
                    color={Service2.color}
                    modal={Service2.modal}
                  />
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Service 3*/}
          <MDBCol md="4" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: `url(${ImageService3})`,
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong   py-5 px-4">
                <div>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{Service3.title}</strong>
                  </MDBCardTitle>
                  <p>{Service3.content}</p>
                  <br></br>
                  <Modal
                    title={Service3.title}
                    color={Service3.color}
                    modal={Service3.modal}
                  />
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
          <MDBCol md="4" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: `url(${ImageService5})`,
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
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
          <MDBCol md="4" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: `url(${ImageService4})`,
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
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
                  <Modal
                    title={Service5.title}
                    color={Service5.color}
                    modal={Service5.modal}
                  />
                </div>
              </div>
            </MDBCard>
          </MDBCol>

          {/* Services 6*/}
          <MDBCol md="4" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: `url(${ImageService6})`,
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{Service6.title}</strong>
                  </MDBCardTitle>
                  <p>
                    <br></br>
                    {Service6.content}
                    <br></br>
                    <br></br>
                  </p>
                  <Modal
                    title={Service6.title}
                    color={Service6.color}
                    modal={Service6.modal}
                  />
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
