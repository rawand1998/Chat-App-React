import React,{useState,useEffect} from 'react'
import NavChat from '../Chat/NavChat'

import {db,auth} from '../../firebase'
import SendMsg from './SendMsg'
import './Style.css'
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
  
    <div className="chat-container">
   
        
  <NavChat/>
          <div className="msgs">
           {msg.map(({ id, text, photoURL, uid }) =>(
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
           
               <div className="data">
            
                <p>{text}</p>
                {/* <img src={photoURL} /> */}
              </div>
             
          
            </div>
           ))}
          </div>
          <SendMsg />
      
    </div>
  )
}

export default Chat