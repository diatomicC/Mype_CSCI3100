import "../styles/homeBlockDisplayItem.css";

function HomePage() {
  return (
    <>
      <div class="item">
        {/* item header */}
        <div>
          <span class="title">title</span>
          <span class="author">author</span>
        </div>
        {/* item content */}
        <div>
          {/* click to quick save to shopping cart */}
          <button class="save-btn">
            <img class="save-icon" src="" alt="bookmark icon" />
          </button>
          <img class="product-image" src="" alt="product image" />
          {/* todo */}
          {/* display first x (depends on item frame width?) tags of this product */}
          <div class="item-tags">
            <div class="item-tag">#tag 1</div>
            <div class="item-tag">#tag 2</div>
            <div class="item-tag">#tag 3</div>
          </div>
          <span class="short-description">blablablab</span>
        </div>
        {/* interactives */}
        <div>
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
