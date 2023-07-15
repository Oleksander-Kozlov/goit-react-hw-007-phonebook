import {
  createSlice,
  // nanoid
} from '@reduxjs/toolkit';
import { fetchContacts, removeContact } from './operation.js';

const InitialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleRemoveFulfilled = (state, action) => {
  const index = state.items.findIndex(contact => contact.id === action.payload.id);
  state.items.splice(index, 1);
  state.isLoading = false;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: InitialState,
  // reducers: {
  //   // fetchContactsRequest(state) {
  //   //   state.isLoading = true;
  //   // },
  //   // fetchContactsSuccess(state, action) {
  //   //   state.isLoading = false;
  //   //   state.error = null;
  //   //   state.items = action.payload;
  //   // },
  //   // fetchContactsError(state, action) {
  //   //   state.isLoading = false;
  //   //   state.error = action.payload;
  //   // },
  //   addContact: {
  //     reducer(state, action) {
  //       // state.push(action.payload);
  //       // const haveNameInPhonebook = state.some(
  //       //   ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
  //       // );
  //       //     const haveNameInPhonebook = state.find(
  //       //       ({ name }) => name === action.payload.name
  //       //     );
  //       // if (haveNameInPhonebook) {
  //       //   return alert(`${action.payload.name} is already in contacts`);
  //       // }
  //       const updatePhonebook = [state.items, action.payload];
  //       localStorage.setItem('user-contact', JSON.stringify(updatePhonebook));
  //       state.items.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   // deleteContact(state, action) {
  //   // const index = state.items.findIndex(
  //   //   contact => contact.id === action.payload
  //   // );
  //   // state.items.splice(index, 1);

  //   // const removeContactById = (state, action) => {

  //   // if (index !== -1) {
  //   //   state.items.splice(index, 1);
  //   // }
  //   // };

  //   // const withoutRemovedContact = state.items.filter(
  //   //   contact => contact.id !== action.payload
  //   // );
  //   // console.log('state.items', state.items);
  //   // localStorage.setItem(
  //   //   'user-contact',
  //   //   JSON.stringify(index)
  //   // );
  //   //   return state;
  //   // },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(removeContact.fulfilled, handleRemoveFulfilled)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.rejected, handleRejected),
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
