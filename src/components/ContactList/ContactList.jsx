import React from 'react';
import ContactElement from 'components/ContactElement';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelector);

  function getVisibleContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactElement contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
