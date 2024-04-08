import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import HomeItemContainer from "../components/HomeItemContainer";
import MainSearchBar from "../components/HomeSearchBar";
import SaleScreen from "./SaleScreen";

import "../styles/homepage.css";

function HomePage() {
  // store the user ID who has logged in, "" mean not yet logged in
  const [currentUser, setCurrentUser] = useState("");

  return (
    <>
      <Router>
        {/* Header */}
        <Header user={currentUser} setCurrentUser={setCurrentUser}/>
        {/* search area*/}
        <MainSearchBar />

        <Routes>
          {/* display items match filtering condition */}
          <Route exact path="/" element={<HomeItemContainer collectionRef={""}/>} />

          {/* display detailed information of single item */}
          <Route path="/Product" element={<SaleScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
