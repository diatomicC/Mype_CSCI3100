import React, { useState } from "react";
import { auth } from "../../index";
import { signInWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginSignUp.css";
import Header from "../Header";

const SignIn = () => {
    //variables need for login (sign in), like email and password.  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // handle page redirection
    const nav = useNavigate();

    //executed when user submits info
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        //signInWithEmailAndPassword is a function provided by firebase, allowing to login with email and password.
        const user = await signInWithEmailAndPassword(auth, email, password)
        if (user) {
          //if registration successfully done, notice the user that it's done
          alert("Login Successful")

          // redirect to user profile
          nav("/Userinfo")
        }
        console.log("Login Successful")
      } catch (err) {
        //if there's any error, show the errors as well.
        alert(err)
        console.log(err)
      }
    }

    return (
        <div className = "Body">  
        <Header />  
          <div className="main">
            <h1>Welcome to Mype</h1>
            <br></br>
            <p>Log in to access your projects, track your activities, and more.</p>
            <br></br>
            <div className="input info">
              {/*
                input bars to get users' email and password
                when user press the submit button, it triggers the function above
              */}
              <form onSubmit={handleSubmit}>
                <input id="info" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br></br>
                <input id="info" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br></br>
                <button type="submit" id="LoginSignUp">Sign in</button>
              </form>
            </div>
            <br></br>
            <span>Do not have an account? </span>
            {/*clicking on this link send the user to sign up page*/}
            <Link className="signupBtn" to="/signup">Create an account</Link>
          </div>
        </div>
      );
};

export default SignIn;
