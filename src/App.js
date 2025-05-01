import React from 'react';
import './App.css';
import CommentsList from './components/CommentsList';
import AddCommentForm from './components/AddCommentForm';

function App() {
  return (
    <div className="App">
      <h1>Comment System</h1>
      <AddCommentForm />
      <CommentsList />
    </div>
  );
}

export default App;
