import React from 'react';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Stack } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import useStyles from '../../../libs/styles';
import { getCurrentUser } from '../../signin/api';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 2,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const ProfileContainer = ({ productData }: any) => {
  const accessToken = getCurrentUser();
  const classes = useStyles();
  return (
    <>
      <Stack direction="row" className={classes.iconStack}>
        <Box className={classes.iconBox}>
          {!accessToken ? (
            <Link to="/signin" data-tip="My Login">
              <StyledBadge>
                <PermIdentityOutlinedIcon
                  fontSize="large"
                  className={classes.iconBadge}
                />
              </StyledBadge>
            </Link>
          ) : (
            <StyledBadge>
              <PermIdentityOutlinedIcon
                fontSize="large"
                className={classes.iconBadge}
              />
            </StyledBadge>
          )}

          <Link to="/cart" data-tip="My Cart">
            <StyledBadge
              badgeContent={productData ? productData?.length : 0}
              color="error"
            >
              <ShoppingBagOutlinedIcon
                fontSize="large"
                className={classes.iconBadge}
              />
            </StyledBadge>
          </Link>
        </Box>
      </Stack>
    </>
  );
};
