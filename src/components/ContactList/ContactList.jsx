import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilterText } from 'redux/selectors';
import { ListSlyled } from './ContactList.styled';

const ContactList = function () {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilterText);
  return (
    <ListSlyled>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterText.toLowerCase())
        )
        .map((contact, id) => {
          return <li key={id}>{<ContactItem contact={contact} />}</li>;
        })}
    </ListSlyled>
  );
};

export default ContactList;