import React from "react";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.emisor === "YO" ? "sent" : "received"}`}
          >
            <div className="message-content">
              {msg.texto}
            </div>
            {msg.emisor === "YO" && (
              <div className="message-status">
                {msg.status === "visto" && "✓✓"}
                {msg.status === "no-visto" && "✓"}
                {msg.status === "no-recibido" && "⏳"}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No tienes mensajes aún</p>
      )}
    </div>
  );
};

export default MessageList;



