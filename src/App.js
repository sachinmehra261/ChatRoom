// import { useState } from "react";
// import "./App.css";
// import ChatRoom from "./components/chatroom/ChatRoom";
// import Login from "./components/register/Register";
// import Navbar from "./components/navbar/Navbar";

// function App() {

//   const [publicChats, setPublicChats] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("isConnected") === "true"
//   );

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <>
//       {/* <ChatRoom /> */}
//       {/* <Register/> */}

//       {isLoggedIn ? <Navbar setPublicChats={setPublicChats} setIsLoggedIn={setIsLoggedIn}/> : null}
//       {isLoggedIn ? <ChatRoom publicChats={publicChats} setPublicChats={setPublicChats} isLoggedIn={isLoggedIn}/> : <Login onLogin={handleLogin} />}
//     </>
//   );
// }

// export default App;


// src/App.js
import React from 'react'
import Home from './Home'
import "./App.css";
import { WebSocketProvider } from "../src/components/context/WebSocketContext";
import { RouterProvider } from 'react-router-dom';
import router from './components/Router';

function App() {
  return (
    <>
     <WebSocketProvider>
      <RouterProvider router={router}/>
     </WebSocketProvider>
    </>
  )
}

export default App


