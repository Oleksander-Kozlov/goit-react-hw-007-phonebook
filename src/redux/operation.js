import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as ContactAPI from './ContactAPI';
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './contactsSlise.js';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const contacts = await axios.get(
//       'https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts'
//     );
//     dispatch(fetchContactsSuccess(contacts.data));
//   }
//   catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

// import axios from 'axios';




export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const contacts = await axios.get(
        'https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts'
      );
      return contacts.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await axios.delete(
        `https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts/${id}`
      );
      return contact.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/addContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await axios.delete(
        `https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts/${id}`
      );
      return contact.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err);
    }
  }
);