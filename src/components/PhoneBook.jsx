import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { getContacts, getFilteredContacts } from 'redux/contacts/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/selectors';

// ========== components ==========

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// ========== styles ==========

import { PhoneBookStyles } from './PhoneBook.styled';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDuplicate = (name, number) => {
    const normalizedName = name.toLowerCase();

    const contact = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(contact);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <PhoneBookStyles>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} handleChange={handleFilter} />
      {filteredContacts.length ? (
        <ContactList
          deleteContact={handleDeleteContact}
          contacts={filteredContacts}
        />
      ) : (
        <p>No contacts in the list. Please add one!</p>
      )}
    </PhoneBookStyles>
  );
};

export default PhoneBook;
