import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'
import './App.css'
import Login from './Components/Login'
import Chat from './Components/Chat'
function App() {
  const [user] = useAuthState(auth)
 return (
   <div>
       {user ? <Chat /> : <Login />}
   </div>
 )
}

export default App;
