import "../styles/header.css";
import { Link } from "react-router-dom";
import { auth } from "../index";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function Header() {
  const [userCred, setUserCred] = useState(null);

  onAuthStateChanged(auth, (cred) => {
    setUserCred(cred);
  });

  return (
    <div className="header">
      {/* logo */}
      <Link to="/" className="logo">
        <span className="logo-text">Mype</span>
      </Link>
      <div className="header-options">
        {/* Upload product button */}
        <Link to="/ProductUpload">
          <button className="upload-product">Upload Product</button>
        </Link>
        <div className="header-options">
          {/* login/ signup/ profile */}
          {/* link to login/ user profile page */}
          <Link to={userCred ? "/Userinfo" : "/signin"}>
            <button className="user-profile">
              <span>{userCred ? "User Profile" : "Login / Sign up"}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
