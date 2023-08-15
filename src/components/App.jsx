import React from 'react';
import { nanoid } from 'nanoid'
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

  handleOnChange = evt => { 
    this.setState({name:evt.currentTarget.name})
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
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>
            Name
            <input 
              type="text"
              name="name"
              id={nanoid()}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            /> 
          </label>

          <label>
            Number
            <input 
              type="tel"
              name="number"
            /> 
          </label>
            
          <button
            type="submit">Add contact</button>

        </form>

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