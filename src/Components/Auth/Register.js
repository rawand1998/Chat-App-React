import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { auth, db } from "../../firebase";
import {Link,useNavigate } from 'react-router-dom'
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
    <div className="login">
      <form>
        <label>UserName</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <label>Upload Image</label>
        <input
          type="file"
      
          onChange={handleImage}
        />
      </form>
      <button type="submit" onClick={register}>
        Register
      </button>
    </div>
  );
}

export default Register;
