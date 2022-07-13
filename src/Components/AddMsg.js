import React,{useState} from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase/compat/app';
function AddMsg() {
    const { uid, photoURL } = auth.currentUser
    const [msg,setMsg] = useState('')
    const submit=()=>{
        db.collection('massage').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
  return (
   
    <div>
        <form onSubmit={submit}>
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}  placeholder="Massage"/>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default AddMsg