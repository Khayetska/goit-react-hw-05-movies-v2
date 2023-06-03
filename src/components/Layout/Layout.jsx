import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="conteiner">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
