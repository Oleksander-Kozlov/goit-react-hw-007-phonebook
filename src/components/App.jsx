import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
import { getContacts } from 'redux/selectors.js';
// import { Loading } from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import{ Toaster } from 'react-hot-toast';

export const App = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  //переніс сюди діспатч виклик контактів, бо не рендерилась із-за умови items.length(39 рядок)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.fetchContacts());
  }, [dispatch]);

  //нотифікашка на лоадінг
  // Loading.init({
  //   svgColor: 'fuchsia',
  //    });
//  else {
//     toast.remove();;
//   }


return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}
  >
    
    {error ? (
      <h3>{error}</h3>
    ) : (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {items[0] ? (
          <>
            <h2>Contacts</h2>
            <Filter />

            <ContactList />
          </>
        ) : (
          <h3>Your phonebook is empty</h3>
        )}
      </div>
    )}
    <div>
      <Toaster />
    </div>
  </div>
);
};
