import React from 'react';

import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { getCurrentUser } from '../../features/signin/api';

const PrivateRoutes = () => {
  const accessToken = getCurrentUser();
  const location = useLocation();

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

export default PrivateRoutes;
