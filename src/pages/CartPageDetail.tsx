import React, { useEffect } from 'react';

import {
  Alert,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useProductService } from '../features/product/hooks/useProductService';
import useStyles from '../libs/styles';
import ProductCard from './components/ProductCard';

const CartPageDetail = () => {
  const { product, productData, addToCard, decreaseFromCart } =
    useProductService();
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const findProductDetail = () => product.find((item: any) => item.id === id);

  useEffect(() => {
    findProductDetail();
  }, []);

  if (!findProductDetail()) {
    return (
      <div className={classes.cartContainer}>
        <Alert severity="info">
          Product Not Found. <Link to="/product">Go to shopping</Link>
        </Alert>
      </div>
    );
  }

  const productQuantity = (productItem: any) => {
    const existingProduct = productData.findIndex(
      (item: any) => item.name === productItem.name
    );

    return productData[existingProduct]?.quantity;
  };

  const addCardQuantity = (productItem: any) => productQuantity(productItem);

  const addToCardIncrease = (productItem: any) => {
    const quantity = productQuantity(productItem);
    addToCard({ product: productItem, quantity });
  };

  const products = findProductDetail();

  return (
    <Container className={classes.cartContainer} maxWidth={false}>
      <Grid container spacing={1}>
        <Grid item md={6} xs={8}>
          <ProductCard
            key={products?.id}
            product={products}
            productQuantity={() => addCardQuantity(products)}
            onAddClick={() => addToCardIncrease(products)}
            onDecreaseClick={() => decreaseFromCart(products)}
          />
        </Grid>
        <Grid item md={4} xs={4}>
          <Card elevation={0}>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" className={classes.cartListTotal}>
                      Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" className={classes.cartListTotal}>
                      {products?.name}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" className={classes.cartListTotal}>
                      Original Price:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className={classes.productBody1}
                    >
                      ${products?.originalPrice}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" className={classes.cartListTotal}>
                      Price:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      className={classes.cartDetailPrice}
                    >
                      ${products?.price}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  disabled={!addCardQuantity(products)}
                  className={classes.cartListButton}
                  onClick={() => navigate('/cart')}
                >
                  Go to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPageDetail;
