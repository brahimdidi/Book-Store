import { combineReducers, createStore } from 'redux';
import booksReducer from './books/bookRedux';
import categoriesReducer from './categories/cateRedux';

const reducers = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = createStore(combineReducers(reducers));
export default store;
