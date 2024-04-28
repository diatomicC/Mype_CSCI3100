import React, { useState, useEffect } from "react";
import { db } from "../index"; // Ensure this is the correct path to your Firestore initialization
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import "../styles/comment-display.css";

const DisplayComments = ({ itemID }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const itemRef = await doc(db, "Products", itemID);
      const querySnapshot = await getDocs(collection(itemRef, "comment")); // Changed to 'comment'
      const commentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  onSnapshot(doc(db, "Products", itemID), (doc) => {
    fetchComments();
  });

  return (
    <div className="projects-container">
      <h1>Comments List</h1>
      {comments.length === 0 ? <p>No comments yet.</p> : comments.map((comment) => (
        <div key={comment.id} className="project-card">
          <h2>{comment.username || "Anonymous"}</h2>
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
