import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../index";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function Header() {
  // handle page redirection
  const nav = useNavigate();
  // save info of current user
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (cred) => {
      setUser(cred);
    });
  }, []);

  return (
    <div className="header">
      {/* logo */}
      <Link to="/" className="logo">
        <span className="logo-text">Mype</span>
      </Link>
      <div className="header-options">
        {/* todo */}
        {/* migrate this whole component to user profile */}
        {/* Upload product button */}
        <button
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={() =>
            user ? nav("/ProductUpload") : alert("Please log in!")
          }>
          <span className="upload-product">Upload Product</span>
        </button>
        <div className="header-options">
          {/* login/ signup/ profile button*/}
          <Link to={user ? "/Userinfo" : "/signin"}>
            <button className="user-profile">
              <span>{user ? "User Profile" : "Login / Sign up"}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
