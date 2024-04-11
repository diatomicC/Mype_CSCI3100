import { useEffect, useState } from "react";
import SearchIcon from "../icons/searchIcon.svg";
import BookmarkIcon from "../icons/bookmark.svg";
import { Link } from "react-router-dom";
import "../styles/homeSearchBar.css";

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
  //
  const [extendFilter, setExtendFilter] = useState();

  // allow scroll of overflow tags list
  useEffect(() => {
    const tagListEle = document.getElementById("filter-scroll");
    tagListEle.addEventListener("wheel", (e) => {
      e.preventDefault();
      tagListEle.scrollLeft += e.deltaY / 30;
    });
  });

  // reset all selected tag
  const resetTags = () => {
    setExtendFilter();
    setSelectedTags([]);
    updateItemList(searchKeyword, [], [-1, -1]);

    clearCheckboxDisplay();
  };

  // clear all selected display
  const clearCheckboxDisplay = () => {
    const container = document.getElementById("filter-scroll");
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

  useEffect(() => {
    console.log("change: ", selectedTags);
  }, [selectedTags]);

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
    clearCheckboxDisplay();
    priceLabel.classList.add("checked-label");
  };

  // handle search key word
  const onSearchSubmit = (keyword) => {
    updateItemList(keyword, selectedTags, priceListValue[priceRange]);
  };

  const showExtendFilter = (section) => {
    switch (section) {
      case "price":
        setExtendFilter(() => {
          return priceListText.map((price, index) => {
            return (
              <>
                <input
                  type="checkbox"
                  value={index}
                  id={"price-select-" + index}
                  key={index}
                  onChange={(e) => handlePriceChange(e)}
                />
                <label
                  htmlFor={"price-select-" + index}
                  id={"price-label-" + index}
                  className="capsule"
                  key={index + 1000}>
                  {price}
                </label>
              </>
            );
          });
        });
        break;

      case "tags":
        setExtendFilter(() => {
          return tagList.map((tag, index) => {
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
                  className="capsule"
                  key={index + 1000}>
                  #{tag}
                </label>
              </>
            );
          });
        });
        break;

      default:
        setExtendFilter();
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
        {/* list of all available tags*/}
        <div className="filter-list" id="filter-scroll">
          {extendFilter}
        </div>
      </div>
    </>
  );
}

export default MainSearchBar;
