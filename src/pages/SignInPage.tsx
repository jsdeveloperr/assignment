import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { SignInForm } from '../features/signin/components/SignInForm';
import { useSignInService } from '../features/signin/hooks/useSignInService';
import useStyles from '../libs/styles';
import Notification from '../libs/ui/components/Notification';

const SignInSide = () => {
  const { createPost, isLogging } = useSignInService();
  const classes = useStyles();

  return (
    <>
      <Grid container component="main">
        <CssBaseline />
        <Notification />
        <Grid item md={12}>
          <Box className={classes.formGroup}>
            <img src="icons/logo.png" className={classes.logo} height="auto" />
            <Box className={classes.formTitle}>
              <Typography className={classes.formSignInText}>
                Welcome to
              </Typography>
              <Typography className={classes.formCompanyText} variant="body2">
                betalimited
              </Typography>
            </Box>
            <Typography className={classes.formSubtitle}>
              Sign into your account
            </Typography>
            <Box component="form" sx={{ mt: 1, display: 'contents' }}>
              <SignInForm onSubmitClick={createPost} isLogging={isLogging} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInSide;
