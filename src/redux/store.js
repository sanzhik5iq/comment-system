// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer
  }
});
