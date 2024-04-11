import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage";
import SaleScreen from "./pages/SaleScreen";
import ProductUploadPage from "./pages/ProductUploadPage";
import ShoppingCartContainer from "./components/shoppingCart/ShoppingCartContainer";
import reportWebVitals from "./reportWebVitals";

import {Userinfo} from "./pages/Userinfo";
import {Profile} from "./components/userinfo/profile";
import {AdminManagement} from "./pages/adminManagement";
import AdminHomePage from "./pages/AdminHomePage";
import {UserManagement} from "./components/UserManagement";
import PaymentScreen from "./pages/PaymentScreen";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh2yYhyEIxEdZUv6PCiuL1Jsph76ufH-U",
  authDomain: "mype-3100.firebaseapp.com",
  projectId: "mype-3100",
  storageBucket: "mype-3100.appspot.com",
  messagingSenderId: "3907761328",
  appId: "1:3907761328:web:32c20feff1a1756b1e3775",
  measurementId: "G-W662MEQ7YG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
//const userID = "iamadmin"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      {/* display items match filtering condition */}
      <Route exact path="/" element={<HomePage db={db} />} />
      {/* display detailed information of single item */}
      <Route path="/Product/:itemID" element={<SaleScreen db={db} />} />
      <Route path="/ProductUpload" element={<ProductUploadPage />} />
    <Route path="/Userinfo" element={<Userinfo />} >
          <Route path="/Userinfo/profile" element={<Profile/>} />
            <Route path="/Management" element={<AdminManagement/>} />
        <Route path="/admin" element={<AdminHomePage db={db} />} >
          <Route path="/admin/Management" element={<AdminManagement/>} />
      <Route
        path="/shopping-cart"
        element={
          <ShoppingCartContainer
            currentUserId={"KNnrR1hpeBv5Mhytx0Df"}
            db={db}
          />
        }
      />
      <Route path="/payment" element={<PaymentScreen db={db} />} />
    </Routes>
  </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
