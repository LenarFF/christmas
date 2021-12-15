import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { FilterContext } from '../../context';
import { IState } from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';

function Layout() {

      const { appState, setAppState } = useContext(FilterContext);

      const setLocalStorage = () => {
        localStorage.setItem('christmas_state_LenarFF', JSON.stringify(appState));
      };

      const getLocalStorage = () => {
        if (localStorage.getItem('christmas_state_LenarFF')) {
          const localStorageInfo: IState = JSON.parse(
            localStorage.getItem('christmas_state_LenarFF') as string,
          );
          setAppState({ ...localStorageInfo });
        }
      };

      window.addEventListener('beforeunload', setLocalStorage);
      window.addEventListener('DOMContentLoaded', getLocalStorage);
      
  return (
    <div className='layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
