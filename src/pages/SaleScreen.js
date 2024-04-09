import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import BookmarkIcon from "../icons/bookmark.svg";
import LikeIcon from "../icons/heart.svg";
import BackIcon from "../icons/arrowLeft.svg";
import CommentForm from '../components/CommentForm';
import CommentDisplay from '../components/CommentDisplay';

import "../styles/saleScreen.css";


function SaleScreen({ item, title, author, tags, description, liked, saved }) {
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
          <div class="long-description">
            template text <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
            earum ipsam, asperiores dolorum quisquam. Nam expedita ducimus ad in
            suscipit eaque illum laudantium. Doloremque dolores obcaecati harum
            ipsum illo? Nihil doloremque voluptas harum quae vitae animi debitis
            adipisci exercitationem quo repudiandae. Exercitationem doloremque,
            nemo rerum, aliquid totam inventore doloribus in cum, cupiditate
            corporis aliquam? Ratione corrupti suscipit laudantium tempore nisi
            voluptates deserunt, sapiente labore, at atque quos eligendi vero
            amet voluptatibus non repellendus voluptas nam fugit modi accusamus
            aliquid est! Doloremque sed itaque architecto quia pariatur? Sint
            aperiam in ab maiores, molestias id nobis atque, impedit similique
            dignissimos iste a?
          </div>
          <div>
            <h2>Leave a Comment</h2>
            <CommentForm onSubmit={addComment} />
          </div>
        </div>

        {/* right section */}
        <div class="right-content">
          {/* display all tags of this product */}
          <div class="tag-list">
            {/* list of display items */}
            {/* todo : grab data here */}
            <div class="capsule item-tag">#tag 1</div>
            <div class="capsule item-tag">#tag 2</div>
            <div class="capsule item-tag">#tag 3</div>
            <div class="capsule item-tag">#tag 4</div>
          </div>
          {/* short description (same as one in home page?) */}
          <div class="short-description">
            template text <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
            earum ipsam, asperiores dolorum quisquam. Nam expedita ducimus ad in
          </div>
          {/* sales info */}
          <div class="saleData">
            <div class="upper-saleData">
              <div class="purchasedCount">n People ordered</div>
              <div class="price">$10</div>
            </div>
            <div class="lower-saleData">
              <div>
                {/* display number of likes, saved */}
                <div class="ranking">
                  <div class="item-liked">
                    <img src={LikeIcon} alt="" /> 999
                  </div>
                  <div class="item-saved">
                    <img src={BookmarkIcon} alt="" /> 999
                  </div>
                </div>

                {/* TODO: Make into graphics */}
                <h2>Average Stars: {averageStars}</h2>
              </div>
              <button className="purchase-btn">Order Now</button>
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
