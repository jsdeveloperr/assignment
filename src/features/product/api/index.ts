import { Env } from '../../../config/Env';
import makeApi from '../../../libs/core/configureAxios';
import { ProductResponse } from '../types';

const api = makeApi(`${Env.API_BASE_URL}`);

const PRODUCT_URL =
  'https://linkedin-cv-crawler.beta-limited.workers.dev/interview';

export const getProduct = (): Promise<ProductResponse[]> =>
  api.get(`${PRODUCT_URL}/products`, {});

export const getCartView = (): Promise<ProductResponse[]> =>
  api.get(`${PRODUCT_URL}/view-cart`, {
    headers: {
      'Session-ID': localStorage.getItem('session_Id'),
    },
  });

export const addToCart = (id: string): Promise<ProductResponse> =>
  api.post(`${PRODUCT_URL}/add-to-cart?id=${id}`, {
    headers: {
      'Session-ID': localStorage.getItem('session_Id'),
    },
  });

export const editProduct = (name: string): Promise<ProductResponse> =>
  api.get(`${PRODUCT_URL}/search?name=${name}`);
