import React from 'react';

class ContactList extends React.Component {
  state = {};

  //const ContactList = ({ contacts }) => {
    
  handleClick = id => {
    this.props.deleteContact(id)
  };

  render() {
    return (
      <section className="contacts">
        <ul className="contacts__list">
          {this.props.contacts.map(element => (
            <li
              className="contacts__list__item"
              key={element.id}
              id={element.id}
            >
              {element.name}: {element.number}
              <button onClick={() => this.handleClick(element.id)} type='button'>  Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  };
};

export default ContactList;