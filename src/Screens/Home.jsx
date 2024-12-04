import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ContactList from "../Components/ContactList/ContactList"
import ChatWindow from "../Components/ChatWindow/ChatWindow"
import { contacts as contactData } from "../data/whatsapp-data"
import "../global.css";

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();
  const { contactId } = useParams();

  // array de contactos
  const contacts = contactData.map((contact) => ({
    ...contact
  }));

  // Lógica de selección de contacto
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    navigate(`/chat/${contact.id}`);
  };

  useEffect(() => {
    if (contactId) {
      const contact = contacts.find((c) => c.id === parseInt(contactId, 10));
      if (contact) {
        setSelectedContact(contact);  // Solo actualizar si se encuentra el contacto
      }
    }
  }, [contactId]); // Solo escuchar cambios en contactId

  return (
    <div className="app-container">
      <ContactList contacts={contacts} onContactSelect={handleContactSelect} />
      {selectedContact ? (
        <ChatWindow contact={selectedContact} />
      ) : (
        <ChatWindow />
      )}
    </div>
  );
};

export default Home



