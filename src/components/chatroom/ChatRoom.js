// // import React, { useContext, useEffect, useState } from "react";
// // import style from "./chatroom.module.css";
// // import SockJS from "sockjs-client";
// // import Stomp from "stompjs";

// // var stompClient = null;
// // function ChatRoom() {
// //   const [publicChats, setPublicChats] = useState([]);

// //   const [userData, setUserData] = useState({
// //     userName: "",
// //     password: "",
// //     connected: false,
// //     message: "",
// //   });

// //   const handleUserName = (e) => {
// //     setUserData({ ...userData, userName: e.target.value });
// //   };

// //   const handlePassword = (e) => {
// //     setUserData({ ...userData, password: e.target.value });
// //   };

// //   const handleMessage = (e) => {
// //     setUserData({ ...userData, message: e.target.value });
// //   };

// //   function handleSendMessage(e) {
// //     e.preventDefault();
// //     let jsonObj = {
// //       name: userData.userName,
// //       content: userData.message,
// //     };
// //     stompClient.send("/app/message", {}, JSON.stringify(jsonObj));
// //     setUserData({ ...userData, message: "" });
// //   }

// //   const registerUser = (e) => {
// //     e.preventDefault();
// //     setUserData({ ...userData, connected: true });
// //     localStorage.setItem('isConnected',true)
// //     localStorage.setItem('user',userData.userName)

// //     // let socket = new SockJS("http://localhost:8844/server1");
// //     // stompClient = Stomp.over(socket);
// //     // stompClient.connect({}, onConnected, onError);
// //   };

// //   useEffect(() => {
// //     if (localStorage.getItem('connected') && !stompClient) {
// //       let socket = new SockJS("http://localhost:8844/server1");
// //       stompClient = Stomp.over(socket);

// //       stompClient.connect({}, onConnected, onError);
// //     }

// //     // return () => {
// //     //   // Clean up the connection when the component unmounts
// //     //   if (stompClient) {
// //     //     stompClient.disconnect();
// //     //   }
// //     // };
// //   }, [userData.connected]);

// //   const onConnected = () => {
// //     setUserData({ ...userData, connected: true });
// //     stompClient.subscribe("/topic/return-to", onPublicMessageReceived);
// //   };

// //   const onError = (err) => {
// //     console.log(err);
// //   };

// //   const onPublicMessageReceived = (response) => {
// //     publicChats.unshift(JSON.parse(response.body));
// //     setPublicChats([...publicChats]);
// //   };

// //   return (
// //     <>
// //       {localStorage.getItem('user') ? (
// //         <div id={style.chatFormMainContainer}>
// //           <ul id={style.messages}>
// //             {publicChats.length ? (
// //               publicChats?.map((msg, index) => (
// //                 <li key={index}>
// //                   <strong>{localStorage.getItem('user') + " :"}</strong>{" "}
// //                   <span id={style.messageContent}>{msg.content}</span>
// //                 </li>
// //               ))
// //             ) : (
// //               <h1 id={style.startChatTitle}>Start Chat</h1>
// //             )}
// //           </ul>
// //           <form id={style.chatRoom} onSubmit={handleSendMessage}>
// //             <div id={style.messageContainer}>
// //               <input
// //                 id="input-message"
// //                 placeholder="Enter Message"
// //                 onChange={handleMessage}
// //                 value={userData.message}
// //               />
// //               <button id="send-btn">Send</button>
// //             </div>
// //           </form>
// //         </div>
// //       ) : (
// //         <div id={style.loginFormMainContainer}>
// //           <form action="" id={style.loginForm} onSubmit={registerUser}>
// //             <input
// //               type="text"
// //               placeholder="Enter Your Name"
// //               name="name"
// //               value={userData.userName}
// //               onChange={handleUserName}
// //               required
// //             />
// //             <input
// //               type="password"
// //               name="password"
// //               value={userData.password}
// //               id={style.password}
// //               placeholder="Enter Your Password"
// //               onChange={handlePassword}
// //               required
// //             />
// //             <button id={style.Login}>Login</button>
// //           </form>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default ChatRoom;

// //2
// // import React, { useEffect, useState } from "react";
// // import style from "./chatroom.module.css";
// // import SockJS from "sockjs-client";
// // import Stomp from "stompjs";

// // var stompClient = null;

// // function ChatRoom() {
// //   const [publicChats, setPublicChats] = useState([]);
// //   const [userData, setUserData] = useState({
// //     userName: localStorage.getItem("user"),
// //     message: "",
// //     connected: false,
// //   });

