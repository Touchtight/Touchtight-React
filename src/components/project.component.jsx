import React, { Component } from 'react';
import { MDBLightbox, MDBContainer } from 'mdbreact';

class LightboxPagePractices extends Component {
  state = {
    presentation: [
      {
        src:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg',
        description: 'SKILL'
      },
      {
        src:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg',
        description: 'AGE GROUP'
      },
      {
        src:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg',
        description: 'NUMBER OF PLAYERS'
      },
      {
        src:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg',
        description: 'PRACTICE TYPE'
      },
    ]
  };

  render() {
    return (
      <MDBContainer className="mb-5" fluid>
        {/* <h2 className='h1 text-center text-uppercase font-weight-bold mt-5 mb-3 mt-5'>
          PRACTICES
        </h2> */}
        <p className='text-center text-uppercase font-weight-bold'>
          INDIVIDUAL PRACTICE EXERCISES FOR PLAYERS AND COACHES OF ALL AGE GROUPS AND SKILL LEVELS. 
        </p>
        <p className='section-description mt-1 pt-2 text-center'>
        With 100s of animated football practices to support coaches in the development of both adult and youth teams, our creative football coaching platform encourages learning through fun and competitive practice. These animated exercises provide every coach with the opportunity to expand their knowledge and share these football training methods with fellow coaches and players. Key Coaching Points and progressions can be applied on FA Coaching courses to support Coach Development.
        </p>
        <MDBLightbox fluid md='3' images={this.state.presentation} noMargins />
      </MDBContainer>
    );
  }
}

export default LightboxPagePractices;