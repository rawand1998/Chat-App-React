import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import Login from "./Components/Auth/Login";
import Chat from "./Components/Chat/Chat";
import Register from "./Components/Auth/Register";
import Users from "./Components/Users/Users";
import { ContextData } from "./Context/GetName";
function App() {
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
     
      {/* <Register /> */}
    </div>
  );
}

export default App;
