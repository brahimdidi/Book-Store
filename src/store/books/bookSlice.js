import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'IZabtw4tkspQrnEJMNd7';
const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const generateID = () => `_${Math.random().toString(36).substr(2, 9)}`;

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks', async () => {
    const res = await fetch(`${appUrl}/${appId}/books`);
    const books = await res.json();
    const bookObj = [Object.keys(books).map((key) => (
      {
        id: key,
        ...books[key][0],
      }
    ))];
    return bookObj;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook', async ({ title, author, category }, thunkAPI) => {
    await fetch(`${appUrl}/${appId}/books`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: generateID(),
        title,
        author,
        category,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => thunkAPI.dispatch(fetchBooks()));
    const { books } = thunkAPI.getState().books;
    return books;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook', async (bookId, thunkAPI) => {
    await fetch(`${appUrl}/${appId}/books/${bookId}`, {
      method: 'DELETE',
    }).then(() => thunkAPI.dispatch(fetchBooks()));
    const { books } = thunkAPI.getState().books;
    return books;
  },
);

const bookSlice = {
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => action.payload[0],
    [addBook.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
};

const booksSlice = createSlice(bookSlice);
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
