import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import {Link,useNavigate } from 'react-router-dom'
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
    <div className="login">
      <form>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button type="submit" onClick={login}>
        Login
      </button>
      <button onClick={loginWithGoogle}>Login with Google</button>
      <Link to="/register">sign up</Link>
    </div>
  );
}

export default Login;
