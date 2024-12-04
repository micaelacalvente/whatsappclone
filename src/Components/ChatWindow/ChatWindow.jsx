import React, { useState } from "react"
import MessageList from "../MessageList/MessageList"
import MessageInput from "../MessageInput/MessageInput"
import "./ChatWindow.css"

const ChatWindow = ({ contact }) => {
  const [messages, setMessages] = useState([])

  const handleSend = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Yo", text },
    ])
  }

  if (!contact) {
    return (
      <div className="default-screen">
        <h2>Bienvenido a Whatsapp</h2>
        <p>Selecciona un contacto y empeza a chatear!</p>
      </div>
    )
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img
          className="chat-header-avatar"
          src={contact.avatar}
          alt={contact.name}
        />
        <h3>{contact.name}</h3>
      </div>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  )
}

export default ChatWindow

