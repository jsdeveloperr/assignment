import React, { useEffect } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  List,
  ListItem,
  Card,
  Box,
  Container,
  IconButton,
  ListItemText,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { useNotification } from '../../../libs/hooks/useNotification';
import useStyles from '../../../libs/styles';
import ProductCard from '../../../pages/components/ProductCard';
import { getCurrentUser } from '../../signin/api';
import { useProductService } from '../hooks/useProductService';
import { ProductResponse } from '../types/index';

const FRUITS = [
  '🥚 Dariry & Eggs',
  '🍳 Breakfast',
  '❄️ Frozen',
  '🥥 Vegetables',
  '🍎 Fruits & Vegetables',
  '🍲 Dariry & Eggs',
];

interface RenderItemOptions {
  item: string;
}

function renderItem({ item }: RenderItemOptions) {
  const classes = useStyles();
  const { displayNotification } = useNotification();

  const categoriesNotification = () => {
    displayNotification({
      message: 'Store filter coming next application update!',
      type: 'info',
      horizontal: 'center',
      timeout: 3000,
    });
  };

  return (
    <ListItem
      onClick={() => categoriesNotification()}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => categoriesNotification()}
        >
          <ChevronRightIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} className={classes.productListItem} />
    </ListItem>
  );
}

export const ProductContainer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { product, productData, fetchAllProduct, addToCard, decreaseFromCart } =
    useProductService();
  useEffect(() => {
    fetchAllProduct();
  }, [fetchAllProduct]);

  const productQuantity = (productItem: any) => {
    const existingProduct = productData.findIndex(
      (item: any) => item.name === productItem.name
    );

    return productData[existingProduct]?.quantity;
  };

  const addCardQuantity = (productItem: any) => productQuantity(productItem);

  const addToCardIncrease = (productItem: any) => {
    const accessToken = getCurrentUser();
    if (accessToken) {
      const quantity = productQuantity(productItem);
      addToCard({ product: productItem, quantity });
    } else {
      navigate('/signin', { replace: true });
    }
  };

  return (
    <>
      <Container className={classes.producutContainer} maxWidth={false}>
        <Box className={classes.productContainerBox}>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <Card className={classes.productContainerCard}>
                <List>
                  <ListItem>
                    <Typography
                      variant="h6"
                      className={classes.productCategories}
                    >
                      Top Categories
                    </Typography>
                  </ListItem>
                  <Divider variant="middle" />
                  {FRUITS.map(item => (
                    <div key={item}>{renderItem({ item })}</div>
                  ))}
                </List>
              </Card>
            </Grid>
            <Grid item md={9} xs={12}>
              <Box className={classes.productFlex}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Pears, apples, quinces
                </Typography>
              </Box>
              <Grid item md={12} xs={12} className={classes.productGap10}>
                {product.map((item: ProductResponse, index: number) => (
                  <ProductCard
                    key={index}
                    product={item}
                    productQuantity={() => addCardQuantity(item)}
                    onAddClick={() => addToCardIncrease(item)}
                    onDecreaseClick={() => decreaseFromCart(item)}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
