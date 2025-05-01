import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/commentsSlice';

const AddCommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, body };
    dispatch(addComment(newComment));
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Comment:</label>
        <textarea
          id="body"
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Add Comment</button>
    </form>
  );
};

export default AddCommentForm;
