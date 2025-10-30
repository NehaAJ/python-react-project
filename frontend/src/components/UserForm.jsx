import React, { useState } from "react";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser({ name, role });
    setName("");
    setRole("");
  };

  return (
    <div style={{ 
        textAlign: "center",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:"460px",
        paddingLeft:"460px"}}>
      <form onSubmit={handleSubmit}     style={{
      display: "flex",
      flexDirection: "column", 
      gap: "15px",   
       background: "rgba(255, 255, 255, 0.2)", // semi-transparent white
    backdropFilter: "blur(10px)",           // glass blur effect
    WebkitBackdropFilter: "blur(10px)",     // for Safari
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.3)",           
      color: "white",
      padding: "30px",
      
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    }}
>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
      <button  style={{
    
       backgroundColor: "#2AFFE8", 
       color: "#4D4D4D",
       fontSize: "16px",
       fontWeight: "bold",
       fontFamily: "Arial",
       marginLeft:"50px",
       marginRight:"50px"
    }} type="submit">Add User</button>
    </form>
    </div>
  );
}
