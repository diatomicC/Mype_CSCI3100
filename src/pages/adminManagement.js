import React from 'react';
import AdminHeader from "../components/adminHeader";
import { Outlet } from "react-router-dom";

export const AdminManagement = () => {
  return(
    <>
      <AdminHeader />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="ManageUser">Manage User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="admin/manageProduct">Manage Product</a>
              </li>
            </ul>
          </div>
          <Outlet>
          </Outlet>
          </div>
        </div>
    </>
  );
}