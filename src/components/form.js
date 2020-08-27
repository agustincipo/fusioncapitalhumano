import React from "react";
import { MDBInput } from "mdbreact";

class FormsPage extends React.Component {
  render() {
    return (
      <form className="was-validated" noValidate>
        <MDBInput
          type="checkbox"
          id="customControlValidation1"
          label="Check this custom checkbox"
          required
        >
          <div className="invalid-feedback">
            Example invalid feedback text
          </div>
        </MDBInput>

        <MDBInput
          type="radio"
          id="customControlValidation2"
          name="radio-stacked"
          required
          label="Toggle this custom radio"
        />

        <MDBInput
          type="radio"
          id="customControlValidation3"
          name="radio-stacked"
          required
          label="Or toggle this other custom radio"
        >
          <div className="invalid-feedback">
            Example invalid feedback text
          </div>
        </MDBInput>
      </form>
    );
  }
}

export default FormsPage;