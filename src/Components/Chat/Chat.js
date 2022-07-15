import React,{useState,useEffect} from 'react'
import Logout from '../Auth/Logout'

import {db,auth} from '../../firebase'
import SendMsg from './SendMsg'

function Chat() {
    const [msg,setMsg] = useState([])
    
    useEffect(()=>{
     const getMsg = async () => {

db.collection('massage').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
    setMsg(snapshot.docs.map((doc) =>doc.data()))
})
      }
      getMsg()
    },[])
  return (
  
    <div>
          <Logout />
          <SendMsg />
          <div className="msgs">
           {msg.map(({ id, text, photoURL, uid }) =>(
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
            <h1>{text}</h1>
            <img src={photoURL} />
            </div>
           ))}
          </div>
     
      
    </div>
  )
}

export default Chat