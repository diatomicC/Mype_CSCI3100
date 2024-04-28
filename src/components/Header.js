import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../index";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function Header() {
  const [userCred, setUserCred] = useState(null);

  // handle page redirection
  const nav = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (cred) => {
      setUserCred(cred);
    });
  }, []);

  const toProductUpload = () => {
    if (userCred) nav("/ProductUpload");
    else alert("Please log in!");
  };

  return (
    <div className="header">
      {/* logo */}
      <Link to="/" className="logo">
        <span className="logo-text">Mype</span>
      </Link>
      <div className="header-options">
        {/* Upload product button */}
        <button
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={() => toProductUpload()}>
          <button className="upload-product">Upload Product</button>
        </button>
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
