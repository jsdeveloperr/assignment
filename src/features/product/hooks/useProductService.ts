import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productsActions,
  selectProducts,
  selectEditProduct,
  selectCardProducts,
  selectAddCard,
} from '../store';
import { ProductResponse } from '../types';

export type ProductServiceOperators = {
  product: ProductResponse[];
  editProduct: any;
  productData: any;
  addCart: any;
  fetchAllProduct: () => void;
  fetchAllCart: () => void;
  fetchEditProduct: (name: string) => void;
  addToCard: (data: any) => void;
  removeFromCart: (data: any) => void;
  decreaseFromCart: (data: any) => void;
};

export const useProductService = (): Readonly<ProductServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    product: useAppSelector(selectProducts),
    addCart: useAppSelector(selectAddCard),
    editProduct: useAppSelector(selectEditProduct),
    productData: useAppSelector(selectCardProducts),

    fetchAllProduct: useCallback(() => {
      dispatch(productsActions.fetchAll());
    }, [dispatch]),

    fetchAllCart: useCallback(() => {
      dispatch(productsActions.fetchAllCart());
    }, [dispatch]),

    fetchEditProduct: useCallback(
      (name: string) => {
        dispatch(productsActions.editProduct(name));
      },
      [dispatch]
    ),

    addToCard: useCallback(
      (product: any) => {
        dispatch(productsActions.addToCart(product.product));
        dispatch(productsActions.addToCardId(product));
      },
      [dispatch]
    ),

    decreaseFromCart: useCallback(
      (product: any) => {
        dispatch(productsActions.decreaseFromCart(product));
      },
      [dispatch]
    ),

    removeFromCart: useCallback(
      (product: any) => {
        dispatch(productsActions.removeFromCart(product));
      },
      [dispatch]
    ),
  };
};

export default useProductService;
