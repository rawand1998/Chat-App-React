import React, { useState, useEffect } from "react";

import { auth, db } from "../../firebase";
import {useNavigate } from 'react-router-dom'
import './Style.css'
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");
  const nagvigate = useNavigate()
  const handleImage = (e)=>{
    const image = e.target.files[0].name
    setImg(img => (image))
 
  }
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password).then((res) => {
      const user = res.user;
           console.log(user.uid)
      db.collection("users").doc(user.uid).set({
        uid: user.uid,
        email: email,
        name: userName,
        img: img,
      }).then(()=>{
        nagvigate('/login')
      })
    });
  };
  return (
   
    <div className="login-pg">
    <div className="login-form-area">
      <div className="login-form">
      <div className="login-heading">
        <span>Register</span>
        <p>Enter Register details to get access</p>
      </div>
      <div className="login-box">
      <div className="single-input-feilds">
          <label for="">Username </label>
          <input  value={userName}  placeholder="Email Address"  name="name"
        onChange={(e)=>setUserName(e.target.value)} />
          
        </div>
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
    
        <button className="submit-btn3-register submit-btn3" onClick={Register}>Register </button>
      </div>
    </div>
    </div>

  
  </div>
  );
}

export default Register;
