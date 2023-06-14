import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Contact, DelButton } from './ContactElement.styled';
import { del } from 'redux/contactsSlice';

const ContactElement = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(del(id));

  return (
    <Contact>
      {name}: {number}
      <DelButton type="button" onClick={handleDelete}>
        Delete
      </DelButton>
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
