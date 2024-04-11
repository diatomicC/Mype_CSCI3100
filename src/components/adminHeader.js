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
        <Link to="Management">
            <button class="AdminManagement">
              <span>Management</span>
            </button>
          </Link>
          {/* Log-out */}
          <Link to="../../">
            <button class="user-profile">
              <span>Log out</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;