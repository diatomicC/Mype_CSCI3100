import React from 'react';


export const UserManagement = () => {
  return (
    <div className="col" style={{float:"left"}}>
      <div className="row">
        <div className="col">
          <h>User Management</h>
          <div className="container">
          <input className="btn btn-primary" style="position:relative; left: 350px; top: -50px; background: grey; width: 100px;" type="suspend-user" value="Suspend"/>
            <input className="btn btn-primary" style="position:relative; left: 370px; top: -50px; background: black; width: 100px;" type="delete-user" value="Delete"/>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="search" aria-label="search-user" aria-describedby="basic-addon1" style="position:relative; top: -87px; left: 600px; max-width:35%;"/>
            </div>
            </div>
        </div>
      </div>

    </div>
  )
}

