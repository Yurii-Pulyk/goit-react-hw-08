import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Тут може бути навігація або інші спільні елементи */}
      <Outlet />
    </div>
  );
};

export default Layout;
