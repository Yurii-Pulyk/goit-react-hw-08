import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    console.log('Dispatching fetchContacts...');
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      <SearchBox />
      {isLoading && 'Reuest is in progress...'}
      <ContactList />
    </>
  );
}
