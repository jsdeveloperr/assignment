/* eslint-disable no-console */
import React, { useMemo, useEffect } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';

import { useProductService } from '../features/product/hooks/useProductService';
import useStyles from '../libs/styles';
import ProductCard from './components/ProductCard';

const CATEGORIES = [
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
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" title="Delete">
          <ChevronRightIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} className={classes.productListItem} />
    </ListItem>
  );
}

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]) as any;
};

const SearchResult = ({ product }: any) => {
  const { productData, addToCard, decreaseFromCart } = useProductService();
  const classes = useStyles();
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

  return (
    <Grid item md={4} xs={6} className={classes.productGap20}>
      <ProductCard
        key={product.id}
        product={product}
        productQuantity={() => addCardQuantity(product)}
        onAddClick={() => addToCardIncrease(product)}
        onDecreaseClick={() => decreaseFromCart(product)}
      />
    </Grid>
  );
};

const Search = () => {
  const query = useQuery();
  const { editProduct } = useProductService();
  const classes = useStyles();

  useEffect(() => {
    // TODO: query products from db
    console.log('querying...');
    return () => {};
  }, [query]);

  const renderProducts = () => {
    if (editProduct.length > 0)
      return editProduct.map((product: any, index: any) => (
        <SearchResult key={index} product={product} />
      ));
    return <p>No results found</p>;
  };

  return (
    <>
      <Container className={classes.cartContainer} maxWidth={false}>
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
                  {CATEGORIES.map(item => (
                    <div key={item}>{renderItem({ item })}</div>
                  ))}
                </List>
              </Card>
            </Grid>
            <Grid item md={9} xs={12}>
              <Box
                sx={{
                  pb: '15px',
                }}
              >
                <Typography className={classes.productCategories}>
                  Searching for "{query.get('q')}"
                </Typography>
                <Typography variant="body2" className={classes.cartListText}>
                  {editProduct.length} results found
                </Typography>
              </Box>
              <Grid item md={12} xs={12} className={classes.productGap20}>
                {renderProducts()}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Search;
