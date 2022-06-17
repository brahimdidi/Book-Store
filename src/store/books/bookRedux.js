const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const ID = () => `_${Math.random().toString(36).substr(2, 9)}`;

const initialState = [
  { title: 'the killer', author: 'Amir', id: ID() },
  { title: ' God Empire', author: 'vito', id: ID() },
  { title: ' Meta modernity', author: 'Myself', id: ID() },
];
const bookReducer = (stateBooks = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...stateBooks, action.payload];
    case REMOVE_BOOK:
      return stateBooks.filter((b) => b.id !== action.payload.id);

    default: return stateBooks;
  }
};

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export default bookReducer;
