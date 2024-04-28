import React, { useEffect, useState } from 'react';
import "../styles/header.css";
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Header() {
  const [auth, setAuth] = useState(getAuth());
  const [currUserID, setCurrUserID] = useState("");

  useEffect(() => {
    var tempAuth = getAuth()
    setAuth(tempAuth);
    onAuthStateChanged(tempAuth, (user) => {
      if (user)
        setCurrUserID(user.uid);
    })
  }, [getAuth()]);

  return (
    <div className="header">
      {/* logo */}
      <Link to="/" className="logo">
        <span className="logo-text">Mype</span>
      </Link>
      <div className="header-options">
        {/* Upload product button */}
        <Link to="/ProductUpload">
            <button className="upload-product">
              Upload Product
            </button>
          </Link>
        <div className="header-options">
          {/* login/ signup/ profile */}
          {/* link to login/ user profile page */}
          <Link to= {currUserID === "" ? "/signup" : "/Userinfo"}>
            <button className="user-profile">
              <span>{currUserID === "" ? "Login / Sign up" : "User Profile"}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
