import React from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'

export class App extends React.Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  addNewContact = ({ name, number }) => {
    const contactArray = this.state.contacts;
    if (contactArray.find(e=> e.name===name )) {
      alert(name + ' is already in contacts!'); 
      return;
    }
    contactArray.push({ id: nanoid(), name: name, number: number });
    this.setState({ contacts: contactArray });
  }
  
  deleteOldContact = ( id ) => { 
    const contactArray = this.state.contacts.filter(contact => contact.id != id);   
    this.setState({ contacts: contactArray });
  }

  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101' 
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addNewContact} /> 
                
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} />
        <ContactList contacts={this.state.contacts} deleteContact={this.deleteOldContact } />
        
      </div>
    );
  };
}