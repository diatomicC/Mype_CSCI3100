import React from 'react';

export const Profile = (userID) => {
  return(  
    <div className="col" style={{float:"left"}}>
    <div className="row">
        <h style={{"font-size": "30px"}}>Profile</h>
          <button type="button" className="btn btn-primary"
          style={{"--bs-btn-padding-y": "0.2rem", "--bs-btn-padding-x": "0.75rem", "--bs-btn-font-size": "1rem", position: "relative", top: "-10px", left: "20px"}}>
            Edit
          </button>
          </div>
            <div className="col">
            <img src="http://localhost:3000/images.png" className="img-thumbnail" alt="My_Logo" style={{float:"left", "max-width":"200px", "max-height":"auto"}}/>
            <div className="text" style={{float:"left", position:"relative", left:"30px", top:"30px", "font-size": "19px"}}>
              <ul className="list-unstyled">
                <li>Adam</li>
                <li>adam@gmail.com</li>
              </ul>
            </div>
            <div className="text" style={{float:"left", position:"relative", left:"250px", top:"30px", "font-size": "19px"}}>
              <ul className="list-unstyled">
                <li>balance</li>
                <li>
                <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" style={{"font-size":"13"}}>
  Charge coin
</a>
                </li>
              </ul>
            </div>
            </div>
          <div className="row">
            <div style={{margintop: "50px"}}>
              <div className="text" style={{"font-size": "23px"}}>Uploaded products</div>
              <div className="text" style={{float:"left", position:"relative", top: "-30px", left: "250px", "font-size": "18px"}}>3 items</div>
            </div>
          </div>
          <div className="image">
            <img src="http://localhost:3000/course.png" style={{height:"150px", width:"auto"}} className="img-fluid" alt="..."></img>
            <img src="http://localhost:3000/course2.png" style={{height:"150px", width:"auto"}} className="img-fluid" alt="..."></img>
            <img src="http://localhost:3000/course.png" style={{height:"150px", width:"auto"}} className="img-fluid" alt="..."></img>
          </div>
          </div>
          ); 
}