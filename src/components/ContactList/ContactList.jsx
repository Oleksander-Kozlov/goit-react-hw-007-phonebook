//redux
import { useDispatch, useSelector } from 'react-redux';
import * as operation from 'redux/operation';
import { getContacts } from 'redux/selectors.js';
//styled
import {
  List,
  ButtonDelete,
  CotactItem,
} from '../ContactList/ContactList.styled.js';

export const ContactList = () => {
  //значення стору редакс
  const filters = useSelector(state => state.filters) || '';  
  const { items } = useSelector(getContacts);
  //диспечер)
  const dispatch = useDispatch();
//функція фільтрації контактів
const getVisibleContacts = (contacts, filters) => {
  switch (filters) {
    case filters:
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters)
      );
    default:
      return contacts;
  }
  };
  
const visibleFilter = getVisibleContacts(items, filters)
  
//видалення контакту по айди
  const handleDelete = id => {
    dispatch(operation.removeContact(id));
    
  };

    return (
      <List>
        {visibleFilter.map(contact => (
          <CotactItem key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <ButtonDelete onClick={() => handleDelete(contact.id)}>
              Delete
            </ButtonDelete>
          
          </CotactItem>
        ))}
      </List>
    );
};
