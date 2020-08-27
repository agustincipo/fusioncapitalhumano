import React from 'react';

const ModalPage =props=>{

    const content = props
    return (
      <MDBContainer>
        <MDBBtn color="info" onClick={this.toggle(14)}>MDBModal</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
          <div className="text-red">
          <MDBModalBody>
            content
            {content}
          </MDBModalBody>
          </div>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
}
export default ModalPage
