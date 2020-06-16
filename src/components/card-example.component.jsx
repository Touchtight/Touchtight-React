import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import { MDBAnimation } from "mdbreact";


class CardExample extends Component {
  render() {
    return (
    <>
    <MDBAnimation reveal type="fadeIn" duration="1.s">
      <MDBRow list className="mt-5 mb-5">
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade >
            <MDBCardTitle className="d-flex justify-content-center">Practices</MDBCardTitle>
                <MDBCardText className="d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn color="primary" href="engineroom/practices">View More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
            <MDBCardTitle className="d-flex justify-content-center">Sessions</MDBCardTitle>
                <MDBCardText className="d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn color="primary" href="engineroom/sessions">View More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
            <MDBCardTitle className="d-flex justify-content-center">Tactical Analysis</MDBCardTitle>
                <MDBCardText className="d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn color="primary" href="engineroom/tacticalanalysis">View More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
            <MDBCard wide>
                <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
                <MDBCardBody cascade>
                <MDBCardTitle className="d-flex justify-content-center">Formation Study</MDBCardTitle>
                <MDBCardText className="d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                <MDBBtn color="primary" href="engineroom/formationstudy">View More</MDBBtn>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
      </MDBRow>
      </MDBAnimation>
        </>
    )
  }
}

export default CardExample;