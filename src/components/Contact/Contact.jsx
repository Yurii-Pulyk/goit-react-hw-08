import React from 'react';

const Contact = ({ name, phone, onDelete }) => {
  return (
    <div>
      <p>
        {name}: {phone}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
