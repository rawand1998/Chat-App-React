import React, { useState, useEffect} from "react";
import { db } from "../../firebase";
import "./Style.css";
import { ContextData } from "../../Context/GetName";

function Users() {
  const [data, setData] = useState([]);
  const { user } = React.useContext(ContextData);
  useEffect(() => {
    const getUsers = async () => {
      db.collection("users").onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });
    };
    getUsers();
  }, []);

  return (
    <div className="user-container">
      <div className="users">
        <h1>Users</h1>
        <input  type="text" placeholder="Search"/>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="items">
              <p className={user.uid === item.uid ? "online" : "offline"}>
                
                </p>
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
              <p>{item.name}</p>
              
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
}

export default Users;
