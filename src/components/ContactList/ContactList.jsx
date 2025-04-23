import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
}
