import Header from "../components/Header";
import SearchIcon from "../icons/searchIcon.svg";
import BookmarkIcon from "../icons/bookmark.svg";
import "../styles/homepage.css";

function HomePage() {
  return (
    <>
      <Header />
      {/* search area*/}
      <div class="search-area">
        <h4>PROJECT LIST</h4>
        <div class="search-bar">
          <div class="search-bar-item">
            {/* toggle to show search field (todo) */}
            <button class="search" id="search">
            <img src={SearchIcon} alt=""/>
            </button>
            {/* toggle to filter only/ also(?) saved item */}
            <input class="search-field" type="text" />
          </div>
          {/* toggle to filter only/ also(?) saved item */}
          <div class="search-bar-item">
            <button class="saved capsule" id="saved">
              <img src={BookmarkIcon} alt=""/>
              Saved
            </button>
          </div>
          {/* list of all available tags*/}
          <div class="filter-tags search-bar-item">
            {/* todo use make tag component*/}
            <button class="filter-tag capsule">All (10)</button>
            <button class="filter-tag capsule">#tag1</button>
            <button class="filter-tag capsule">#tag2</button>
          </div>
        </div>
      </div>

      {/* area for display items */}
      <div class="content-container">
        {/* item template */}
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
      </div>
    </>
  );
}

export default HomePage;
