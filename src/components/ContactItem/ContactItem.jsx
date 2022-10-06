import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ItemStyled, ContactStyled } from './ConactItem.styled';

const ContactItem = function ({ contact }) {
  const dispatch = useDispatch();
  const HandleDelete = id => dispatch(deleteContact(id));

  return (
    <ItemStyled>
      <ContactStyled>
        <span>{contact.name}:</span> <span>{contact.phone}</span>
      </ContactStyled>
      <button
        type="button"
        name="deleteBtn"
        onClick={() => HandleDelete(contact.id)}
      >
        Delete
      </button>
    </ItemStyled>
  );
};

export default ContactItem;