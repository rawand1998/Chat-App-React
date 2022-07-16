import React from 'react'
import { FaRegUser,FaBell } from "react-icons/fa";
import Logout from '../Auth/Logout';
import './Style.css'
function NavBar() {
  return (
    <div className="navBar-container">
      <div className="navBar-icon">
      <Logout />
      <FaBell  className="icon"/>
        <FaRegUser  className="icon"/>
        </div>
    </div>
  )
}

export default NavBar