import React from 'react'
import Login from "../Auth/Login";
import Chat from "../Chat/Chat";
import Users from "../Users/Users";
import { ContextData } from "../../Context/GetName";
import './Style.css'
import NavBar from '../NavBar/NavBar'
function Home() {
    const { user } = React.useContext(ContextData);
  return (
    <div className="home-container">
      <div>
        
      </div>
         {user ? 
      <div className="home">
        <div><NavBar /></div>
        <div className="chat-user">
      <Chat />
      <Users />
      </div>
      </div>
       :
       <Login />}
    </div>
  )
}

export default Home