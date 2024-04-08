import React from 'react';
import "../styles/header.css";
import GlobeIcon from "../icons/globe.svg";
import ArrowDownIcon from "../icons/arrowDown.svg";

import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <div className="header">
        {/* logo */}
        <div className="logo">
          <img className="logo-image" src="" alt="icon" />
          <span className="logo-text">Mype</span>
        </div>
        <div className="header-options">
          {/* Upload product button */}
          <Link to="/ProductUpload">
            <button className="upload-product">
              Upload Product
            </button>
          </Link>
          {/* login/ signup/ profile */}
          <button className="user-profile">
            <span>User Profile</span>
          </button>
          {/* language option */}
          <button className="lang-setting">
            <span>Language</span>
            {/* globe icon */}
            <img src={GlobeIcon} alt="Language"/>
            {/* arrow icon */}
            <img src={ArrowDownIcon} alt="Expand"/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
