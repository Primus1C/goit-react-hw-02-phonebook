import React from 'react';
import { nanoid } from 'nanoid';
import './NewContactForm.css';

class NewContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }
  
    
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.createContact({
          name: this.state.name,
          number: this.state.number,
        });
        /*
      console.log('before', evt.currentTarget);
        this.setState({ name: evt.currentTarget.name });
         console.log('after',this.state);
         */
  };
    

    render() {
        return (
          <form
            className="NewContactForm__form"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <label className="NewContactForm__form__label">
              Name{' '}
              <input
                type="text"
                name="name"
                id={nanoid()}
                //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <label className="NewContactForm__form__label">
              Number{' '}
              <input
                type="tel"
                name="number"
                //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>

            <button type="submit" className="NewContactForm__form__button">
              Add contact
            </button>
          </form>
        );
    }
    
}

export default NewContactForm;
