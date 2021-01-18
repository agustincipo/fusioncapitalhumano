import React, { Component } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBFileInput,
} from 'mdbreact'
import axios from 'axios'

class ContactFormCandidatos extends Component {
  fileInput = React.createRef()
  //Refactor 1 = state = {name:{value,valid}} y asi con todos

  state = {
    name: '',
    email: '',
    question: '',
    file: '',
    fileURL: '',
    fileName: '',
    nameValid: false,
    emailValid: false,
    questionValid: false,
    fileValid: null,
    formValid: null,
    message: null,
    messageType: null,
  }
  UPLOAD_FILE_ENDPOINT =
    'https://pyehmuxkh4.execute-api.us-east-1.amazonaws.com/default/uploadPDF'

  SEND_MAIL_ENDPOINT =
    'https://bvjewnsi2k.execute-api.sa-east-1.amazonaws.com/dev'

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
    if (
      this.state.emailValid &&
      this.state.nameValid &&
      this.state.questionValid &&
      this.state.fileValid
    ) {
      this.saveFile().then(result => {
        console.log('RESULT from saveFile()',result)
        this.setState({fileURL:result.url})
        this.sendMail(this.data)
          .then(response => {
            console.log('Response FINAL ====>', response)
            this.setState({
            message:
              'Gracias por contactarse con Fusion. Recibira nuestra respuesta en su mail a la brevedad',
            messageType: 'info',
            formValid: true
          })
          console.log("mensaje" + this.state.formValid)
        })
        .catch(error => {
          this.setState({
            message:
              'Ocurrio un error. Lo sentimos, intente mas tarde por favor.',
            messageType: 'danger',
            formValid: false
          })
        })
      })
    }
  }
  sendMail = async () => {
    this.setState({fileURL:this.state.fileURL.split('?')[0]})
    const data = {
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
      urlPDF: this.state.fileURL
    }
    console.log("URLLLLL" + this.state.fileURL)
    const response = await fetch(this.SEND_MAIL_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    console.log(response)
    return response
  }

  handleFileChange = files => {
    if (files[0].size < 10000000 && files[0].type === 'application/pdf') {
      this.setState({
        fileUrl: URL.createObjectURL(files[0]),
        file: files[0],
        fileName: files[0].name,
        fileValid: true,
      })
    } else {
      this.setState({
        fileValid: false,
      })
    }
  }
  /*Refactor que pasa en Mozilla? No andaba el blobData*/
  saveFile = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: this.UPLOAD_FILE_ENDPOINT,
      })
      this.setState({ fileName: response.data.photoFilename })
      console.log('Uploading: ', this.state.file)
      console.log('Size: ', this.state.file.size)
      if (this.state.fileValid && this.state.fileValid != null) {
        let blobData = new Blob([this.state.file], { type: 'application/pdf' })
        const result = await fetch(response.data.uploadURL, {
          method: 'PUT',
          body: blobData,
        })
        this.setState({fileURL:result.url})
        return result;
      } else {
        console.log('INVALID FILE ')
      }
    } catch (e) {
      console.log('invalid file', e)
    }
  }
  render() {
    const hello = 'Say Hello to learning Props/State in React!'

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

                  <MDBFileInput
                    /* className="invalid" Muestra linea roja en el input */
                    className={
                      this.state.fileValid
                        ? 'valid'
                        : this.state.fileValid != null
                        ? 'invalid'
                        : ''
                    }
                    required
                    btnColor="secondary"
                    btnTitle="Subir archivo PDF"
                    textFieldTitle="Envianos tu CV!"
                    getValue={this.handleFileChange}
                  >
                    <div className="invalid-feedback">Archivo invalido</div>
                  </MDBFileInput>
                  <FileError
                    messagge={hello}
                    fileValid={this.state.fileValid}
                  />
                  {/* <PdfUpload onClick={this.toggleAddFile}/> */}
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" color="secondary" rounded>
                    Enviar
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
              <FormMessagge
            messageType={this.state.messageType}
            message={this.state.message}
            formValid={this.state.formValid}
          />

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

const FileError = ({ messagge, fileValid }) =>
  !fileValid && fileValid != null ? (
    <div class="alert alert-danger" role="alert">
      Archivo invalido (debe ser formato PDF y menor a 10MB!)
    </div>
  ) : null;

const FormMessagge = ({ message, messageType, formValid }) =>
  formValid != null ? (
    <div className= {' alert alert-' + messageType} role="alert"> 
      <p>{message}</p>
    </div>
  ) : null;

export default ContactFormCandidatos
