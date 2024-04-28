import React, { useEffect, useState } from 'react';
import { auth, db } from '../index'; // Ensure this is the correct path to your Firestore initialization
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import "../styles/comment.css";

function CommentForm({ itemID }) {
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState('');

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (cred) => {
      setUser(cred);
    });
  }, []);

  // Check if all required fields are filled
  const isFormValid = comment.trim() !== '' && stars > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fill all the fields.');
      return; // Prevent form submission if validation fails
    }

    // get current user username
    var snapshot = await getDoc(doc(db, "User", user.uid));
    const username = snapshot.data().username;

    const commentData = {
      username: username,
      stars: parseInt(stars, 10), // Ensure stars are stored as numbers
      comment
    };

    try {
      // Add a new document in the "comment" collection
      const itemRef = await doc(db, 'Products', itemID);
      await addDoc(collection(itemRef, "comment"), commentData);
      console.log('Comment added:', { username, stars, comment });
      alert('Comment successfully added!');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment.');
    }

    // Clear form fields after submission
    setStars(5);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
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
