import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
