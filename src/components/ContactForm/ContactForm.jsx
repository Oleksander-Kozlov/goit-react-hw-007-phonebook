import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const [nameC, setName] = useState(' ');
  const [number, setNumber] = useState(' ');
  //стейт для данних ім"я та номеру

  // state = {
  //   name: '',
  //   number: '',
  // };
  // Слухач інпутів
  const handleChange = event => {
    const { target } = event;
    
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };
  //Сабміт форми
  // const handleSabmit = e => {
  //   // Cкидую налаштування
  //   e.preventDefault();
  //           const haveNameInPhonebook = JSON.parse(
  //             localStorage.getItem('user-contact')
  //           ).some(
  //             ({ name }) =>
  //               name.toLowerCase() === e.currentTarget.name.value.toLowerCase()
  //           );
  //           if (haveNameInPhonebook) {
  //             return alert(
  //               `${e.currentTarget.name.value} is already in contacts`
  //             );
  //           }
  //   // Записую значення з імпуту до об"єкту
  //   dispatch(addContact( name, number ));
  //   // Оновлюю інпут
  //   setName('');
  //   setNumber('');
  // };
  const handleSabmit =   (values, {resetForm}) => {
    // console.log('values', values);
    // console.log('values', action);
    // const cont = values.name;
    const haveNameInPhonebook = JSON.parse(
      localStorage.getItem('user-contact')
    ).some(
      contact =>
        contact.name.toString().toLowerCase() ===
        values.name.toString().toLowerCase()
    );
    // const hasDuplicateNames = JSON.parse(
    //   localStorage.getItem('user-contact')
    // ).some((person, index) => {
    //   return JSON.parse(localStorage.getItem('user-contact')).some(
    //     (otherPerson, otherIndex) => {
    //       // Check if the names are the same and the indexes are different
    //       return person.name === otherPerson.name && index !== otherIndex;
    //     }
    //   );
    // });

    // console.log(hasDuplicateNames);
    // console.log(
    //   'localStorage',
    //   haveNameInPhonebook.map(
    //     cot => cot.name.toLowerCase() === nameCont.toLowerCase()
    //   )
    // );

    if (haveNameInPhonebook) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContact(nameC, number));

    resetForm();
  };

  const initialValues = { name: '', number: '' };
  // const schema = yup.object().shape({
  //   name: yup.string().required().min(4),
  //   phone: yup.number().min(4).required(),

  // });
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={handleSabmit}
    >
      <Form>
        
          <Label htmlFor="name">Name</Label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          onChange={handleChange}
            value={nameC}
          />
          <ErrorMessage name="name" component="div" />
        

        
          <Label htmlFor="number">Number</Label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
          <ErrorMessage name="number" component="div" />
        
        <ButtonAddContacts type="submit">add contacts</ButtonAddContacts>
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   children: PropTypes.node,
// };
