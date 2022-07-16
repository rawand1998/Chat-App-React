import React from 'react'
import Login from "../Auth/Login";
import Chat from "../Chat/Chat";
import Users from "../Users/Users";
import { ContextData } from "../../Context/GetName";
import './Style.css'
function Home() {
    const { user } = React.useContext(ContextData);
  return (
    <div className="home-container">
         {user ? 
      <div className="home">
      <Chat />
      <Users />
      </div>
       :
       <Login />}
    </div>
  )
}

export default Home