import React from 'react'
import {FaPhoneAlt,FaCamera,FaInfo} from 'react-icons/fa'
export default function NavChat() {
  return (
    <div className="navchat-container">
        <div className="navChat-name">
            <img  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <p>Rawand Jaradh</p>
        </div>
        <div className="navchat-icons">
            <FaPhoneAlt className="icon-chat"/>
            <FaCamera  className="icon-chat"/>
            <FaInfo className=" info-icon"/>
        </div>
    </div>
  )
}
