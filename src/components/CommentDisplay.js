import React, { useState, useEffect } from "react";
import { db } from "../index";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import "../styles/comment-display.css";

const DisplayComments = ({ itemID }) => {
  // save comments
  const [comments, setComments] = useState([]);

  // fetch comment of this products
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

  // get comment on load
  useEffect(() => {
    fetchComments();
  }, []);
  // get comment whenever the document is updated
  onSnapshot(doc(db, "Products", itemID), (doc) => {
    fetchComments();
  });

  return (
    <div className="projects-container">
      <h1>Comments List</h1>
      {/* display no comment text instead of nth, when there's no comment */}
      {comments.length === 0 ? <p>No comments yet.</p> : comments.map((comment) => (
        <div key={comment.id} className="project-card">
          <h2>{comment.username || "Anonymous"}</h2>
          <p>Stars: {comment.stars}</p>
          <p>Comment: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayComments;
