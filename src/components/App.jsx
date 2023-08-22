import React  from 'react';

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
   
  handleNewContactSubmit = evt => { 
    console.log('App handle!')
      evt.preventDefault();
      const { name, contact } = evt.target.elements;
  };  
  
  
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
        <ContactForm contacts={this.state.contacts} /> 
                
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} />
        <ContactList contacts={this.state.contacts} />
        
      </div>
    );
  };
}