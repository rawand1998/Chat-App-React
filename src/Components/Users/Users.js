import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import './Style.css'
function Users() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getUsers = async () => {

db.collection('users').onSnapshot((snapshot) => {
  setData(snapshot.docs.map((doc) =>doc.data()))
})
     }
     getUsers()
   },[])

  return (
    <div>
      <div>
        {data.length>0  ? data.map((item)=>(
          <div key={item.id}>
            <img src={item.img} />
            {item.name}
          </div>
        )) : <div>data not found</div>}
      </div>
    </div>
  );
}

export default Users;