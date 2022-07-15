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
    <div>
      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <img src={item.img} />
              {item.name}
              <span className={user.uid === item.uid ? "online" : "offline"}>
                active
              </span>
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
