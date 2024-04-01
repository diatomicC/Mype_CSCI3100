import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Header />
      {/* search area*/}
      <h4>PROJECT LIST</h4>
      <div class="search-bar">
        <button class="seacrh" id="seacrh">
          <img src="" alt="search icon"></img>
        </button>
        <button class="saved" id="saved">
          <img src="" alt="bookmark icon"></img>Saved
        </button>
        <div class="filter-tags">
          <button class="filter-tag">#tag 1</button>
          <button class="filter-tag">#tag 2</button>
          <button class="filter-tag">#tag 3</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
