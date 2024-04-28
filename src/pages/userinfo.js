import React from 'react';
import Header from "../components/Header.js";
import {Profile} from "../components/userinfo/profile.js"
import { Outlet } from "react-router-dom";

export const Userinfo = () => {
  return(
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="userinfo/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="userinfo/shoppingcart">Shopping Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="ordertracking">Order tracking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="currency">Currency</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="preference">Preference</a>
              </li>
            </ul>
          </div>
          <Outlet>
          </Outlet>
          </div>
        </div>
    </>
  );
}