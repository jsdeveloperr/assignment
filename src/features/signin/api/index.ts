import { Env } from '../../../config/Env';
import makeApi from '../../../libs/core/configureAxios';
import { SignInFormInput } from '../types';

const api = makeApi(`${Env.API_BASE_URL}`);

const SIGNIN_BASE_URL =
  'https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession';

export const createSignin: any = (): Promise<SignInFormInput> =>
  api.get(SIGNIN_BASE_URL).then((response: any) => {
    if (response) {
      localStorage.setItem('session_Id', response);
    }

    return response;
  });

export const logout = () => {
  localStorage.removeItem('session_Id');
};

export const getCurrentUser = () => {
  return localStorage.getItem('session_Id');
};
