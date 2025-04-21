// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
