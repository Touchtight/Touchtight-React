import React, { Component } from 'react'; 
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import CardItem from '../card-item/carditem.component';

import './card-preview.styles.scss';

const CardPreview =({ title, items }) => (
    <div className='card-preview'>
        <h1 className='title'><Link to="/sessions">{title.toUpperCase()}</Link></h1>
        <div className='preview'> 
            {items.filter((item, idx) => idx < 6)
            .map(({ id, ...otherItemProps }) => (
                <CardItem key={id} {...otherItemProps} />
            ))}
        </div>
        </div>
);

export default CardPreview;