import React from 'react';
import AppHeader from './AppHeader';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="container is-max-desktop">
      <AppHeader />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
