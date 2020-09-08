import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBInput,
} from 'mdbreact'
import PdfUpload from './pdfUpload'
export default class ContactFormCandidatos extends React.Component {
  state = {
    name: '',
    email: '',
    question: '',
  }
  FAKE_GATEWAY_URL =
    'https://bvjewnsi2k.execute-api.sa-east-1.amazonaws.com/dev'

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.className += ' was-validated'
    if (event.target.noValidate) {
    } else {
      const data = {
        name: this.state.name,
        esmail: this.state.email,
        question: this.state.question,
      }
      try {
        ;(async () => {
          const response = await fetch(
            'https://bvjewnsi2k.execute-api.sa-east-1.amazonaws.com/de',
            {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              body: JSON.stringify(data),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }
          )
          console.log(response)
        })()
      } catch (error) {
        console.log(error)
      }
    }
  }

  render() {
    return (
      <div id="section1" className="my-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form
                className="needs-validation"
                onSubmit={this.handleSubmit}
                noValidate
              >
                <div className="grey-text">
                  <MDBInput
                    label="Nombre"
                    icon="user"
                    group
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                    id="defaultFormRegisterNameEx"
                    required
                  >
                    <div className="invalid-feedback">
                      Debes ingresar un nombre
                    </div>
                  </MDBInput>
                  <MDBInput
                    label="E-Mail"
                    icon="envelope"
                    group
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    id="materialFormRegisterConfirmEx3"
                    required
                  >
                    <div className="invalid-feedback">
                      Debes ingresar un email valido
                    </div>
                  </MDBInput>
                  <MDBInput
                    label="Mensaje"
                    icon="pencil-alt"
                    group
                    type="textarea"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleInputChange}
                    required
                  >
                    <div className="invalid-feedback">
                      Debes ingresar un mensaje
                    </div>
                  </MDBInput>
                  <PdfUpload/>
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" color="secondary" rounded>
                    Enviar
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}
