import React from 'react'
import { auth } from '../../firebase'

function Logout() {
    const logout = ()=>{
        auth.signOut()
    }
  return (
    <div className="logout">
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout