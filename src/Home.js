import { useState } from "react";

import ChatRoom from "./components/chatroom/ChatRoom";
import Login from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";


function Home() {
  const [publicChats, setPublicChats] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isConnected") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isConnected", "true");
  };

  return (
   <>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn ? (
        <ChatRoom publicChats={publicChats} setPublicChats={setPublicChats} userName={localStorage.getItem("user")} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
   </>
  );
}

export default Home;