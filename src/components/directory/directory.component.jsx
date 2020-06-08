import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                  title: 'Practices',
                  imageUrl: '  https://dtsvkkjw40x57.cloudfront.net/images/categories/20007/big_prEZmoNQuefnC60gZPwA_Screenshot_202019-09-19_20at_2012.44.51.png',
                  id: 1,
                  linkUrl: 'practices'
                },
                {
                  title: 'Sessions',
                  imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/images/categories/20030/big_7583_2Fcategory_image_2F20030_2Ftp3DXi6R06eOZf4XZPnQ_Sessions_20Image_20Silva.png',
                  id: 2,
                  linkUrl: 'sessions'
                },
                {
                  title: 'Tactical Analysis',
                  imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/699xnull/7583/uploads/12724c63-378b-4e11-8d4e-9d647ed661f2.png',
                  id: 3,
                  linkUrl: 'tactical-analysis'
                },
                {
                  title: 'Formation Study',
                  imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/images/categories/20032/big_7583_2Fcategory_image_2F20032_2FNyqodArLROy36ppIPoxe_Tactical_20Solutions.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'formation-study'
                },
                {
                  title: 'The Elite 5',
                  imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/1080xnull/7583/uploads/6d90bf29-3c15-4b28-8393-fd13147ac228.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'the-elite-5'
                }]
            }
        }

        render() {
            return (
                <div className='directory-menu'>
                    {this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            )
        }
    }   

export default Directory;