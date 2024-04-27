import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import BookmarkIcon from "../icons/bookmark.svg";
import StarIcon from "../icons/star.svg";
import BackIcon from "../icons/arrowLeft.svg";
import CommentForm from "../components/CommentForm";
import CommentDisplay from "../components/CommentDisplay";

import "../styles/saleScreen.css";
import Header from "../components/Header";

function SaleScreen({ db }) {
  const { itemID } = useParams();
  const [item, setItem] = useState();

  // fetch single data of this product
  const docRef = doc(db, "Products", itemID);
  useEffect(() => {
    getDoc(docRef).then((doc) => {
      setItem(doc.data());
    });
  }, []);

  const [comments, setComments] = useState([]);
  const [averageStars, setAverageStars] = useState(0);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  //Calculate Average Stars
  useEffect(() => {
    if (comments.length > 0) {
      const totalStars = comments.reduce(
        (acc, comment) => acc + parseInt(comment.stars, 10),
        0
      );
      const average = totalStars / comments.length;
      setAverageStars(average.toFixed(1)); // Keep one decimal for the average
    } else {
      setAverageStars(0); // No comments means no average
    }
    // todo
    // save to database
  }, [comments]);

  return (
    <>
      <Header />
      {/* detailed information of single selected product */}
      <div className="detailed-info-container">
        {/* left section */}
        <div className="left-content">
          <Link className="back-btn" to="/">
            <img src={BackIcon} alt="" />
          </Link>
          <div className="image-viewer">
            <img src="" alt="product img"></img>
          </div>
          <div className="long-description">{item?.description}</div>
          <div>
            <h2>Leave a Comment</h2>
            <CommentForm onSubmit={addComment} />
          </div>
        </div>

        {/* right section */}
        <div className="right-content">
          {/* display all tags of this product */}
          <div className="tag-list">
            <div className="item-tag">
              {item?.tags.map((tag, index) => {
                return " #" + tag;
              })}
            </div>
          </div>
          {/* title, item id */}
          <div className="title">
            {item?.title} (@{item?.public_ID})
          </div>
          {/* author */}
          <div className="author">{item?.author}</div>
          {/* short description (same as one in home page?) */}
          <div className="short-description">{item?.description}</div>
          {/* sales info */}
          <div className="saleData">
            <div className="upper-saleData">
              <div className="purchasedCount">{item?.ordered} People ordered</div>
              <div className="price">${item?.price}</div>
            </div>
            <div className="lower-saleData">
              <div>
                {/* display number of stars, saved */}
                <div className="ranking">
                  <div className="item-stars">
                    <img src={StarIcon} alt="" /> {item?.stars}
                  </div>
                  <div className="item-saved">
                    <img src={BookmarkIcon} alt="" /> {item?.saved}
                  </div>
                </div>
              </div>
              <div className="interact">
                {/* todo */}
                {/* to shopping cart */}
                <button className="purchase-btn" style={{ flex: "1" }}>
                  Save to Cart
                </button>
                {/* todo */}
                {/* to payment directly */}
                <button className="purchase-btn" style={{ flex: "2" }}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
          {/* users reviews*/}
          <div>
            <CommentDisplay comments={comments} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleScreen;
