import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { rootName } from '@/utils/constants.utils';

type PublicRouteProps = {
  isAuthenticated: boolean;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to={`${rootName}`} /> : <Outlet />;
};

export default PublicRoute;
