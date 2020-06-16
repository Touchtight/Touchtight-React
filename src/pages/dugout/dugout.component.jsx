import React from 'react';
import Directory from '../../components/directory/directory.component';
import './dugout.styles.scss';
import CollapsePage from '../../components/collapsepage.component';
import MediaObjectPage from '../../components/mediaobjectpage.component';
import CardExample from '../../components/card-example.component';
import MultiCarouselPage from '../../components/card-carousel/card-carousel.component';
import VideoCarousel from '../../components/video-carousel/video-carousel.component';
import TestimonialsPage from '../../components/testimonial/testimonial.component';
import TabsDropdown from '../../components/tab.component';
import CardItem from '../../components/card-item/carditem.component'
import FooterPage from '../../components/footer.component';
import ContactPage from '../../components/contactus.component';
import FeaturesPage from '../../components/features-page.component';
import ClubTabsDropdown from '../../components/clubtab.component';

const Dugout = () => (
    <>  
        
    <div className='dugout'>
        <ClubTabsDropdown />
        <CardExample />
        <CardExample />
        <MultiCarouselPage />
        <FeaturesPage />    
        {/* <Directory />  */}
        {/* <CardItem /> */}
    </div>
    <ContactPage />
    <FooterPage />
    </>
);

export default Dugout;