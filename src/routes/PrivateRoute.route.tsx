import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { rootName } from '@/utils/constants.utils';

type PublicRouteProps = {
  isAuthenticated: boolean;
};

const PrivateRoute: React.FC<PublicRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={`${rootName}login`} />;
};

export default PrivateRoute;
