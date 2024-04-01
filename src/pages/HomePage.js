import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import HomeItemContainer from "../components/HomeItemContainer";
import MainSearchBar from "../components/HomeSearchBar";
import SaleScreen from "./SaleScreen";

import "../styles/homepage.css";

function HomePage() {
  return (
    <>
      <Router>
        {/* Header */}
        <Header />
        {/* search area*/}
        <MainSearchBar />

        <Routes>
          {/* display items match filtering condition */}
          <Route path="/" element={<HomeItemContainer/>} />
          
          {/* display detailed information of single item */}
          <Route path="/Product" element={<SaleScreen/>} />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
