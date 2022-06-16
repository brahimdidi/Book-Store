const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (books = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...books,
        { id: 1, description: action.payload.description },
      ];
    case REMOVE_BOOK:
      return books.filter((b) => b.id !== action.payload.id);

    default: return books;
  }
};

export const addBook = () => ({
  type: 'ADD_BOOK',
});

export const removeBook = () => ({
  type: 'REMOVE_BOOK',
});

export default bookReducer;
