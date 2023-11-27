import React from 'react';

import Container from '@mui/material/Container';

import { useSignInService } from '../hooks/useSignInService';
import { SignInForm } from './SignInForm';

export const SignInContainer = () => {
  const { createPost, isLogging } = useSignInService();

  return (
    <>
      <Container maxWidth="xs">
        <SignInForm onSubmitClick={createPost} isLogging={isLogging} />
      </Container>
    </>
  );
};
