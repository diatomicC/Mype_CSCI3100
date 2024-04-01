import Header from "../components/Header";
import HomeItemContainer from "../components/HomeItemContainer";
import MainSearchBar from "../components/HomeSearchBar";

import "../styles/homepage.css";

function HomePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* search area*/}
      <MainSearchBar />

      {/* area for display items */}
      <HomeItemContainer />
    </>
  );
}

export default HomePage;
