import React, { useState, useEffect } from 'react';
import { db } from '../index'; // Ensure this is the correct path to your Firestore initialization
import { collection, getDocs } from 'firebase/firestore';
import "../styles/comment-display.css";

const DisplayComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'comment')); // Changed to 'comment'
        const commentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments from Firestore:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="projects-container">
      <h1>Comments List</h1>
      {comments.map(comment => (
        <div key={comment.id} className="project-card">
          <h2>{comment.username || 'Anonymous'}</h2>
          {/* Assuming comments might not have images */}
          <p>Stars: {comment.stars}</p>
          <p>Comment: {comment.comment}</p>
          {/* Additional comment details can be added here */}
        </div>
      ))}
    </div>
  );
};

export default DisplayComments;
