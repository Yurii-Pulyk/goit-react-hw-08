import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Навігація або інші спільні елементи */}
      <Outlet />
    </div>
  );
};

export default Layout;
