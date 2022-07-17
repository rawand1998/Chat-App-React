import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import {Link,useNavigate } from 'react-router-dom'
import './Style.css'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const nagvigate = useNavigate()
  const login = () => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      nagvigate('/')
    });
  };
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="login-pg">
    <div className="login-form-area">
      <div className="login-form">
      <div className="login-heading">
        <span>Login</span>
        <p>Enter Login details to get access</p>
      
      </div>
      <div className="login-box">
        <div className="single-input-feilds">
          <label for="">Email Address</label>
          <input  value={email}  placeholder="Email Address" name="email"
        onChange={(e)=>setEmail(e.target.value)} />
         
        </div>
        <div  className="single-input-feilds">
        <label>Password</label>
      <input
        type="password"
        placeholder="Email Address"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        name="password"
      />
       
        </div>
       
      </div>
      <div className="login-footer">
        <p> Don’t have an account? <Link to="/register">Sign Up</Link></p>
        <div className="login-btns">
        <button className="submit-btn3" onClick={login}>Login </button>
        <button className="submit-btn" onClick={loginWithGoogle}>Login With Google </button>
        </div>
       
      </div>
    </div>
    </div>

  
  </div>
  );
}

export default Login;
