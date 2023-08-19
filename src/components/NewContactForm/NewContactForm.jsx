import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import { nanoid } from 'nanoid';
//import './NewContactForm.css';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter name and/or surname"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Must enter a phone number")
});

const initialValues = {
  name: '',
  number: '',
};


export const NewContactForm = () => {
  const handleSubmit = (values, actions) => {
  console.log('Submited!')
  //console.log('vlues:',values);
  //console.log(actions);
  };
  
  return (
    <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="tel" name="number" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
