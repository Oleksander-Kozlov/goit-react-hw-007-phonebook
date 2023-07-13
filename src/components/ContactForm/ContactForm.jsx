import React from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';

import {
  // ContactFormStyle,
  Field,
  Label,
  ButtonAddContacts,
  Form,
} from '../ContactForm/ContactForm.styled.js';
// import PropTypes from 'prop-types';
import * as yup from 'yup';
import { addContact } from 'redux/contactsSlise.js';

export const ContactForm = () => {
  const dispatch = useDispatch();  
  const contacts = useSelector(state => state.contacts);

  const handleSabmit = (values, { resetForm }) => {
    
 
    const haveNameInPhonebook = contacts.some(
      contact =>
        contact.name.toLowerCase() ===
        values.name.toLowerCase()
    );

    if (haveNameInPhonebook) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContact(values.name, values.number));

    resetForm();
  };

  const initialValues = { name: '', number: '' };
  const schema = yup.object().shape({
    name: yup.string().required().min(4),
    number: yup.number().required().min(4),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        <Label htmlFor="name">Name</Label>
        <Field name="name" />
        <ErrorMessage name="name" component="div" />

        <Label htmlFor="number">Number</Label>
        <Field name="number" />
        <ErrorMessage name="number" component="div" />

        <ButtonAddContacts type="submit">add contacts</ButtonAddContacts>
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   children: PropTypes.node,
// };
