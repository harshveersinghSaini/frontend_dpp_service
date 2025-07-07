
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from './header/header';

const PublicLayout: React.FC = () => {
  return (
    <div className="public-layout">
      <Header />
      <main className="public-main">
        <Outlet />
      </main>
      <div className="publicLayout_footer">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
