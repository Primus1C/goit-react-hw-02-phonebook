import React from 'react';

const Contacts = ({ contacts }) => {
    
    return (
    <section className="contacts">
      <ul className="contacts__list">
        {contacts.map(element => (
          <li className="contacts__list__item" key={element.id} id={element.id}>
            {element.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;