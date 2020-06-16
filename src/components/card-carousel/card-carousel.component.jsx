import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import { MDBAnimation } from "mdbreact";


import './card-carousel.styles.scss';

const MultiCarouselPage = () => {
  return (
    <MDBAnimation reveal type="fadeIn" duration="1.5s">
    <MDBContainer fluid className="mt-5">
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner >
          <MDBRow >

            <MDBCarouselItem itemId="1">
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>Liverpool FC</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol  md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol  md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol  md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol  md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          




            <MDBCarouselItem itemId="2">
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>




            <MDBCarouselItem itemId="3">
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              
              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="2">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </MDBAnimation>
  );
}

export default MultiCarouselPage;


// import React from 'react';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBBtn
// } from 'mdbreact';

// const MultiCarouselPage = () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel activeItem={1} length={6} slide={true} showControls={true} showIndicators={true} multiItem>
//         <MDBCarouselInner>
//           <MDBRow className='d-flex justify-content-center'>
//             <MDBCarouselItem itemId='1'>
//               <MDBCol md='6'>
//                 <MDBCard className='mb-2 mx-auto'>
//                   <MDBCardImage
//                     className='img-fluid'
//                     src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                     </MDBCardText>
//                     <MDBBtn color='primary'>MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId='2'>
//               <MDBCol md='6'>
//                 <MDBCard className='mb-2'>
//                   <MDBCardImage
//                     className='img-fluid'
//                     src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                     </MDBCardText>
//                     <MDBBtn color='primary'>MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId='3'>
//               <MDBCol md='6'>
//                 <MDBCard className='mb-2'>
//                   <MDBCardImage
//                     className='img-fluid'
//                     src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                     </MDBCardText>
//                     <MDBBtn color='primary'>MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>

//             <MDBCarouselItem itemId='4'>
//               <MDBCol md='6'>
//                 <MDBCard className='mb-2'>
//                   <MDBCardImage
//                     className='img-fluid'
//                     src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                     </MDBCardText>
//                     <MDBBtn color='primary'>MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId='5'>
//               <MDBCol md='6'>
//                 <MDBCard className='mb-2'>
//                   <MDBCardImage
//                     className='img-fluid'
//                     src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                     </MDBCardText>
//                     <MDBBtn color='primary'>MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId='6'>
//               <MDBCol md='6'>
//                 <MDBCard className='mb-2'>
//                   <MDBCardImage
//                     className='img-fluid'
//                     src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                     </MDBCardText>
//                     <MDBBtn color='primary'>MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//           </MDBRow>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// };

// export default MultiCarouselPage;