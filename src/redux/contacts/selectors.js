export const getContacts = state => state.contacts;

export const getFilteredContacts = ({ filter, contacts }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name, number }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return result;
};
