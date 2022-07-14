import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'
import './App.css'
import Login from './Components/Auth/Login'
import Chat from './Components/Chat/Chat'
import Register from './Components/Auth/Register'
import Users from './Components/Users/Users'
function App() {
  const [user] = useAuthState(auth)
  console.log(user)
 return (
   <div>
       {user ? <Chat /> : <Login />}
       {/* <Users /> */}
   </div>
 )
}

export default App;
