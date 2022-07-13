import React,{useState,useEffect} from 'react'
import Logout from './Logout'

import {db} from '../firebase'

function Chat() {
    const [msg,setMsg] = useState([])
    
    useEffect(()=>{
     const getMsg = async () => {

db.collection('massage').onSnapshot((snapshot) => {
    setMsg(snapshot.docs.map((doc) =>doc.data()))
})
      }
      getMsg()
    },[])
  return (
  
    <div>
          <Logout />
          <div>
           {msg.map((msg) =>(
            <h1>{msg.text}</h1>
           ))}
          </div>
      
    </div>
  )
}

export default Chat