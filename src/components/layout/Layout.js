import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <header>{<Header />}</header>

      <main className={s.container}> {children}</main>
      <footer className={s.fuuterWrappwr}>{<Footer />}</footer>
    </div>
  );
};

export default Layout;
