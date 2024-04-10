// CommentForm.js
import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually call an onSubmit prop or otherwise handle the form data
    console.log({ username, stars, comment });
    onSubmit({ username, stars, comment });
    setUsername('');
    setStars(5);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Stars:
          <select value={stars} onChange={(e) => setStars(e.target.value)}>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
