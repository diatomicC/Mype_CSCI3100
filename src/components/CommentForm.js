import React, { useEffect, useState } from "react";
import { auth, db } from "../index"; // Ensure this is the correct path to your Firestore initialization
import { collection, addDoc, getDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/comment.css";

function CommentForm({ itemID }) {
  // save info of current user
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (cred) => {
      setUser(cred);
    });
  }, []);

  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState("");

  // Check if all required fields are filled
  const isFormValid = comment.trim() !== "" && stars > 0;

  // submit new comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent form submission if validation fails
    if (!isFormValid) {
      alert("Please fill all the fields.");
      return; 
    }
    // Prevent form submission if not logged in
    if (!user) {
      alert("Please log in!");
      return;
    }

    // todo
    // only allow comment after purchasing this product
    // check user purhcase record

    // get current user username
    var snapshot = await getDoc(doc(db, "User", user.uid));
    const username = snapshot.data().username;

    const commentData = {
      username: username,
      stars: parseInt(stars, 10), // Ensure stars are stored as numbers
      comment,
    };

    try {
      // Add a new document in the "comment" collection (of this product)
      const itemRef = await doc(db, "Products", itemID);
      await addDoc(collection(itemRef, "comment"), commentData);
      // calculate average star, and update to database
      const querySnapshot = await getDocs(collection(itemRef, "comment")); // Changed to 'comment'
      var totalStars = 0;
      querySnapshot.docs.forEach(doc => {
        totalStars += doc.data().stars;
      });
      if (querySnapshot.docs.length > 0) {
        const average = totalStars / querySnapshot.docs.length;
        updateDoc(doc(db, "Products", itemID), {stars: average.toFixed(1)}); // Keep one decimal for the average
      } else {
        updateDoc(doc(db, "Products", itemID), {stars: 0}); // No comments means no average
      }

      // console.log("Comment added:", { username, stars, comment });
      alert("Comment successfully added!");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment.");
    }

    // Clear form fields after submission
    setStars(5);
    setComment("");
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
            required></textarea>
        </label>
      </div>
      {/* disable button if not filled in  */}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
