import React from "react"
import "./ContactList.css"

const ContactList = ({ contacts, onContactSelect }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="contact-item"
          onClick={() => onContactSelect(contact)}
        >
          <img
            className="contact-avatar"
            src={contact.avatar}
            alt={contact.name}
          />
          <div className="contact-info">
            <span className="contact-name">{contact.name}</span>
            <span className="contact-status">{contact.status}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactList
