const CHECK_STATUS = 'CHECK_STATUS';

const cateReducer = (categories = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRACTION';

    default: return categories;
  }
};

export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

export default cateReducer;
