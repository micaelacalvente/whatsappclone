import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ContactList from "../Components/ContactList/ContactList"
import ChatWindow from "../Components/ChatWindow/ChatWindow"
import "../global.css"

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();
  const { contactId } = useParams();

  // mis contactos
  const contacts = [
    { id: 1, name: "Cristian", avatar: "/images/avatars/avatar.jpeg"},
    { id: 2, name: "Eugenio", avatar: "/images/avatars/avatar.jpeg"},
    { id: 3, name: "Roma", avatar: "/images/avatars/avatar.jpeg" },
  ]
  //logica de seleccion de contactos
  const handleContactSelect = (contact) => {
    setSelectedContact(contact)
    navigate(`/chat/${contact.id}`)
  }

  useEffect(() => {
    if (contactId) {
      const contact = contacts.find((c) => c.id === parseInt(contactId, 10))
      setSelectedContact(contact || null)
    }
  }, [contactId, contacts])

  return (
    <div className="app-container">
      <ContactList contacts={contacts} onContactSelect={handleContactSelect} />
      
      {selectedContact ? (
        <ChatWindow contact={selectedContact} />
      ) : (
        <ChatWindow/>
      )}
    </div>
  );
};

export default Home

