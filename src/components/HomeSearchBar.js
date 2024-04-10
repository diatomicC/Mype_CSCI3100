import { useEffect, useState } from "react";
import SearchIcon from "../icons/searchIcon.svg";
import BookmarkIcon from "../icons/bookmark.svg";

import "../styles/homeSearchBar.css";

function MainSearchBar({ itemCount, tagList, updateItemList }) {
  // save searching key word
  const [searchKeyword, setSearchKeyword] = useState("");
  // save selected tags
  const [selectedTags, setSelectedTags] = useState([]);

  // allow scroll of overflow tags list
  useEffect(() => {
    const tagListEle = document.getElementById("tags-scroll");
    tagListEle.addEventListener("wheel", (e) => {
      e.preventDefault();
      tagListEle.scrollLeft += e.deltaY / 30;
    });
  });

  // reset all selected tag
  const resetTags = () => {
    setSelectedTags([]);
    updateItemList(searchKeyword, []);

    // clear all selected display
    const container = document.getElementById("tags-scroll");
    const inputs = container.getElementsByTagName("input");
    const labels = container.getElementsByTagName("label");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
      labels[i].classList.remove("checked-label");
    }
  };

  // filter tag list
  const handleTagChange = (event) => {
    const selectedTagValue = event.target.value;
    const isTagSelected = selectedTags.includes(selectedTagValue);
    const tagLabel = document.getElementById("tag-label-" + event.target.value);

    // remove tag if ald selected
    if (isTagSelected) {
      const updatedTags = selectedTags.filter(
        (tag) => tag !== selectedTagValue
      );
      setSelectedTags(updatedTags);
      updateItemList(searchKeyword, updatedTags);
      // change display of tags capsule
      tagLabel.classList.remove("checked-label");
    }
    // add tag if not yet selected
    else {
      let newTags = [...selectedTags, selectedTagValue];
      setSelectedTags(newTags);
      updateItemList(searchKeyword, newTags);
      // change display of tags capsule
      tagLabel.classList.add("checked-label");
    }
  };

  // handle search key word
  const onSearchSubmit = (keyword) => {
    updateItemList(keyword, selectedTags);
  }

  return (
    <>
      <div class="search-area">
        <h4>PROJECT LIST</h4>
        <div class="search-bar">
          <div class="search-bar-item">
            {/* todo */}
            {/* toggle to show search field */}
            <button class="search" id="search" onClick={() => {onSearchSubmit(searchKeyword)}}>
              <img src={SearchIcon} alt="" />
            </button>
            {/* toggle to filter only/ also(?) saved item */}
            <input
              class="search-field"
              type="text"
              value={searchKeyword}
              placeholder="Enter keyword/ id: @xxx"
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
          </div>
          {/* toggle to filter only/ also(?) saved item */}
          <div class="search-bar-item">
            {/* todo */}
            <button class="saved capsule" id="saved">
              <img src={BookmarkIcon} alt="" />
              Saved
            </button>
          </div>
          <div class="search-bar-item" style={{ minWidth: "fit-content" }}>
            {/* reset selected filter */}
            <button
              class="capsule"
              style={{ marginRight: "0" }}
              onClick={() => resetTags()}>
              All ({itemCount})
            </button>
          </div>
          {/* list of all available tags*/}
          <div class="search-bar-item search-tags-list" id="tags-scroll">
            {tagList.map((tag, index) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={tag}
                    id={"tag-select-" + index}
                    key={index}
                    onChange={(e) => handleTagChange(e)}
                  />
                  <label
                    htmlFor={"tag-select-" + index}
                    id={"tag-label-" + tag}
                    class="capsule"
                    key={index + 1000}>
                    #{tag}
                  </label>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearchBar;
