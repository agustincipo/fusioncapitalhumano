import React from 'react'

export default class PdfUpload extends React.Component {
  API_ENDPOINT =
    'https://t7zze0mr4i.execute-api.us-east-2.amazonaws.com/default/getPresignedURL'

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

  saveFile = e => {
    ;(async () => {
        const response = await fetch(
          'https://t7zze0mr4i.execute-api.us-east-2.amazonaws.com/default/getPresignedURL',
          {
            method: 'GET',
            mode: 'cors',
          }
        )
        console.log(response)


      console.log('Response: ', response.url)
      console.log('Uploading: ', this.state.file)

      let blobData = new Blob([this.state.file], { type: 'image/jpeg' })
      console.log('Uploading to: ', response.url)
      console.log('BLob', blobData)
      const result = await fetch(
        response.url,
        {
          method: 'PUT',
          body: blobData,
          headers: {
            'Access-Control-Allow-Origin': '*',
          }

          
        }
      )

      console.log('Result: ', result)
      // Final URL for the user doesn't need the query string params
    })()
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
