import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import PrivateRoutes from '../libs/helpers/PrivateRoutes';
import CartPage from '../pages/CartPage';
import CartPageDetail from '../pages/CartPageDetail';
import ProductsPage from '../pages/ProductsPage';
import SearchPage from '../pages/SearchPage';
import SignInPage from '../pages/SignInPage';

const AppRoutes = () => (
  <>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Route>

      <Route element={<Layout />}>
        <Route path="/product/:id" element={<CartPageDetail />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/product" />} />
    </Routes>
  </>
);

export default AppRoutes;
