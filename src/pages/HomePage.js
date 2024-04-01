import Header from "../components/Header";
import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";

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
              <img src={SearchIcon} alt="" />
            </button>
            {/* toggle to filter only/ also(?) saved item */}
            <input class="search-field" type="text" />
          </div>
          {/* toggle to filter only/ also(?) saved item */}
          <div class="search-bar-item">
            <button class="saved capsule" id="saved">
              <img src={BookmarkIcon} alt="" />
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
        <HomeBlockDisplayItem />
      </div>
    </>
  );
}

export default HomePage;
