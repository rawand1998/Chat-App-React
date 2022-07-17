import React,{useState} from 'react'
import {db,auth} from '../../firebase'
import firebase from 'firebase/compat/app';
import './Style.css'
function SendMsg({scroll}) {
 
    const { uid, photoURL } = auth.currentUser
    const [msg,setMsg] = useState('')
    const submit=(e)=>{
        e.preventDefault()
        db.collection('massage').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
        console.log(scroll,"==========")
    }
  return (
   
    <div>
        <form onSubmit={submit}>
        <div className="sendMsg">
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}  placeholder="Massage"/>
            <button type="submit">Send</button>
            </div>
        </form>
    </div>
  )
}

export default SendMsg