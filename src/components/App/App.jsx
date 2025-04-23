// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from "../ContactForm/ContactForm";
import Layout from '../Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';

import RestrictedRoute from '../../RestrictedRoute';
import PrivateRoute from '../../PrivateRoute';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <p>Getting data...</p>
  ) : (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  element={<RegisterPage />}
                  redirectTo="/contacts"
                ></RestrictedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  element={<LoginPage />}
                  redirectTo="/contacts"
                ></RestrictedRoute>
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  element={<ContactsPage />}
                  redirectTo="/login"
                ></PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
