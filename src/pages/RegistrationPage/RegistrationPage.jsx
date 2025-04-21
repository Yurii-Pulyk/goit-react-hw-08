// src/pages/RegistrationPage.jsx
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (name, email, password) => {
    dispatch(register({ name, email, password }));
  };

  return (
    <div>
      <h1>Register</h1>
      <RegistrationForm onRegister={handleRegister} />
    </div>
  );
};

export default RegistrationPage;
