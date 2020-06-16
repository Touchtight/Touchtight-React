import React from 'react';
import { MDBAnimation } from "mdbreact";


// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview =({ title, items }) => (
    <MDBAnimation reveal type="fadeInUp" duration="1.5s">
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>  
            {items.filter((item, idx) => idx < 4)
            .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
    </MDBAnimation>
);

export default CollectionPreview;

