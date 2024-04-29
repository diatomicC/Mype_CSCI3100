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
import { db } from "../index";

function SaleScreen() {
  // read item ID from url
  const { itemID } = useParams();
  const [item, setItem] = useState();

  // fetch single data of this product
  useEffect(() => {
    const docRef = doc(db, "Products", itemID);
    getDoc(docRef).then((doc) => {
      setItem(doc.data());
    });
  }, []);

  return (
    <>
      <Header />

      {/* detailed information of single selected product */}
      <div className="detailed-info-container">
        {/* left section */}
        <div className="left-content">
          {/* back button */}
          <Link className="back-btn" to="/">
            <img src={BackIcon} alt="" />
          </Link>
          {/* product image */}
          <div className="image-viewer">
            <img src={item?.coverImage} alt="product img"></img>
          </div>
          {/* detailed description */}
          <div
            className="long-description"
            dangerouslySetInnerHTML={{
              __html: item?.detailedDescription,
            }}></div>
          {/* leave comment section */}
          <div style={{ marginTop: "20px" }}>
            <h2>Leave a Comment</h2>
            <CommentForm itemID={itemID} />
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
          {/* short description */}
          <div className="short-description">{item?.shortDescription}</div>
          {/* sales info */}
          <div className="saleData">
            <div className="upper-saleData">
              <div className="purchasedCount">
                {item?.ordered} People ordered
              </div>
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
                {/* to shopping cart */}
                <button
                  className="purchase-btn"
                  style={{ flex: "1" }}
                  onClick={() => {
                    // todo
                    // add to shopping cart
                    console.log("add to shopping cart");
                  }}>
                  Save to Cart
                </button>
                {/* to payment directly */}
                <button
                  className="purchase-btn"
                  style={{ flex: "1" }}
                  onClick={() => {
                    // todo
                    // go to payment
                    console.log("go to payment");
                  }}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
          {/* users reviews*/}
          <div>
            <CommentDisplay itemID={itemID} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleScreen;
