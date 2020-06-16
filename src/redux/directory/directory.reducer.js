const INITIAL_STATE = {
    sections: [{
        title: 'Practices',
        imageUrl: '  https://dtsvkkjw40x57.cloudfront.net/images/categories/20007/big_prEZmoNQuefnC60gZPwA_Screenshot_202019-09-19_20at_2012.44.51.png',
        id: 1,
        linkUrl: 'engineroom/practices'
      },
      {
        title: 'Sessions',
        imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/images/categories/20030/big_7583_2Fcategory_image_2F20030_2Ftp3DXi6R06eOZf4XZPnQ_Sessions_20Image_20Silva.png',
        id: 2,
        linkUrl: 'engineroom/sessions'
      },
      {
        title: 'Tactical Solutions',
        imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/699xnull/7583/uploads/12724c63-378b-4e11-8d4e-9d647ed661f2.png',
        id: 3,
        linkUrl: 'engineroom/tacticalsolutions'
      },
      {
        title: 'Formation Study',
        imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/images/categories/20032/big_7583_2Fcategory_image_2F20032_2FNyqodArLROy36ppIPoxe_Tactical_20Solutions.png',
        size: 'large',
        id: 4,
        linkUrl: 'engineroom/formationstudy'
      },
      {
        title: 'The Elite 5',
        imageUrl: 'https://dtsvkkjw40x57.cloudfront.net/1080xnull/7583/uploads/6d90bf29-3c15-4b28-8393-fd13147ac228.png',
        size: 'large',
        id: 5,
        linkUrl: 'engineroom/theelite5'
      }]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;