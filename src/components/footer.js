import React from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon,
} from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-0">
      <MDBContainer>
        {/* <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Products</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Awards</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </MDBCol>
        </MDBRow> */}
        <hr className="rgba-white-light" style={{ margin: '0 15%' }} />
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: '10% 15% 5%' }}
        />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a
                href="https://www.facebook.com/Fusi%C3%B3n-capital-humano-106436630773932"
                alt=""
              >
                <MDBIcon
                  fab
                  icon="facebook-f"
                  size="lg"
                  className="mx-2 white-text mr-md-4"
                ></MDBIcon>
              </a>
              <a
                href="https://www.linkedin.com/company/fusion-capital-humano/"
                alt=""
              >
                <MDBIcon
                  fab
                  icon="linkedin-in"
                  size="lg"
                  className="mx-2 white-text mr-md-4"
                ></MDBIcon>
              </a>
              <a href="https://www.instagram.com/fusioncapitalhumano/" alt="">
                <MDBIcon
                  fab
                  icon="instagram"
                  size="lg"
                  className="mx-2 white-text mr-md-4"
                ></MDBIcon>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.linkedin.com/in/agustin-cipollone/" alt="">
            {' '}
            Agustin Cipollone{' '}
            <MDBIcon
              fab
              icon="linkedin-in"
              size="lg"
              className="mx-2 white-text mr-md-4"
            ></MDBIcon>
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
