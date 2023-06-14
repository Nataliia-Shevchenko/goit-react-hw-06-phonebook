import { useDispatch, useSelector } from 'react-redux';
import { Form, FormInput, FormButton } from './ContactForm.styled';
import { contactsSelector } from 'redux/selectors';
import { add } from 'redux/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    for (const contact of contacts) {
      if (contact.name === form.elements.name.value) {
        window.alert(`${form.elements.name.value} is already in contacts`);
        return;
      }
    }
    dispatch(add(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <label>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </>
  );
};

export default ContactForm;
