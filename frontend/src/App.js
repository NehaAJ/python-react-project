import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers, addUser } from "./services/api";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleAddUser = async (user) => {
    const newUser = await addUser(user);
    setUsers([...users, newUser]);
  };

  return (
    <div style=
    {{ textAlign: "center", 
       padding: "40px",
       backgroundColor: "#000000",
       minHeight: "100vh" ,
       fontSize:"15px"
         }}>
      <h1 style={{ color: "#ffffff" }}>Users & Roles</h1>
          <div style={{ marginBottom: "50px" }}>
           <UserForm onAddUser={handleAddUser} />
           <UserList users={users} />
        </div>
    </div>
  );
}
