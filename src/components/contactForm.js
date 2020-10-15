import React, { Component } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBInput,
} from 'mdbreact'

export default class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    question: '',
    nameValid: null,
    emailValid: null,
    questionValid: null,
    formValid: null,
    message: null,
    messageType: null,
  }
  FAKE_GATEWAY_URL = 'https://bvjewnsi2k.execute-api.sa-east-1.amazonaws.com/de'

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    const valid = name + 'Valid'
    this.setState({
      [valid]: target.validity.valid,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.className += ' was-validated'
    console.log(this.state.emailValid)
    if (
      this.state.emailValid &&
      this.state.nameValid &&
      this.state.questionValid
    ) {
      console.log('Peticion valida')
      this.sendMail()
        .then(response => {
          console.log('Response FINAL ====>', response)
          this.setState({
            message:
              'Gracias por contactarse con Fusion. Recibira nuestra respuesta en su mail a la brevedad',
            messageType: 'info',
            formValid: true
          })
        })
        .catch(error => {
          this.setState({
            message:
              'Ocurrio un error. Lo sentimos, intente mas tarde por favor.',
            messageType: 'danger',
            formValid: false
          })
        })
    } else {
      this.setState({
        message:
          'Revise los campos invalidos del formulario e intente nuevamente.',
        messageType: 'danger',
        formValid: false
      })
    }
  }

  sendMail = async () => {
    console.log('FIN del metodo' + response)

    const data = {
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
    }
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
    console.log('FIN del metodo' + response)
    return response
  }

  render() {
    const hello = 'Say Hello to learning Props/State in React!'

    return (
      <div id="section1" className="border-top my-5">
        <MDBContainer border>
          <MDBRow border>
            <MDBCol border md="12">
              <form
                className="needs-validation"
                onSubmit={this.handleSubmit}
                noValidate
              >
                <h2 className="text-center h1-responsive font-weight-bold my-5">
                  Contactanos
                </h2>
                <div className="grey-text">
                  <MDBInput
                    className={
                      this.state.nameValid
                        ? 'valid'
                        : this.state.nameValid != null
                        ? 'invalid'
                        : ''
                    }
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
                    className={
                      this.state.emailValid
                        ? 'valid'
                        : this.state.emailValid != null
                        ? 'invalid'
                        : ''
                    }
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
                    className={
                      this.state.questionValid
                        ? 'valid'
                        : this.state.questionValid != null
                        ? 'invalid'
                        : ''
                    }
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
          <FormMessagge
            messageType={this.state.messageType}
            message={this.state.message}
            formValid={this.state.formValid}
          />
        </MDBContainer>
      </div>
    )
  }
}

const FormMessagge = ({ message, messageType, formValid }) =>
  !formValid && formValid != null ? (
    
    <div className= {' alert alert-' + messageType} role="alert"> 
      <p>{message}</p>
    </div>
  ) : null
