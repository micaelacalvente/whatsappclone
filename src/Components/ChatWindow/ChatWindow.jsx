import React, { useState, useEffect } from "react"
import MessageList from "../MessageList/MessageList"
import MessageInput from "../MessageInput/MessageInput"
import "./ChatWindow.css"

const ChatWindow = ({ contact }) => {
  const [messages, setMessages] = useState([]);

  // Actualizamos los mensajes cuando cambia el contacto
  useEffect(() => {
    if (contact && contact.mensajes) {
      setMessages(contact.mensajes);
    }
  }, [contact]);

  const handleSend = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { emisor: "YO", hora: new Date().toLocaleTimeString(), texto: text, status: "no-visto" }
    ]);
  };

  if (!contact) {
    return (
      <div className="default-screen">
        <h2>Bienvenido a WhatsApp</h2>
        <p>Selecciona un contacto y empieza a chatear!</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img
          className="chat-header-avatar"
          src={contact.avatar}
          alt={contact.nombre}
        />
        <h3>{contact.nombre}</h3>
      </div>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow



