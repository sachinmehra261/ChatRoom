// import React from "react";
// import "./navbar.css";

// function Navbar({ setIsLoggedIn }) {
//   function handleLogout() {
//     localStorage.setItem("isConnected", false);
//     setIsLoggedIn(false);
//   }

//   function handleEdit(){
    
//   }

//   return (
//     <>
//       <div className="nav-main-container">
//         <div id="nav-sub-container">
//           <ul>
//             <li>Home</li>
//           </ul>
//           <strong id="username">
//             {"Hello " + localStorage.getItem("user")}
//           </strong>
//           <div>
//             <button id="navbar-btn" onClick={handleLogout}>
//               {localStorage.getItem("isConnected") === "false"
//                 ? "Login"
//                 : "Logout"}
//             </button>
//             <button id="navbar-btn" onClick={handleEdit}>Edit</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// src/components/navbar/Navbar.js
import React from "react";
import "./navbar.css";
import { useWebSocket } from "../../components/context/WebSocketContext";
import { useNavigate } from "react-router";


function Navbar({ setIsLoggedIn }) {
  const { disconnect,setConnected } = useWebSocket();
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.setItem("isConnected", false);
    setConnected(false)
    // Notify the server about the disconnection
    setTimeout(()=>{
      setIsLoggedIn(false);
    },1000)
    setTimeout(()=>{
      disconnect();
    },2000)

    // Update local storage and state
  }

  function handleEdit(){
    navigate('/edit/update')
  }

  return (
    <div className="nav-main-container">
      <div id="nav-sub-container">
        <ul>
          <li>Home</li>
        </ul>
        <strong id="username">
          {"Hello " + localStorage.getItem("user")}
        </strong>
        <div>
          <button id="navbar-btn" onClick={handleLogout}>
            {localStorage.getItem("isConnected") === "false"
              ? "Login"
              : "Logout"}
          </button>
          <button id="navbar-btn" onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
