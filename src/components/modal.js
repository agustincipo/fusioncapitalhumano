import React, { Component } from 'react'
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact'
import servicesStyles from './services.module.scss'

class ModalPage extends Component {
  state = {
    modal4: false,
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }
  
  render() {
    return (
      <MDBContainer>
        <MDBBtn color={`${this.props.color}`} rounded onClick={this.toggle(4)}>
          <MDBIcon icon="clone left" /> Ver más
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal4}
          toggle={this.toggle(4)}
          size="lg"
          scrollable={true}
          centered
        >
          <MDBModalHeader toggle={this.toggle(4)}>
            <div className={servicesStyles.modalTitle}>
              <h3 className={`${this.props.color}-text`}>{this.props.title}</h3>
            </div>
          </MDBModalHeader>
          <MDBModalBody className="text-justify">
            {this.props.modal.map(data => {
              return [
                <h4 className="black-text"> {data.section.title} </h4>,
                <p className="black-text"> {data.section.content} </p>,
                data.section.items?(
                <ul>
                {
                data.section.items.map(item => {
                  return (
                    item.item
                    ?<li className="black-text"> {item.item}</li>
                    : ""
                  )
                })}
                </ul>
                ):null
              ]
            })}

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(4)}>
              Cerrar
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default ModalPage
