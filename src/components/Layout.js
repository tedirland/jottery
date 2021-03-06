import React from 'react';
import AppHeader from './AppHeader';
import Footer from './Footer';

function Layout({ children, seo }) {
  return (
    <div className="container is-max-desktop">
      <AppHeader seo={seo} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
