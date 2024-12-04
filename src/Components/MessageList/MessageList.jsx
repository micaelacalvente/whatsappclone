import React from "react";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "Yo" ? "sent" : "received"}`}
          >
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))
      ) : (
        <p>No tienes mensajes aun</p>
      )}
    </div>
  );
};

export default MessageList;