// //   const handleMessage = (e) => {
// //     setUserData({ ...userData, message: e.target.value });
// //   };

// //   function handleSendMessage(e) {
// //     e.preventDefault();
// //     let jsonObj = {
// //       name: userData.userName,
// //       content: userData.message,
// //     };
// //     stompClient.send("/app/message", {}, JSON.stringify(jsonObj));
// //     setUserData({ ...userData, message: "" });
// //   }

// //   useEffect(() => {
// //     if (localStorage.getItem("isConnected") && !stompClient) {
// //       let socket = new SockJS("http://localhost:8844/server1");
// //       stompClient = Stomp.over(socket);

// //       stompClient.connect({}, onConnected, onError);
// //     }
// //   }, [userData.connected]);

// //   const onConnected = () => {
// //     setUserData({ ...userData, connected: true });
// //     stompClient.subscribe("/topic/return-to", onPublicMessageReceived);
// //   };

// //   const onError = (err) => {
// //     console.log(err);
// //   };

// //   const onPublicMessageReceived = (response) => {
// //     publicChats.unshift(JSON.parse(response.body));
// //     setPublicChats([...publicChats]);
// //   };

// //   return (
// //     <div id={style.chatFormMainContainer}>
// //       <ul id={style.messages}>
// //         {publicChats.length ? (
// //           publicChats?.map((msg, index) => (
// //             <li key={index}>
// //               <strong>{msg.name + " :"}</strong>{" "}
// //               <span id={style.messageContent}>{msg.content}</span>
// //             </li>
// //           ))
// //         ) : (
// //           <h1 id={style.startChatTitle}>Start Chat</h1>
// //         )}
// //       </ul>
// //       <form id={style.chatRoom} onSubmit={handleSendMessage}>
// //         <div id={style.messageContainer}>
// //           <input
// //             id="input-message"
// //             placeholder="Enter Message"
// //             onChange={handleMessage}
// //             value={userData.message}
// //           />
// //           <button id="send-btn">Send</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ChatRoom;

// //3
// import React, { useEffect, useState } from "react";
// import style from "./chatroom.module.css";
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";

// let stompClient = null;

// function ChatRoom({publicChats, setPublicChats}) {

//   const [status,setStatus] = useState('')
//   const [connectedUsers, setConnectedUsers] = useState([]);
//   const [userData, setUserData] = useState({
//     userName: localStorage.getItem("user"),
//     message: "",
//     connected: false,
//   });

