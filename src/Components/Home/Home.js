import React from 'react'
import Login from "../Auth/Login";
import Chat from "../Chat/Chat";
import Users from "../Users/Users";
import { ContextData } from "../../Context/GetName";
function Home() {
    const { user } = React.useContext(ContextData);
  return (
    <div>
         {user ? 
      <div>
      <Chat />
      <Users />
      </div>
       :
       <Login />}
    </div>
  )
}

export default Home