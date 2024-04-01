import "../styles/homeBlockDisplayItem.css";
import BookmarkIcon from "../icons/bookmark.svg";

function HomePage() {
  return (
    <>
      <div class="item">
        {/* item header */}
        <div class="item-header">
          <p class="title">title</p>
          <p class="author">author</p>
          {/* click to quick save to shopping cart */}
          <button class="save-btn">
            <img src={BookmarkIcon} alt="" />
          </button>
        </div>
        {/* item content */}
        <div>
          <div class="product-image"><img src="" alt="" /></div>
          {/* todo */}
          {/* display first x (depends on item frame width?) tags of this product */}
          <div class="item-tags">
            <div class="item-tag">#tag 1</div>
            <div class="item-tag">#tag 2</div>
            <div class="item-tag">#tag 3</div>
          </div>
          <p class="short-description">blablablab</p>
        </div>
        {/* interactives */}
        <div class="item-footer">
          {/* display number of likes, saved */}
          <div class="ranking">
            <div class="liked">
              <img src="" alt="like icon" /> #like
            </div>
            <div class="saved">
              <img src="" alt="bookmark icon" /> #save
            </div>
          </div>
          {/* click to share/ purchase this product */}
          <div class="interactives-btn">
            <button class="share">
              <img src="" alt="share icon" />
            </button>
            <button class="purchase">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
