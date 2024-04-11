import React from 'react';
import AdminHeader from "../components/adminHeader";
import { Outlet } from "react-router-dom";

export const AdminManagement = () => {
  return(
    <>
      <AdminHeader />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="ManageUser">Manage User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="admin/manageProduct">Manage Product</a>
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