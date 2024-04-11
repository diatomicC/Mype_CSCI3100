import React from 'react';
import "../styles/adminHeader.css";
import { Link } from 'react-router-dom';

function AdminHeader({user, setCurrentUser}) {
  return (
    <>
      <div class="adminheader">
        {/* logo */}
        <h to="/" class="logo">
          <img class="logo-image" src="" alt="icon" />
          <span class="logo-text">Mype Admin</span>
        </h>
        <div class="adminheader-options">
        <Link to="AdminManagement">
            <button class="AdminManagement">
              <span>Management</span>
            </button>
          </Link>
          {/* login/ signup/ profile */}
          {/* todo */}
          {/* link to login/ user profile page */}
          <Link to="Userinfo">
            <button class="user-profile">
              <span>{user === "" ? "Log out" : "User Profile"}</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;