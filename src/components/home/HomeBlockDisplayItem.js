import { Link } from "react-router-dom";
import BookmarkIcon from "../../icons/bookmark.svg";
import StarIcon from "../../icons/star.svg";
import ShareIcon from "../../icons/shareIcon.svg";
import "../../styles/homeBlockDisplayItem.css";

function HomePage({ id, title, author, coverImage, tags, description, stars, saved }) {
  const url = `/Product/${id}`;
  return (
    <>
      <div className="item">
        {/* item header */}
        <div className="item-header">
          <Link to={url} className="title">
            {title}
          </Link>
          <div className="author">{author}</div>
          {/* quick save to shopping cart, no redirect */}
          <button className="save-btn" onClick={() => {
            // todo
            console.log("quick save to shopping cart");
          }}>
            <img src={BookmarkIcon} alt="" />
          </button>
        </div>
        {/* item content */}
        <div>
          <div className="product-image">
            <img src={coverImage} alt="" />
          </div>
          {/* display all tags of this product */}
          <div className="item-tags">
            <div className="item-tag">
              {tags.map((tag) => {
                return " #" + tag;
              })}
            </div>
          </div>
          <div className="short-description">{description}</div>
        </div>
        {/* interactives */}
        <div className="item-footer">
          {/* display number of likes, saved */}
          <div className="ranking">
            <div className="item-stars">
              <img src={StarIcon} alt="" /> {stars}
            </div>
            <div className="item-saved">
              <img src={BookmarkIcon} alt="" /> {saved}
            </div>
          </div>
          {/* click to share/ purchase this product */}
          <div className="interactives-btn">
            {/* <button className="share">
              <img src={ShareIcon} alt="" />
            </button> */}
            <button className="purchase">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
