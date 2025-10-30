// export default function UserList({ users }) {
//   return (
//     <table style={{ background: "rgba(255, 255, 255, 0.2)",
//             backdropFilter: "blur(6px)",
//             borderRadius: "10px",
//             margin: "10px auto",
//             padding: "12px",
//             width: "280px",
//             color: "#fff",
//             boxShadow: "0 2px 6px rgba(0,0,0,0.2)", }}>

//       {users.map((user) => (
//         <li key={user.id} >
//           <strong>{user.name}</strong> — {user.role}
//         </li>
//       ))}
//     </table>
//   );
// }

export default function UserList({ users }) {
  return (
    <table
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px)",
        borderRadius: "10px",
        margin: "20px auto",
        padding: "12px",
        width: "350px",
        color: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "rgba(0, 255, 255, 0.2)" }}>
          <th
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #aaa",
            }}
          >
            Name
          </th>
          <th
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #aaa",
            }}
          >
            Role
          </th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                fontWeight: "bold",
                  textAlign: "left",
              }}
            >
              {user.name}
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "left",
              }}
            >
              {user.role}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

