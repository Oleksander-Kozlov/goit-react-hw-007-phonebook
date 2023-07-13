import axios from 'axios';
// import * as ContactAPI from './ContactAPI';
import * as actions from './actions';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await axios.get(
      'https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts'
    );
    dispatch(actions.fetchContactsSuccess(contacts.data));
  }
  catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};
