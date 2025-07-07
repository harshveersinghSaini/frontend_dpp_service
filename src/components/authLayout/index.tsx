import '@/styles/authLayout/_main.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/Sidebar';

const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <Header />
      <div className="auth-body">
        <Sidebar />
        <main className="auth-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
