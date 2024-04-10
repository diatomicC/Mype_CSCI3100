import React from 'react';
import Header from "../components/Header";
import {Profile} from "../components/userinfo/profile.js"


export const Userinfo = () => {
  return(
    <>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="userinfo/profile">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="product">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="userinfo/shoppingcart">Shopping Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="ordertracking">Order tracking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="currency">Currency</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="preference">Preference</a>
              </li>
            </ul>
          </div>
          <Profile/>
          </div>
        </div>
    </>
  );
}