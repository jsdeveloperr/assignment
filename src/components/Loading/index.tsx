import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
  return (
    <Box>
      <LinearProgress
        sx={{
          height: '3px',
          backgroundColor: '#F6F7F9',
          '& .MuiLinearProgress-colorPrimary': {
            backgroundColor: '#7108aa',
          },
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: '#7108aa',
          },
        }}
      />
      <Grid container wrap="wrap">
        {Array.from(new Array(5)).map((_item, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              height: '100%',
              background: '#F6F7F9',
              opacity: 0.5,
              zIndex: 1,
            }}
          >
            <Skeleton variant="rectangular" width="100%" height={100} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Loading;
