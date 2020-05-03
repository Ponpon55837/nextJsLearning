import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class FileUpload extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }

    this.form = React.createRef()
  }

  handleChange = (e) => {
    this.setState({file: e.target.files[0]})

    console.log('fileupload handleChange event.target.files', e.target.files)
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    console.log('fileupload handleSubmit this.state.file',this.state.file)

    const data = new FormData()
    data.append('files', this.state.file)
    const upload_res = await axois.post('http//localhost:1337/upload')
    return ({data})

    console.log('fileupload.handleSubmit upload_res', upload_res)
  }

  render = () => {
    return (
      <>
        <Form.File id="formcheck-api-custom" custom ref={this.form}>
          <input onChange={this.handleChange} type='file' />
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form.File>
      </>
    )
  }
}

export default FileUpload
