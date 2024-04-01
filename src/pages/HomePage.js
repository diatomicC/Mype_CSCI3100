import Header from "../components/Header";
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
            <div class="search" id="search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
              </svg>
            </div>
            <input class="search-field" type="text" />
          </div>
          <div class="search-bar-item">
            <button class="saved capsule" id="saved">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#8000ff"
                  stroke="none">
                  <path
                    d="M895 5106 c-40 -18 -73 -56 -85 -97 -15 -50 -13 -4841 1 -4894 21
-78 96 -125 176 -111 34 7 117 86 805 774 l768 767 767 -767 c673 -672 773
-767 805 -773 87 -16 160 32 178 118 8 38 10 720 8 2474 l-3 2422 -21 27 c-11
15 -33 37 -48 48 -27 21 -28 21 -1674 23 -1357 2 -1652 0 -1677 -11z m3125
-2436 c0 -1182 -3 -2150 -8 -2150 -4 0 -315 308 -692 685 -567 568 -691 687
-722 696 -84 22 -58 44 -798 -696 -377 -377 -688 -685 -692 -685 -5 0 -8 968
-8 2150 l0 2150 1460 0 1460 0 0 -2150z"
                  />
                </g>
              </svg>
              Saved
            </button>
          </div>
          <div class="filter-tags search-bar-item">
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
            <button class="save-btn">
              <img class="save-icon" src="" alt="bookmark icon" />
            </button>
            <img class="product-image" src="" alt="product image" />
            <div class="item-tags">
              <div class="item-tag">#tag 1</div>
              <div class="item-tag">#tag 2</div>
              <div class="item-tag">#tag 3</div>
            </div>
            <span class="short-description"></span>
          </div>
          {/* interactives */}
          <div>
            <div class="ranking">
              <div class="liked">
                <img src="" alt="like icon" /> #like
              </div>
              <div class="saved">
                <img src="" alt="bookmark icon" /> #save
              </div>
            </div>
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
