import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../index"
import { Link } from "react-router-dom";
import "../../styles/LoginSignUp.css";
import Header from "../Header";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        const user = await createUserWithEmailAndPassword(auth, email, password, username)
        if (user) {
          alert("Account Created")
        }
        console.log("Account Created")
      } catch (err) {
        alert(err)
        console.log(err)
        
      }
    }

    return (
        <div classname = "App">
          <Header />
          <div className="main">
            <h1>Sign up to Mype</h1>
            <br></br>
            <p>Sign up to access your projects, track your activities, and more.</p>
            <br></br>
            <div class="input info">
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
            <Link to="/signin">Login</Link>
            <br></br>
          </div>
        </div>
      );
}
export default SignUp;
