import React from 'react'
import axios from 'axios';

export default class PdfUpload extends React.Component {
  API_ENDPOINT =
      'https://pyehmuxkh4.execute-api.us-east-1.amazonaws.com/default/uploadPDF'
  state = {
    file: '',
    fileUrl: '',
    fileName: '',
  }

  handleChange = e => {
    const file = e.target.files[0]

    this.setState({
      fileUrl: URL.createObjectURL(file),
      file,
      fileName: file.name,
    })
  }

  saveFile = async () => {
    const response = await axios({
      method: 'GET',
      url: 'https://pyehmuxkh4.execute-api.us-east-1.amazonaws.com/default/uploadPDF'
    })
    console.log(response)

    console.log('Response: ', response.url)
    console.log('Uploading: ', this.state.file)

    let blobData = new Blob([this.state.file], { type: 'image/jpeg' })
    console.log('Uploading to: ', response.url)
    console.log('BLob', blobData)
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: blobData
    })
    console.log('Result: ', result)

    // Final URL for the user doesn't need the query string params
  }

  render() {
    return (
      <div className="border-top my-5">
        <input type="file" onChange={this.handleChange}></input>
        <img src={this.state.fileUrl} />
        <button onClick={this.saveFile}> Save File</button>
      </div>
    )
  }
}
