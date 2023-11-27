/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

import type { RootState } from '../../../store/store';
import { ProductResponse } from '../types';

export interface ProductState {
  productData: any[];
  product: ProductResponse[];
  editProduct: ProductResponse;
  addProduct: any;
}

const initialState: ProductState = {
  productData: [],
  product: [],
  editProduct: {} as ProductResponse,
  addProduct: '',
};

// slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<ProductResponse[]>) {
      state.product = action.payload;
    },

    fetchAllCartSucceeded(state, action: PayloadAction<ProductResponse[]>) {
      state.productData = action.payload;
    },

    fetchEditProductSucceeded(state, action: PayloadAction<ProductResponse>) {
      state.editProduct = action.payload;
    },

    fetchAddToCardSucceeded(state, action: PayloadAction<string>) {
      state.addProduct = action.payload;
    },

    addToCart: (state, action) => {
      const existingProduct = state.productData.findIndex(
        item => item.name === action.payload.name
      );

      // -1 only would occur if selected product was not already chosen before
      if (existingProduct !== -1) {
        // created cartQuantity to keep track of each selected product quantity
        state.productData[existingProduct].quantity += 1;
      } else {
        // add w/ cart quantity of 1
        state.productData.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseFromCart: (state, action) => {
      const existingProduct = state.productData.findIndex(
        item => item.name === action.payload.name
      );

      // if there are more than one of product, only subtract one
      if (state.productData[existingProduct].quantity > 1) {
        state.productData[existingProduct].quantity -= 1;
      } else if (state.productData[existingProduct].quantity === 1) {
        // remove from array if only one quantity left
        state.productData = state.productData.filter(
          item => item.name !== action.payload.name
        );
      }
    },
    removeFromCart: (state, action) => {
      state.productData = state.productData.filter(
        item => item.name !== action.payload.name
      );
    },
  },
});

// Actions
export const productsActions = {
  editProduct: createAction(`${productSlice.name}/editProduct`, product => ({
    payload: product,
  })),
  addToCardId: createAction(`${productSlice.name}/addToCardId`, product => ({
    payload: product,
  })),
  fetchAll: createAction(`${productSlice.name}/fetchAll`),
  fetchAllCart: createAction(`${productSlice.name}/fetchAllCart`),
  addToCart: productSlice.actions.addToCart,
  decreaseFromCart: productSlice.actions.decreaseFromCart,
  removeFromCart: productSlice.actions.removeFromCart,
  fetchAllSucceeded: productSlice.actions.fetchAllSucceeded,
  fetchAllCartSucceeded: productSlice.actions.fetchAllCartSucceeded,
  fetchEditProductSucceeded: productSlice.actions.fetchEditProductSucceeded,
  fetchAddToCardSucceeded: productSlice.actions.fetchAddToCardSucceeded,
};

// Selectors
export const selectProducts = (state: RootState) => state.product.product;
export const selectAddCard = (state: RootState) => state.product.addProduct;
export const selectCardProducts = (state: RootState) =>
  state.product.productData;
export const selectEditProduct = (state: RootState) =>
  state.product.editProduct;

// Reducer
export default productSlice.reducer;
