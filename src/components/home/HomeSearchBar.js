import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../icons/searchIcon.svg";
import BookmarkIcon from "../../icons/bookmark.svg";
import "../../styles/homeSearchBar.css";

function MainSearchBar({ itemCount, tagList, updateItemList }) {
  // save searching key word
  const [searchKeyword, setSearchKeyword] = useState("");
  const priceListText = ["All", "$0", "less than $10", "more than $10"];
  const priceListValue = [
    [-1, -1],
    [0, 0],
    [-1, 10],
    [10, -1],
  ];
  // save price range
  const [priceRange, setPriceRang] = useState(0);
  // save selected tags
  const [selectedTags, setSelectedTags] = useState([]);
  // save state of filter enable
  const [showPrice, setShowPrice] = useState(false);
  const [showTag, setShowTag] = useState(false);

  // allow scroll of overflow tags list
  useEffect(() => {
    const priceListEle = document.getElementById("filter-scroll-price");
    const tagListEle = document.getElementById("filter-scroll-tag");
    priceListEle.addEventListener("wheel", (e) => {
      e.preventDefault();
      tagListEle.scrollLeft += e.deltaY / 30;
    });
    tagListEle.addEventListener("wheel", (e) => {
      e.preventDefault();
      tagListEle.scrollLeft += e.deltaY / 30;
    });
  });

  // reset all selected tag
  const resetTags = () => {
    setPriceRang(0);
    setSelectedTags([]);
    updateItemList(searchKeyword, [], [-1, -1]);

    clearCheckboxDisplay();
  };

  // clear all selected display
  const clearCheckboxDisplay = () => {
    const scroll = ["price", "tag"];
    for (var i = 0; i < 2; i++) {
      const container = document.getElementById("filter-scroll-" + scroll[i]);
      const inputs = container.getElementsByTagName("input");
      const labels = container.getElementsByTagName("label");

      for (var j = 0; j < inputs.length; j++) {
        inputs[j].checked = false;
        labels[j].classList.remove("checked-label");
      }
    }
  };

  // filter tag list
  const handleTagChange = (event) => {
    const selectedTagValue = event.target.value;
    const isTagSelected = selectedTags.includes(selectedTagValue);
    const tagLabel = document.getElementById("tag-label-" + event.target.value);

    // remove tag if ald selected
    if (isTagSelected) {
      let updatedTags = selectedTags.filter((tag) => tag !== selectedTagValue);
      setSelectedTags(updatedTags);
      updateItemList(searchKeyword, updatedTags, priceListValue[priceRange]);
      // change display of tags capsule
      tagLabel.classList.remove("checked-label");
    }
    // add tag if not yet selected
    else {
      let newTags = [...selectedTags, selectedTagValue];
      setSelectedTags(newTags);
      updateItemList(searchKeyword, newTags, priceListValue[priceRange]);
      // change display of tags capsule
      tagLabel.classList.add("checked-label");
    }
  };

  // filter price list
  const handlePriceChange = (event) => {
    const selectedPriceValue = event.target.value;
    const priceLabel = document.getElementById(
      "price-label-" + event.target.value
    );

    setPriceRang(selectedPriceValue);
    updateItemList(
      searchKeyword,
      selectedTags,
      priceListValue[selectedPriceValue]
    );
    // change display of tags capsule
    const container = document.getElementById("filter-scroll-price");
    const inputs = container.getElementsByTagName("input");
    const labels = container.getElementsByTagName("label");

    for (var j = 0; j < inputs.length; j++) {
      inputs[j].checked = false;
      labels[j].classList.remove("checked-label");
    }
    priceLabel.classList.add("checked-label");
  };

  // handle search key word
  const onSearchSubmit = (keyword) => {
    updateItemList(keyword, selectedTags, priceListValue[priceRange]);
  };

  const showExtendFilter = (section) => {
    switch (section) {
      case "price":
        const priceSelect = document.querySelector(".prices-selectable");
        setShowPrice(!showPrice);
        if (!showPrice) priceSelect.classList.remove("hide");
        else priceSelect.classList.add("hide");
        break;

      case "tags":
        const tagSelect = document.querySelector(".tags-selectable");
        setShowTag(!showTag);
        if (!showTag) tagSelect.classList.remove("hide");
        else tagSelect.classList.add("hide");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="search-area">
        <h4>PROJECT LIST</h4>
        <div className="search-bar">
          <div className="search-bar-item">
            {/* search button */}
            <button
              className="search"
              id="search"
              onClick={() => {
                onSearchSubmit(searchKeyword);
              }}>
              <img src={SearchIcon} alt="" />
            </button>
            {/* search field */}
            <input
              className="search-field"
              type="text"
              value={searchKeyword}
              placeholder="Enter keyword/ id: @xxx"
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
          </div>
          {/* go to shopping cart */}
          <div className="search-bar-item">
            <Link to="/ShoppingCart" className="saved capsule" id="saved">
              <img src={BookmarkIcon} alt="" />
              Saved
            </Link>
          </div>
          <div className="search-bar-item" style={{ minWidth: "fit-content" }}>
            {/* reset selected filter */}
            <button
              className="capsule"
              style={{ marginRight: "0" }}
              onClick={() => resetTags()}>
              All ({itemCount})
            </button>
          </div>
          <div className="search-bar-item" style={{ minWidth: "fit-content" }}>
            {/* show price filter */}
            <button
              className="capsule"
              style={{ marginRight: "0" }}
              onClick={() => showExtendFilter("price")}>
              Price ({priceListText[priceRange]})
            </button>
          </div>
          <div className="search-bar-item" style={{ minWidth: "fit-content" }}>
            {/* show tags filter */}
            <button
              className="capsule"
              style={{ marginRight: "0" }}
              onClick={() => showExtendFilter("tags")}>
              Tags ({selectedTags.length})
            </button>
          </div>
        </div>
        {/* list selectable prices */}
        <div
          className="filter-list prices-selectable hide"
          id="filter-scroll-price">
          {priceListText.map((price, index) => {
            return (
              <div key={"prices-selectable-" + index}>
                <input
                  type="checkbox"
                  value={index}
                  id={"price-select-" + index}
                  onChange={(e) => handlePriceChange(e)}
                />
                <label
                  htmlFor={"price-select-" + index}
                  id={"price-label-" + index}
                  className="capsule">
                  {price}
                </label>
              </div>
            );
          })}
        </div>
        {/* list selectable tags */}
        <div
          className="filter-list tags-selectable hide"
          id="filter-scroll-tag">
          {tagList.map((tag, index) => {
            return (
              <div key={"tags-selectable-" + index}>
                <input
                  type="checkbox"
                  value={tag}
                  id={"tag-select-" + index}
                  onChange={(e) => handleTagChange(e)}
                />
                <label
                  htmlFor={"tag-select-" + index}
                  id={"tag-label-" + tag}
                  className="capsule">
                  #{tag}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainSearchBar;
