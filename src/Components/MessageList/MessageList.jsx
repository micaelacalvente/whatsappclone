import React from "react"
import "./MessageList.css"

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.emisor === "YO" ? "sent" : "received"}`}
          >
            <strong>{msg.emisor}: </strong>
            {msg.texto}
          </div>
        ))
      ) : (
        <p>No tienes mensajes aún.</p>
      )}
    </div>
  );
};

export default MessageList


