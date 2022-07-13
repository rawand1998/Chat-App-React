import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';


function Login() {
    const login = ()=>{
       const provider = new firebase.auth.GoogleAuthProvider()
       auth.signInWithPopup(provider)
    }
  return (
    <div>
        <button onClick={login}>Login with Google</button>

    </div>
  )
}

export default Login