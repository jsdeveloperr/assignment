import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, TableCell, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from '../../libs/styles';

const CartItem = ({
  item,
  onRemoveClick,
  onAddClick,
  onDecreaseClick,
  productQuantity,
}: any) => {
  const classes = useStyles();

  const id = item.id || item.productId;

  return (
    <TableRow key={id}>
      <TableCell>
        <Link to={`/product/${id}`} className={classes.cartItemText}>
          <img
            src={'/icons/3.jpeg'}
            alt={item.name}
            className={classes.cartItemImg}
          />
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/product/${id}`} className={classes.cartItemText}>
          <Typography className={classes.cartItemName}>{item.name}</Typography>
        </Link>
      </TableCell>
      <TableCell align="right">
        <Box className={classes.productGap10}>
          {
            <Button
              variant="outlined"
              size="small"
              color="error"
              disabled={productQuantity() === 1}
              className={classes.productButton}
              onClick={onDecreaseClick}
            >
              <RemoveIcon fontSize="small" />
            </Button>
          }
          <Typography className={classes.productQuantity}>
            {productQuantity()}
          </Typography>
          <Button
            className={classes.productButton}
            variant="outlined"
            size="small"
            color="error"
            onClick={onAddClick}
          >
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </TableCell>
      <TableCell className={classes.cartDetailPrice}>${item.price}</TableCell>
      <TableCell className={classes.productBody1}>
        ${item.originalPrice}.00
      </TableCell>
      <TableCell className={classes.cartDetailPrice}>
        ${(item.price * item.quantity).toFixed(2)}
      </TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={onRemoveClick}
          className={classes.productButton}
        >
          <CloseIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
