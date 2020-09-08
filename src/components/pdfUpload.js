import React from 'react'
import axios from 'axios';
import { MDBFileInput } from "mdbreact";
export default class PdfUpload extends React.Component {
  API_ENDPOINT =
      'https://pyehmuxkh4.execute-api.us-east-1.amazonaws.com/default/uploadPDF'
  state = {
    file: '',
    fileUrl: '',
    fileName: '',
  }

  handleChange = files => {
    this.setState({file: files[0] } , () => console.log(this.state))

    this.setState({
      fileUrl: URL.createObjectURL(files[0]),
      file: files[0],
      fileName: files[0].name,
    })
    this.saveFile();
  }

  saveFile = async () => {
    const response = await axios({
      method: 'GET',
      url: this.API_ENDPOINT
    })
    console.log('Uploading: ', this.state.file)
    let blobData = new Blob([this.state.file], { type: 'application/pdf' })
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: blobData
    })
  }

  render() {
    return (
      <div className="my-5">
        <MDBFileInput btnColor="secondary" btnTitle="Subir archivo PDF" textFieldTitle="Envianos tu CV!" getValue={this.handleChange}/>
      </div>
    )
  }
} 
