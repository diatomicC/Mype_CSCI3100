import React from 'react';
import Header from "../../components/Header";
import Userinfo from "../../pages/Userinfo";

export const Profile = (userID) => {
  return(  
    <div class="col" style={{float:"left"}}>
    <div class="row">
        <h style={{"font-size": "30px"}}>Profile</h>
          <button type="button" class="btn btn-primary"
          style={{"--bs-btn-padding-y": "0.2rem", "--bs-btn-padding-x": "0.75rem", "--bs-btn-font-size": "1rem", position: "relative", top: "-10px", left: "20px"}}>
            Edit
          </button>
          </div>
            <div class="col">
            <img src="http://localhost:3000/images.png" class="img-thumbnail" alt="My_Logo" style={{float:"left", "max-width":"200px", "max-height":"auto"}}/>
            <div class="text" style={{float:"left", position:"relative", left:"30px", top:"30px", "font-size": "19px"}}>
              <ul class="list-unstyled">
                <li>Adam</li>
                <li>adam@gmail.com</li>
              </ul>
            </div>
            <div class="text" style={{float:"left", position:"relative", left:"250px", top:"30px", "font-size": "19px"}}>
              <ul class="list-unstyled">
                <li>balance</li>
                <li>
                <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" style={{"font-size":"13"}}>
  Charge coin
</a>
                </li>
              </ul>
            </div>
            </div>
          <div class="row">
            <div style={{margintop: "50px"}}>
              <div class="text" style={{"font-size": "23px"}}>Uploaded products</div>
              <div class="text" style={{float:"left", position:"relative", top: "-30px", left: "250px", "font-size": "18px"}}>3 items</div>
            </div>
          </div>
          <div class="image">
            <img src="http://localhost:3000/course.png" style={{height:"150px", width:"auto"}} class="img-fluid" alt="..."></img>
            <img src="http://localhost:3000/course2.png" style={{height:"150px", width:"auto"}} class="img-fluid" alt="..."></img>
            <img src="http://localhost:3000/course.png" style={{height:"150px", width:"auto"}} class="img-fluid" alt="..."></img>
          </div>
          </div>
          ); 
}