import React, { useState } from "react"
import "./MessageInput.css"

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("")

  const handleSend = () => {
    if (text.trim()) {
      onSend(text)
      setText("")
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí un mensaje"
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  )
}

export default MessageInput
