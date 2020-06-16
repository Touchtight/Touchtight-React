import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import TabsDropdown from '../../components/tab.component';
import CardItem from '../../components/card-item/carditem.component'
import LightboxPage from '../../components/project.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import ContactPage from '../../components/contactus.component';
import FooterPage from '../../components/footer.component';
import ProjectsPage from './coachingthemespage.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <TabsDropdown />
      <ProjectsPage />
      {/* <h2 className='title mt-5'>{title.toUpperCase()}</h2> */}
      {/* <LightboxPage /> */}
      <div className='items'>
     
        {items.map(item => (
          <>
          <CardItem />
          {/* <CollectionItem key={item.id} item={item} /> */}
          </>
        ))}
      </div>
      <ContactPage />
      <FooterPage />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);