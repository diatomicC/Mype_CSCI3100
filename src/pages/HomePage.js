import Header from "../components/Header";
import HomeBlockDisplayItem from "../components/HomeBlockDisplayItem";

import MainSearchBar from "../components/MainSearchBar";

import "../styles/homepage.css";

function HomePage() {
  return (
    <>
      <Header />
      {/* search area*/}
      <MainSearchBar />

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
