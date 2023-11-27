import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { signinActions, selectSignin, selectIsLogging } from '../store';
import { SignInFormInput } from '../types';

export type SignInServiceOperators = {
  signin: SignInFormInput | undefined;
  isLogging: boolean | undefined;
  createPost: (data: SignInFormInput) => void;
  handleLogout: () => void;
};

export const useSignInService = (): Readonly<SignInServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    signin: useAppSelector(selectSignin),
    isLogging: useAppSelector(selectIsLogging),

    createPost: useCallback(
      (signin: SignInFormInput) => {
        dispatch(
          signinActions.login({
            username: signin.username,
            password: signin.password,
          })
        );
      },
      [dispatch]
    ),

    handleLogout: useCallback(() => {
      dispatch(signinActions.logout());
    }, [dispatch]),
  };
};

export default useSignInService;
