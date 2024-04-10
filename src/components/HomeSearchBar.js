import { useEffect, useState } from "react";
import SearchIcon from "../icons/searchIcon.svg";
import BookmarkIcon from "../icons/bookmark.svg";

function MainSearchBar({ itemCount, tagList }) {

  // bool to store if search bar is toggled on
  const [showInput, setShowInput] = useState(false);

  // call this when search icon is clicked to toggle the state
  function toggleInputField() {
    setShowInput(!showInput);
  }

  useEffect(() => {
    const tagListEle = document.getElementById("tags-scroll");
    tagListEle.addEventListener("wheel", (e) => {
      e.preventDefault();
      tagListEle.scrollLeft += e.deltaY/30;
    });
  });


  return (
    <>
      <div class="search-area">
        <h4>PROJECT LIST</h4>
        <div class="search-bar">
          <div class="search-bar-item">

            {/* todo */}
            {/* toggle to show search field */}
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
          <div class="search-bar-item" style={{ minWidth: "fit-content" }}>
            <button class="capsule" style={{ marginRight: "0" }}>
              All ({itemCount})
            </button>
          </div>
          {/* list of all available tags*/}
          <div class="search-bar-item search-tags-list" id="tags-scroll">
            {tagList.map((tag, index) => {
              return (
                <button class="capsule" key={index}>
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearchBar;
