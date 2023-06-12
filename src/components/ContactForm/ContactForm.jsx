import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormInput, FormButton } from './ContactForm.styled';
import { contactsSelector } from 'redux/selectors';
import { add } from 'redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(add(form.elements.name.value));
  //   form.reset();
  // };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // const name = form.elements.name.value
    // const number = form.elements.number.value
    dispatch(add(form.elements.name.value, form.elements.number.value));
    for (const contact of contacts) {
      if (contact.name === name) {
        window.alert(`${name} is already in contacts`);
        return;
      }
    }
    // setName('');
    // setNumber('');
    form.reset()
  };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <label>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number
          <FormInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </>
  );
};

export default ContactForm;
