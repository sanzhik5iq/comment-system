// src/redux/commentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Создаем асинхронный thunk для загрузки комментариев
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null
  },
  reducers: {
    // Добавление нового комментария (если нужно будет)
    addComment(state, action) {
      state.comments.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
