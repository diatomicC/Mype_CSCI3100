import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import BookmarkIcon from "../icons/bookmark.svg";
import LikeIcon from "../icons/heart.svg";
import BackIcon from "../icons/arrowLeft.svg";
import CommentForm from '../components/CommentForm';
import CommentDisplay from '../components/CommentDisplay';

import "../styles/saleScreen.css";

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
      const totalStars = comments.reduce((acc, comment) => acc + parseInt(comment.stars, 10), 0);
      const average = totalStars / comments.length;
      setAverageStars(average.toFixed(1)); // Keep one decimal for the average
    } else {
      setAverageStars(0); // No comments means no average
    }
  }, [comments]);


  return (
    <>
      {/* detailed information of single selected product */}
      <div class="detailed-info-container">
        {/* left section */}
        <div class="left-content">
          <Link class="back-btn" to="/">
            <img src={BackIcon} alt="" />
          </Link>
          <div class="image-viewer">
            <img src="" alt="product img"></img>
          </div>
          <div class="long-description">{item?.description}</div>
          <div>
            <h2>Leave a Comment</h2>
            <CommentForm onSubmit={addComment} />
          </div>
        </div>

        {/* right section */}
        <div class="right-content">
          {/* display all tags of this product */}
          <div class="tag-list">
            <div class="item-tag">
              {item?.tags.map((tag, index) => {
                return " #" + tag;
              })}
            </div>
          </div>
          {/* title, item id */}
          <div class="title">
            {item?.title} (@{item && item["public ID"]})
          </div>
          {/* author */}
          <div class="author">{item?.author}</div>
          {/* short description (same as one in home page?) */}
          <div class="short-description">{item?.description}</div>
          {/* sales info */}
          <div class="saleData">
            <div class="upper-saleData">
              <div class="purchasedCount">{item?.ordered} People ordered</div>
              <div class="price">${item?.price}</div>
            </div>
            <div class="lower-saleData">
              <div>
                {/* display number of likes, saved */}
                <div class="ranking">
                  <div class="item-liked">
                    <img src={LikeIcon} alt="" /> {item?.liked}
                  </div>
                  <div class="item-saved">
                    <img src={BookmarkIcon} alt="" /> {item?.saved}
                  </div>
                </div>

                {/* TODO: Make into graphics */}
                <h2>Average Stars: {averageStars}</h2>
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
          <div class="review-container">
            <CommentDisplay comments={comments} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleScreen;
