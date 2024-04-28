import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db, auth } from "../../index"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginSignUp.css";
import Header from "../Header";

const SignUp = () => {
    //variables need for registering (sign up), like email, password and username. 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    // handle page redirection
    const nav = useNavigate();

    //executed when user submits info
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        //createUserWithEmailAndPassword is a function provided by firebase, allowing to create a user with email and password.
        const user = await createUserWithEmailAndPassword(auth, email, password, username)
        if (user) {
          // create user object in users collection
          await setDoc(
            doc(db, "User", user.user.uid),
            {
              uid: user.user.uid,
              username: username,
              email: user.user.email,
              m_coin: 0,
              shopping_cart: "",
            }
          ).catch((e) => {
            alert(e.message)
          })

          // auto sign out
          signOut(auth);

          //if registration successfully done, notice the user that it's done
          alert("Account Created")

          // redirect to sign in page
          nav("/signin")
        }
        console.log("Account Created")
      } catch (err) {
        //if there's any error, show the errors as well.
        alert(err)
        console.log(err)
        
      }
    }

    return (
        <div className = "App">
          <Header />
          <div className="main">
            <h1>Sign up to Mype</h1>
            <br></br>
            <p>Sign up to access your projects, track your activities, and more.</p>
            <br></br>
            <div className="input info">
              {/*
                input bars to get users' email, username and password
                when user press the submit button, it triggers the function above
              */}
              <form onSubmit={handleSubmit}>
                <input id="info" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br></br>
                <input id="info" type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br></br>
                <input id="info" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br></br>
                <button id="LoginSignUp" type="submit" >Sign Up</button>
              </form>
            </div>
            <br></br>
            <span>Have an account? </span>
            {/*clicking on this link send the user to login page*/}
            <Link className="signinBtn" to="/signin">Login</Link>
            <br></br>
          </div>
        </div>
      );
}
export default SignUp;
