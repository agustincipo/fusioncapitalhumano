import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const IntroOld = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "30vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                    <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">TRANSFORMA TU PYME</h2>
                    <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">Nuestro propósito es brindar servicios a Pymes que busquen crecer, optimizar y potenciar sus Recursos. Buscamos trabajar en conjunto brindando y desarrollando herramientas que permitan agregarle valor a tu Empresa.</h4>
                    <MDBBtn color="purple" ><MDBIcon icon="sitemap" className="mr-2" /> Pymes</MDBBtn>
                    <MDBBtn color="purple" ><MDBIcon icon="users" className="mr-2" /> Candidatos </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default IntroOld;
