import React from 'react';

import {
  Alert,
  Button,
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
} from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useNavigate, Link } from 'react-router-dom';

import { useProductService } from '../features/product/hooks/useProductService';
import { getCurrentUser } from '../features/signin/api';
import useStyles from '../libs/styles';
import CartItem from './components/CartItem';

const steps = ['Cart', 'Details', 'Payment'];

const CartPage = () => {
  const {
    productData,
    addToCard,
    decreaseFromCart,
    removeFromCart,
    fetchAllCart,
  } = useProductService();

  const navigate = useNavigate();
  const classes = useStyles();
  const accessToken = getCurrentUser();

  const checkoutHandler = () => {
    if (accessToken) {
      navigate('/product');
    }
  };

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

  React.useEffect(() => {
    if (productData.length > 0 && accessToken !== null) {
      fetchAllCart();
    }
  }, [fetchAllCart]);

  return (
    <Container className={classes.cartContainer} maxWidth={false}>
      {productData.length === 0 ? (
        <Alert severity="info">
          Cart is empty. <Link to="/product">Go shopping</Link>
        </Alert>
      ) : (
        <>
          <Box className={classes.cartBox}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={9} xs={12}>
              <TableContainer>
                <Table className={classes.cartTable}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Original Price</TableCell>
                      <TableCell>Total Price</TableCell>
                      <TableCell>Remove</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productData.map((item: string, index: number) => (
                      <CartItem
                        key={index}
                        item={item}
                        onRemoveClick={() => removeFromCart(item)}
                        productQuantity={() => addCardQuantity(item)}
                        onAddClick={() => addToCardIncrease(item)}
                        onDecreaseClick={() => decreaseFromCart(item)}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Typography variant="h6" className={classes.cartTable}>
                      Subtotal (
                      {productData.reduce(
                        (a: number, c: any) => a + c.quantity,
                        0
                      )}
                      items) : $
                      {productData
                        .reduce(
                          (a: number, c: any) => a + c.quantity * c.price,
                          0
                        )
                        .toFixed(2)}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="body1"
                      className={classes.cartListText}
                    >
                      Shipping Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Veniam, quia.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h6" className={classes.cartListTotal}>
                      Total: $
                      {productData
                        .reduce(
                          (a: number, c: any) => a + c.quantity * c.price,
                          0
                        )
                        .toFixed(2)}
                    </Typography>
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem>
                    <Button
                      className={classes.cartListTotal}
                      onClick={checkoutHandler}
                      variant="contained"
                      color="error"
                      fullWidth
                    >
                      Login to Checkout Now
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CartPage;
