import React from 'react';
import Header from "../components/Header.js";
import {Profile} from "../components/userinfo/profile.js"
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from '../index.js';
import { signOut } from "firebase/auth";

export const Userinfo = () => {
  // handle page redirection
  const nav = useNavigate();

  const SignOut = () => {
    signOut(auth);
    nav("/signin");
  }
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
              <li className="nav-item">
                <button className="nav-link active" onClick={() => SignOut()}>Sign Out</button>
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