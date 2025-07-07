import '@/styles/authLayout/_main.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <Header />
      <main className="auth-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
