// CommentDisplay.js
import React from 'react';
import "../styles/comment-display.css";

function CommentDisplay({ comments }) {
  return (
    <div className="comment-section">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-username"><strong>Username:</strong> {comment.username}</div>
          <div className="comment-stars"><strong>Stars:</strong> {'★'.repeat(comment.stars)}</div>
          <div className="comment-text"><strong>Comment:</strong> {comment.comment}</div>
        </div>
      ))}
    </div>
  );
}

export default CommentDisplay;

