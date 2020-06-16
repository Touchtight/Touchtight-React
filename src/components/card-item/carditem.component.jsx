import React, { Component } from 'react'; 
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardItem = () => {
  return (
    <MDBRow >
      <MDBCol size="12" md="3" lg="4" xl="12">
        <MDBCard cascade className=" mb-5">
          <MDBCardImage
            cascade
            className='img-fluid'
            overlay="white-light"
            hover
            src='https://dtsvkkjw40x57.cloudfront.net/700xnull/images/programs/212086/horizontal/239HohVrTrGPqUkTXkjW_Screenshot_202019-09-21_20at_2017.22.50.png'
          />
          <MDBBtn
            floating
            tag='a'
            className='ml-auto mr-4 lighten-3 mdb-coalor'
            action
          >
            <MDBIcon icon='chevron-right' className="mdb-color lighten-3"/>
          </MDBBtn>
          <MDBCardBody cascade>
            <MDBCardTitle>Attacking in a 433</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Watch out.. we're coming for Coach Education in a big way.
            </MDBCardText>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
            <ul className='list-unstyled list-inline font-small'>
              <li className='list-inline-item pr-2 white-text'>
                <MDBIcon far icon='clock' /> 05/10/2015
              </li>
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon far icon='comments' className='mr-1' />
                  12
                </a>
              </li>
              <li className='list-inline-item pr-2'>
                <a href='#!' className='white-text'>
                  <MDBIcon fab icon='facebook-f' className='mr-1' />
                  21
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#!' className='white-text'>
                  <MDBIcon fab icon='twitter' className='mr-1' />5
                </a>
              </li>
            </ul>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardItem 