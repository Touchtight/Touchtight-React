import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { MDBAnimation } from "mdbreact";


const CarouselPage = () => {
  return (
    <MDBAnimation reveal type="fadeIn" duration="1s">
    <MDBContainer fluid className="mb-5 d-flex justify-content-center">
      <MDBRow>
        <MDBCol md="12">
          <MDBCarousel center activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                  {/* <source src="https://vimeo.com/424752690" type="video/mov" /> */}
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                </video>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <video className="video-fluid d-block" autoPlay loop>
                  <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                </video>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </MDBAnimation>
  );
}

export default CarouselPage;