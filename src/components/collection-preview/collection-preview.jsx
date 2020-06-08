import React from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview =({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'><Link to="/sessions">{title.toUpperCase()}</Link></h1>
        <div className='preview'> 
            {items.filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;

