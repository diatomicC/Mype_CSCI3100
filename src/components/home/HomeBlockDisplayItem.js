import { Link } from "react-router-dom";
import BookmarkIcon from "../../icons/bookmark.svg";
import StarIcon from "../../icons/star.svg";
import "../../styles/homeBlockDisplayItem.css";

function HomePage({
  id,
  title,
  author,
  coverImage,
  tags,
  shortDescription,
  stars,
  saved,
}) {
  const url = `/Product/${id}`;
  return (
    <>
      <div className="item">
        {/* item header */}
        <div className="item-header">
          <Link to={url} className="title">
            {title}
          </Link>
          <button
            className="author"
            onClick={() => {
              // todo
              // goto this author's profile
              console.log("go to author profile");
            }}>
            {author}
          </button>
          {/* quick save to shopping cart, no redirect */}
          <button
            className="save-btn"
            onClick={() => {
              // todo
              // quick save to shopping cart
              console.log("quick save to shopping cart");
            }}>
            <img src={BookmarkIcon} alt="" />
          </button>
        </div>
        {/* item content */}
        <div className="product-image">
          {/* display "no image" when user didnt upload image */}
          {!coverImage ? <p> no image </p> : <img src={coverImage} alt="" />}
        </div>
        {/* chain all tags of this product to one string, then display */}
        <div className="item-tag">
          {tags.map((tag) => {
            return " #" + tag;
          })}
        </div>
        <div className="short-description">{shortDescription}</div>
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
            <button
              className="purchase"
              onClick={() => {
                // todo
                // go to payment
                console.log("go to payment");
              }}>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
