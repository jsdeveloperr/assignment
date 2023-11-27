import React from 'react';

import Grid from '@mui/material/Grid';

import LogoImage from '../../../public/icons/logo.png';

const Logo = () => {
  return (
    <>
      <Grid item container justifyContent="center" alignItems="stretch">
        <img src={LogoImage} alt="Logo betalimited" />
      </Grid>
    </>
  );
};

export default Logo;
