import React from 'react';
import "../styles/header.css";
import { Link } from 'react-router-dom';
import LogoIcon from "../icons/icon.svg";

function Header({ user, setCurrentUser }) {
  return (
    <div className="header">
      {/* logo */}
      <Link to="/" className="logo">
        <img className="logo-image" src={LogoIcon} alt="icon" />
        <span className="logo-text">Mype</span>
      </Link>
      <div className="header-options">
        {/* Upload product button */}
        <Link to="/ProductUpload">
            <button className="upload-product">
              Upload Product
            </button>
          </Link>
        <div class="header-options">
          {/* login/ signup/ profile */}
          {/* link to login/ user profile page */}
          <Link to="Userinfo">
            <button class="user-profile">
              <span>{user === "" ? "Login / Sign up" : "User Profile"}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
