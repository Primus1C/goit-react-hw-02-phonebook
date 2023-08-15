import React from 'react';
import { nanoid } from 'nanoid';
import './NewContactForm.css';

class NewContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }
  
    /*
  handleSubmit = evt => {
    //this.setState({ name: evt.currentTarget.name });
  };
    */

    render() {
        return (
            <form
                className="NewContactForm__form"
                autoComplete="off"
            //    onSubmit={handleSubmit}
            >
                <label className="NewContactForm__form__label">
                    Name{' '}
                    <input
                        type="text"
                        name="name"
                        id={nanoid()}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
