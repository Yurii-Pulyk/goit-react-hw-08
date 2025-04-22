// src/pages/LoginPage.jsx
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
