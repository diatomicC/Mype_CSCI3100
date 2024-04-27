import React, { useState } from 'react';
import { db } from '../index'; // Ensure this is the correct path to your Firestore initialization
import { collection, addDoc } from 'firebase/firestore';
import "../styles/comment.css";

function CommentForm() {
  const [username, setUsername] = useState('');
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState('');

  // Check if all required fields are filled
  const isFormValid = username.trim() !== '' && comment.trim() !== '' && stars > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fill all the fields.');
      return; // Prevent form submission if validation fails
    }

    const commentData = {
      username,
      stars: parseInt(stars, 10), // Ensure stars are stored as numbers
      comment
    };

    try {
      // Add a new document in the "comment" collection
      await addDoc(collection(db, "comment"), commentData);
      console.log('Comment added:', { username, stars, comment });
      alert('Comment successfully added!');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment.');
    }

    // Clear form fields after submission
    setUsername('');
    setStars(5);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
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
            required
          ></textarea>
        </label>
      </div>
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
}

export default CommentForm;
