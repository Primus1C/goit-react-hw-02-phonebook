import React from 'react';

const ContactList = ({ contacts }) => {
    
    return (
      <section className="contacts">
        <ul className="contacts__list">
          {contacts.map(element => (
            <li
              className="contacts__list__item"
              key={element.id}
              id={element.id}
            >
              {element.name}: {element.number}
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
};

export default ContactList;