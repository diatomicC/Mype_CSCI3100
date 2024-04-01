import { Link } from "react-router-dom";
import BookmarkIcon from "../icons/bookmark.svg";
import LikeIcon from "../icons/heart.svg";
import BackIcon from "../icons/arrowLeft.svg";

import "../styles/saleScreen.css";

function SaleScreen() {
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
            <img src="" alt="product image"></img>
          </div>
          <div class="long-description">
            template text <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
            earum ipsam, asperiores dolorum quisquam. Nam expedita ducimus ad in
            suscipit eaque illum laudantium. Doloremque dolores obcaecati harum
            ipsum illo? Nihil doloremque voluptas harum quae vitae animi debitis
            adipisci exercitationem quo repudiandae. Exercitationem doloremque,
            repellendus quibusdam debitis dolorum consequuntur molestiae,
            repellat voluptas libero reprehenderit sit. Dicta illo quibusdam
            quas atque, officiis eum optio nostrum perspiciatis provident
            exercitationem aut ipsum ipsa eligendi praesentium, a hic error?
            Quos minima obcaecati nulla eveniet provident vero quas a sit dolor
            deserunt temporibus, perspiciatis maiores ut explicabo, dicta
            tempore possimus! Officia doloremque voluptatibus sequi minus
            consectetur atque saepe cum aspernatur culpa, optio reiciendis
            exercitationem quae illum repudiandae consequatur? Doloremque quia
            magnam perspiciatis nulla saepe consectetur quaerat neque alias eum
            dolorem quis, quam a rerum ipsa. Temporibus praesentium pariatur rem
            fugiat veniam soluta dignissimos a labore quo dolorum perferendis
            nemo rerum, aliquid totam inventore doloribus in cum, cupiditate
            corporis aliquam? Ratione corrupti suscipit laudantium tempore nisi
            voluptates deserunt, sapiente labore, at atque quos eligendi vero
            amet voluptatibus non repellendus voluptas nam fugit modi accusamus
            aliquid est! Doloremque sed itaque architecto quia pariatur? Sint
            aperiam in ab maiores, molestias id nobis atque, impedit similique
            dignissimos iste a?
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
                <div class="starRanking">
                  {/* todo */}
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                </div>
              </div>
              <button className="purchase-btn">Order Now</button>
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
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
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
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
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
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleScreen;
