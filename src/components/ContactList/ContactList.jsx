// src/components/ContactList/ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
