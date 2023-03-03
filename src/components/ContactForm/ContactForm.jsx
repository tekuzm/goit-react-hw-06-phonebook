import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';

// ========== styles ===========

import { Form, Input, AddBtn } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const [state, setState] = useState({ name: '', number: '' });

  // Find duplicates
  const isDuplicate = name => {
    const normalizedName = name.toLowerCase();

    const contact = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(contact);
  };

  // Handle form submit
  const handleSubmit = e => {
    e.preventDefault();

    if (isDuplicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    dispatch(addContact({ name, number }));
    setState({ name: '', number: '' });
    return true;
  };

  // Handle input change
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        placeholder="Enter name"
      />
      <label>Number</label>
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};

export default ContactForm;
