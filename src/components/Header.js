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
        <Link to="/ProductUpload" className="upload-product">
          <button>
            Upload Product
          </button>
        </Link>
        {/* link to login/ user profile page */}
        <Link to={user === "" ? "/login" : "/user-profile"} className="user-profile">
          <button>
            {user === "" ? "Login / Sign up" : "User Profile"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
