import React from 'react';


export const UserManagement = () => {
  return (
    <div class="col" style={{float:"left"}}>
      <div class="row">
        <div class="col">
          <h>User Management</h>
          <div class="container">
          <input class="btn btn-primary" style="position:relative; left: 350px; top: -50px; background: grey; width: 100px;" type="suspend-user" value="Suspend">
            <input class="btn btn-primary" style="position:relative; left: 370px; top: -50px; background: black; width: 100px;" type="delete-user" value="Delete">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="search" aria-label="search-user" aria-describedby="basic-addon1" style="position:relative; top: -87px; left: 600px; max-width:35%;">
            </div>
        </div>
      </div>
    </div>
  )
}

