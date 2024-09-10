import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [stompClient, setStompClient] = useState(null);
  const [connected, setConnected] = useState(false);

  const connect = useCallback(() => {
    if (!stompClient) {
      const socket = new SockJS('http://localhost:8844/server1');
      const client = Stomp.over(socket);
      client.connect({}, (frame) => {
        console.log('Connected ',frame);
        setStompClient(client);
        setConnected(true);
      }, (error) => {
        console.error('Connection error: ', error);
        setStompClient(null);
        setConnected(false);
      });
    }
  }, [stompClient]);

  const disconnect = useCallback(() => {
    if (stompClient) {
      stompClient.disconnect(() => {
        console.log('Disconnected');
        setStompClient(null);
        setConnected(false);
      });
    }
  }, [stompClient]);

  useEffect(() => {
    return () => {
      // Only disconnect on unmount
      disconnect();
    };
  }, [disconnect]);

  return (
    <WebSocketContext.Provider value={{ stompClient, connect, disconnect, connected,setConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
