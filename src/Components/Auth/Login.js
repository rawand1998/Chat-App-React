import React,{useState,useEffect} from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase';


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const login =()=>{
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      console.log('hu')
    })
  }
    const loginWithGoogle = ()=>{
       const provider = new firebase.auth.GoogleAuthProvider()
       auth.signInWithPopup(provider)
    }
  return (
    <div className="login">
      <form onSubmit={login}>
       
        

        <label>Email</label>
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
      </form>
      <button type="submit">Login</button>
        <button onClick={loginWithGoogle} >Login with Google</button>

    </div>
  )
}

export default Login