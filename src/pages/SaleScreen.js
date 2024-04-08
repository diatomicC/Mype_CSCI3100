import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import BookmarkIcon from "../icons/bookmark.svg";
import LikeIcon from "../icons/heart.svg";
import BackIcon from "../icons/arrowLeft.svg";
import StarIcon from "../icons/star.svg";

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
                <div class="starRanking">
                  {/* todo */}
                  <img class="star" src={StarIcon} alt=""></img>
                  <img class="star" src={StarIcon} alt=""></img>
                  <img class="star" src={StarIcon} alt=""></img>
                  <img class="star" src={StarIcon} alt=""></img>
                  <img class="star" src={StarIcon} alt=""></img>
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
          <div class="review-container">
            {/* todo : grab data here */}
            {/* review template */}
            <div class="review">
              <p>blablalbalbalblab</p>
              <div class="starRanking">
                {/* todo */}
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
              </div>
            </div>
            {/* review template */}
            <div class="review">
              <p>
                lum laudantium. Doloremque dolores obcaecati harum ipsum illo?
                Nihil doloremque voluptas harum quae vitae animi debitis
                adipisci exercitationem quo repudiandae. Exercitationem
                doloremque, repellendus quibusdam debitis dolorum consequuntur
                molestiae, repellat voluptas libero reprehenderit sit. Dicta
                illo quibusdam quas atque, officiis eum optio nostrum
                perspiciatis provident exercitationem aut ipsum ipsa eligendi
              </p>
              <div class="starRanking">
                {/* todo */}
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
              </div>
            </div>
            {/* review template */}
            <div class="review">
              <p>
                remque voluptas harum quae vitae animi debitis adipisci
                exercitationem quo repudiandae. Exercitationem doloremque,
                repellendus quibusdam debitis dolorum consequuntur molestiae,
                repellat voluptas libero repre
              </p>
              <div class="starRanking">
                {/* todo */}
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
                <img class="star" src={StarIcon} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleScreen;
