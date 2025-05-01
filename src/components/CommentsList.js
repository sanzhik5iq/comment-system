import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../redux/commentsSlice';

const CommentsList = () => {
  const dispatch = useDispatch();
  const { comments, status, error } = useSelector((state) => state.comments);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchComments());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = <div className="text-center">Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <ul className="list-unstyled">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
            <p><strong>Email:</strong> {comment.email}</p>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h3>Comments</h3>
      {content}
    </div>
  );
};

export default CommentsList;
