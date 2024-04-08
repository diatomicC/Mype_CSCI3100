import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import HomeItemContainer from "../components/HomeItemContainer";
import MainSearchBar from "../components/HomeSearchBar";
import SaleScreen from "./SaleScreen";
import ProductUploadPage from "./ProductUploadPage";
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
          <Route exact path="/" element={<HomeItemContainer/>} />
          
          {/* display detailed information of single item */}
          <Route path="/Product" element={<SaleScreen/>} />
          <Route path="/ProductUpload" element={<ProductUploadPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
