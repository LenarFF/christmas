import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FilterContext } from '../../context';
import { toys } from '../../data';
import { IState, IToys } from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';

function Layout(): JSX.Element {
  const { appState, setAppState } = useContext(FilterContext);
  const STORAGE_STATE = 'christmas_state_LenarFF19';
  const STORAGE_TOYS = 'christmas_toys_LenarFF19';

  const setLocalStorage = () => {
    localStorage.setItem(STORAGE_STATE, JSON.stringify(appState));
    localStorage.setItem(STORAGE_TOYS, JSON.stringify(toys));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem(STORAGE_STATE)) {
      const localStorageState: IState = JSON.parse(localStorage.getItem(STORAGE_STATE) as string);
      setAppState({ ...localStorageState });
    }
  };

  useEffect(() => {
    if (localStorage.getItem(STORAGE_TOYS)) {
      const localStorageToys: IToys[] = JSON.parse(localStorage.getItem(STORAGE_TOYS) as string);
      toys.forEach((toy, index) => {
        toy.favorite = localStorageToys[index].favorite;
      });
    }
  }, []);

  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('DOMContentLoaded', getLocalStorage);

  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
