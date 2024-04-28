import React from 'react';
import "../styles/adminHeader.css";
import { Link } from 'react-router-dom';

function AdminHeader({user, setCurrentUser}) {
  return (
    <>
      <div className="adminheader">
        {/* logo */}
        <h to="/" className="logo">
          <img className="logo-image" src="" alt="icon" />
          <span className="logo-text">Mype Admin</span>
        </h>
        <div className="adminheader-options">
        <Link to="Management">
            <button className="AdminManagement">
              <span>Management</span>
            </button>
          </Link>
          {/* Log-out */}
          <Link to="../../">
            <button className="user-profile">
              <span>Log out</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;