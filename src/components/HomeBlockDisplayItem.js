import { Link } from "react-router-dom";
import BookmarkIcon from "../icons/bookmark.svg";
import LikeIcon from "../icons/heart.svg";
import ShareIcon from "../icons/shareIcon.svg";
import "../styles/homeBlockDisplayItem.css";

function HomePage({
  id,
  title,
  author,
  tags,
  description,
  liked,
  saved,
}) {
  const url = `/Product/${id}`;
  return (
    <>
      <div class="item">
        {/* item header */}
        <div class="item-header">
          <Link to={url} class="title">
            {title}
          </Link>
          <div class="author">{author}</div>
          {/* click to quick save to shopping cart */}
          <button class="save-btn">
            <img src={BookmarkIcon} alt="" />
          </button>
        </div>
        {/* item content */}
        <div>
          <div class="product-image">
            <img src="" alt="" />
          </div>
          {/* display all tags of this product */}
          <div class="item-tags">
            <div class="item-tag">
              {tags.map((tag, index) => {
                return " #" + tag;
              })}
            </div>
          </div>
          <div class="short-description">{description}</div>
        </div>
        {/* interactives */}
        <div class="item-footer">
          {/* display number of likes, saved */}
          <div class="ranking">
            <div class="item-liked">
              <img src={LikeIcon} alt="" /> {liked}
            </div>
            <div class="item-saved">
              <img src={BookmarkIcon} alt="" /> {saved}

            </div>
          </div>
          {/* click to share/ purchase this product */}
          <div class="interactives-btn">
            <button class="share">
              <img src={ShareIcon} alt="" />
            </button>
            <button class="purchase">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