//   const handleMessage = (e) => {
//     setUserData({ ...userData, message: e.target.value });
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (userData.message.trim()) {
//       let jsonObj = {
//         name: userData.userName,
//         content: userData.message,
//       };
//       stompClient.send("/app/message", {}, JSON.stringify(jsonObj));
//       setUserData({ ...userData, message: "" });
//     }
//   };

//   useEffect(() => {
//     console.log(stompClient,'Stomp');
//     console.log(localStorage.getItem("isConnected"));

//     if (localStorage.getItem("isConnected") && !stompClient) {
//       let socket = new SockJS("http://localhost:8844/server1");
//       stompClient = Stomp.over(socket);
//       stompClient.connect({}, onConnected, onError);
//     }
//     // Cleanup on component unmount
//     // return () => {
//     //   if (stompClient) {
//     //     stompClient.disconnect();
//     //   }
//     // };
//   }, [userData.connected,localStorage.getItem("isConnected")]);

//   const onConnected = () => {
//     setUserData({ ...userData, connected: true });
//     stompClient.subscribe("/topic/return-to", onPublicMessageReceived);
//     stompClient.subscribe("/topic/user-status", onUserStatusReceived);
//     stompClient.send("/app/user-connected", {}, userData.userName);
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const onPublicMessageReceived = (response) => {
//     const message = JSON.parse(response.body);
//     setPublicChats((prevChats) => [message, ...prevChats]);
//   };

//   const onUserStatusReceived = (response) => {
//     const userStatus = JSON.parse(response.body);
//     setStatus(userStatus.type)
//     if (userStatus.type === "CONNECT") {
//       setConnectedUsers((prevUsers) => [...prevUsers, userStatus.userName]);
//       setPublicChats((prevChats) => [
//         {
//           name: "System",
//           content: `${userStatus.userName} has connected.`,
//         },
//         ...prevChats,
//       ]);
//     }else if (userStatus.type === "DISCONNECT") {

//       setPublicChats([])
//       console.log(userStatus.type);

//       setConnectedUsers((prevUsers) =>
//         prevUsers.filter((user) => user !== userStatus.userName)
//       );
//       setPublicChats((prevChats) => [
//         {
//           name: "System",
//           content: `${userStatus.userName} has disconnected.`,
//         },
//         ...prevChats,
//       ]);
//     }
//     console.log(`${userStatus.userName} is ${userStatus.type}`);
//   };

//   return (
//     <div id={style.chatFormMainContainer}>
//       <ul id={style.messages}>
//         {publicChats.length ? (
//           publicChats.map((msg, index) => (
//             <li key={index}>
//               <strong>{msg.name}:</strong>{" "}
//               <span id={style.messageContent}>{msg.content}</span>
//             </li>
//           ))
//         ) : (
//           <h1 id={style.startChatTitle}>Start Chat</h1>

//         )}
//       </ul>
//       <form id={style.chatRoom} onSubmit={handleSendMessage}>
//         <div id={style.messageContainer}>
//           <input
//             id="input-message"
//             placeholder="Enter Message"
//             onChange={handleMessage}
//             value={userData.message}
//           />
//           <button id="send-btn" type="submit">
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ChatRoom;

// src/components/chatroom/ChatRoom.js
// src/components/chatroom/ChatRoom.js
// src/components/chatroom/ChatRoom.js
import React, { useEffect, useState } from "react";
import style from "./chatroom.module.css";
import { useWebSocket } from "../../components/context/WebSocketContext";

function ChatRoom({ publicChats, setPublicChats, userName }) {
  const { stompClient, connect, disconnect, connected } = useWebSocket();
  const [userData, setUserData] = useState({
    userName,
    message: "",
    connected: false,
  });

  useEffect(() => {
    if (localStorage.getItem("isConnected") === "true" && !connected) {
      connect();
      setUserData((prev) => ({ ...prev, connected: true }));
    }
  }, [connect, connected]);

  useEffect(() => {
    if (connected) {
      stompClient.subscribe("/topic/return-to", onPublicMessageReceived);
      stompClient.subscribe("/topic/user-status", onUserStatusReceived);
      stompClient.send("/app/user-connected", {}, userData.userName);
    } else if (localStorage.getItem("isConnected") === "false") {
      // return () => {
        stompClient.send("/app/user-disconnected", {}, userData.userName);
      // };
    }
  }, [connected, userData.userName, stompClient, disconnect]);

  const handleMessage = (e) => {
    setUserData({ ...userData, message: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userData.message.trim() && stompClient) {
      const jsonObj = {
        name: userData.userName,
        content: userData.message,
      };
      stompClient.send("/app/message", {}, JSON.stringify(jsonObj));
      setUserData({ ...userData, message: "" });
    }
  };

  const onPublicMessageReceived = (response) => {
    const message = JSON.parse(response.body);
    setPublicChats((prevChats) => {
      return [message, ...prevChats];
      // if (!prevChats.length || prevChats[0].content !== message.content || prevChats[0].name !== message.name) {
      // }
      // return prevChats;
    });
  };

  const onUserStatusReceived = (response) => {
    const userStatus = JSON.parse(response.body);
    let statusMessage = "";

    if (userStatus.type === "CONNECT") {
      statusMessage = `${userStatus.userName} has connected.`;
    } else if (userStatus.type === "DISCONNECT") {
      statusMessage = `${userStatus.userName} has disconnected.`;
    }

    setPublicChats((prevChats) => {
      if (!prevChats.length || prevChats[0].content !== statusMessage) {
        return [
          {
            name: "System",
            content: statusMessage,
          },
          ...prevChats,
        ];
      }
      return prevChats;
    });
  };

  return (
    <div id={style.chatFormMainContainer}>
      <ul id={style.messages}>
        {publicChats.length ? (
          publicChats.map((msg, index) => (
            <li key={index}>
              <strong id={style.userName}>{msg.name}&nbsp; </strong>{": "}
              <span id={style.messageContent}>{msg.content}</span>
            </li>
          ))
        ) : (
          <h1 id={style.startChatTitle}>Start Chat</h1>
        )}
      </ul>
      <form id={style.chatRoom} onSubmit={handleSendMessage}>
        <div id={style.messageContainer}>
          <input
            id="input-message"
            placeholder="Enter Message"
            onChange={handleMessage}
            value={userData.message}
          />
          <button id="send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatRoom;
