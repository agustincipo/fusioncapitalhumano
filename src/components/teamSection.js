import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
  return (
    <MDBCard className=" border-0  my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            ¿Quiénes somos?
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          Somos tres colegas Licenciadas en Gestión de Recursos Humanos y apasionadas
           por la gestión del talento. Cada una de nosotras se ha especializado en distintas
          ramas de la profesión por lo cual FUSIÓN es la sinergia de todos esos
          conocimientos destinados a ayudarte a potenciar y a transformar tu Empresa.          </p>
          <MDBRow>


            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Camila Andrea Bruzzone</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text">
              <p>Lic. Gestión de Recursos Humanos, egresada en Universidad Catolica de La Plata.</p>
              <p>Máster en Dirección de RRHH y Relaciones Laborales, en Cerem, España.</p>
              <p>Su carrera profesional se desarrollo en la Caja de Abogados formando parte del Equipo de Recursos Humanos.             </p> </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Rocío Jaurretche</h5>
              <p className="text-uppercase blue-text">Photographer</p>
              <p className="grey-text">
              <p>Lic.Gestión de Recursos Humanos, egresada en Universidad Católica de La Plata.</p>
              <p>MBA- Dirección en Gestión de Empresas, orientación en RRHH.</p>
              <p>Máster integral de Coaching Profesional, en Instituto de Coaching, Barcelona- España.</p>
              <p>Su carrera profesional se desarrollo en Accenture formando parte del Equipo de Recursos Humanos.              </p></p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBAvatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">María Ignacia Arbio</h5>
              <p className="text-uppercase blue-text">Graphic designer</p>
              <p className="grey-text">
              <p>Lic. Gestión de Recursos Humanos, egresada en Universidad Católica de La Plata.</p>
              <p>MBA- Dirección en Gestión de Empresas, orientación en RRHH.</p>
              <p>Su carrera profesional se desarrollo en Sodimac formando parte del equipo de Gestión Humana.</p></p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;