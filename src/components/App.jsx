import React from 'react';

import NewContactForm from './NewContactForm/NewContactForm';
import Contacts from './Contacts/Contacts';


export class App extends React.Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}


  
  
  render() {
    
    const handleSubmit = evt => { 
      evt.preventDefault();
      const { name, contact } = evt.target.elements;
    };

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101' 
        }}
      >
        <h3>Phonebook</h3>
<NewContactForm  contacts={this.state.contacts} /> 
        
        <h3>Contacts</h3>
        
        <label>
            Find contacts by name
            <input 
              type="text"
              name="filter"
            /> 
          </label>

        <Contacts
          contacts={this.state.contacts} />  
        
      </div>
    );
  };
}