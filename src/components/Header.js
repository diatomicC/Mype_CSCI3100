import React from 'react';
import "../styles/header.css";
import { Link } from 'react-router-dom';

function Header({user, setCurrentUser}) {
  return (
    <>
      <div class="header">
        {/* logo */}
        <Link to="/" class="logo">
          <img class="logo-image" src="" alt="icon" />
          <span class="logo-text">Mype</span>
        </Link>
        {/* Upload product button */}
        <Link to="/ProductUpload">
            <button className="upload-product">
              Upload Product
            </button>
          </Link>
        <div class="header-options">
          {/* login/ signup/ profile */}
          {/* todo */}
          {/* link to login/ user profile page */}
          <Link>
            <button class="user-profile">
              <span>{user === "" ? "Login / Sign up" : "User Profile"}</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
