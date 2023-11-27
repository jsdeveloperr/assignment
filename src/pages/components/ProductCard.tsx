import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from '../../libs/styles';

const ProductCard = ({
  product,
  onAddClick,
  onDecreaseClick,
  productQuantity,
}: any) => {
  const classes = useStyles();
  return (
    <Grid item md={12} xs={12} key={product.name}>
      <Card className={classes.productCard}>
        <Link to={`/product/${product.id}`}>
          <Chip
            className={classes.productChip}
            label={product.discount}
            size="small"
          />
          <CardMedia
            component="img"
            image="/icons/3.jpeg"
            title={product.name}
          />
        </Link>
        <CardContent>
          <Box className={classes.productContent}>
            <Box>
              <Typography variant="subtitle2">{product.name}</Typography>
              <span className={classes.productBox}>
                <Rating value={product.rating} readOnly size="small" />(
                {product.rating})
              </span>
              <span className={classes.productGap10}>
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.productBody2}
                >
                  ${product.price}
                </Typography>
                <Typography variant="body2" className={classes.productBody1}>
                  ${product.originalPrice}.00
                </Typography>
              </span>
            </Box>
            <Box>
              {productQuantity() && (
                <Button
                  className={classes.productButton}
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={onDecreaseClick}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
              )}
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
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
