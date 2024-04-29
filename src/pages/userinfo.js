import React from 'react';
import Header from "../components/Header";
import {Profile} from "../components/userinfo/profile.js"
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Userinfo = () => {
  return(
    <>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-2">
         /*This is the left side column navigating bar*/
            <ul class="nav flex-column">
            /*direct to the user profile*/
              <li class="nav-item">
                <Link to ="profile">
                <a class="nav-link active" aria-current="page" href="userinfo/profile">Profile</a>
                </Link>
              </li>
            /*direct to the product selling of the user*/
              <li class="nav-item">
                <Link to ="profile">
                <a class="nav-link active" aria-current="page" href="product">Product</a>
                </Link>
              </li>
            /*direct to the shopping cart of the user*/
              <li class="nav-item">
                <Link to ="shoppingcart">
                <a class="nav-link active" aria-current="page" href="userinfo/shoppingcart">Shopping Cart</a>
                </Link>
              </li>
            /*direct to the order tracking function of the user*/
              <li class="nav-item">
                <Link to ="profile">
                <a class="nav-link active" aria-current="page" href="ordertracking">Order tracking</a>
                </Link>
              </li>
            /*direct to the currency part of the user*/
              <li class="nav-item">
                <Link to ="profile">
                <a class="nav-link active" aria-current="page" href="currency">Currency</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to ="profile">
                <a class="nav-link active" aria-current="page" href="preference">Preference</a>
                </Link>
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
