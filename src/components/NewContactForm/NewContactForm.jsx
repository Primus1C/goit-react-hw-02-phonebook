import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import { nanoid } from 'nanoid';
import './NewContactForm.css';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter name and/or surname"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    //.min(10, "too short")
    //.max(10, "too long")
    .required("Must enter a phone number")
});

const initialValues = {
  name: '',
  number: '',
};

const handleSubmit = (values, {resetForm}) => {
  //console.log('Submited!')
  //console.log('vlues:',values);
  //console.log(actions);
    
    resetForm();
  };

class NewContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}>
        <Form className="NewContactForm__form" autoComplete="off">
          <label className="NewContactForm__form__label" htmlFor="name">
            Name
            <Field className='NewContactForm__form__field' type="text" name="name" />
            <ErrorMessage className='NewContactForm__form__error' name='name' component='div' />
          </label>
          <label className="NewContactForm__form__label" htmlFor="number">
            Number
            <Field className='NewContactForm__form__field' type="tel" name="number" />
            <ErrorMessage className='NewContactForm__form__error' name='number' component='div' />
          </label>
          <button id='NewContactForm__form__button' type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  };
}

export default NewContactForm;
