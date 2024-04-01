import { useState } from "react";
import Header from "../components/Header";
import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";

import SearchIcon from "../icons/searchIcon.svg";
import BookmarkIcon from "../icons/bookmark.svg";
import "../styles/homepage.css";

function HomePage() {
  // bool to store if search bar is toggled on
  const [showInput, setShowInput] = useState(false);

  // call this when search icon is clicked to toggle the state
  function toggleInputField() {
    setShowInput(!showInput);
  }

  return (
    <>
      <Header />
      {/* search area*/}
      <div class="search-area">
        <h4>PROJECT LIST</h4>
        <div class="search-bar">
          <div class="search-bar-item">
            {/* toggle to show search field (todo) */}
            <button class="search" id="search" onClick={toggleInputField}>
              <img src={SearchIcon} alt="" />
            </button>
            {/* toggle to filter only/ also(?) saved item */}
            <input
              class="search-field"
              type="text"
              style={showInput ? { display: "block" } : { display: "none" }}
            />
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
            <button class="filter-tag capsule">All (10)</button>
            {/* todo : grab data here */}
            <button class="filter-tag capsule">#tag1</button>
            <button class="filter-tag capsule">#tag2</button>
            <button class="filter-tag capsule">#tag3</button>
          </div>
        </div>
      </div>

      {/* area for display items */}
      <div class="content-container">
        {/* todo : grab data here */}
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
        <HomeBlockDisplayItem />
      </div>
    </>
  );
}

export default HomePage;
