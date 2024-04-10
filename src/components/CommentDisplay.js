// CommentDisplay.js
import React from 'react';

function CommentDisplay({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div><strong>Username:</strong> {comment.username}</div>
          <div><strong>Stars:</strong> {'★'.repeat(comment.stars)}</div>
          <div><strong>Comment:</strong> {comment.comment}</div>
        </div>
      ))}
    </div>
  );
}

export default CommentDisplay;

