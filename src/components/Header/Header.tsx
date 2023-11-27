/* eslint-disable unused-imports/no-unused-vars */
import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Button, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate, Outlet, Link } from 'react-router-dom';

import { useProductService } from '../../features/product/hooks/useProductService';
import { ProfileContainer } from '../../features/profile/components';
import useStyles from '../../libs/styles';
import Search from '../../pages/components/Search';
import SearchIconWrapper from '../../pages/components/SearchIconWrapper';
import StyledInputBase from '../../pages/components/StyledInputBase';

type HeaderProps = {
  onChangeLanguage: (lang: string) => void;
  window?: () => Window;
  classes?: any;
};

const Header = (_props: HeaderProps) => {
  const { productData, fetchEditProduct } = useProductService();
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();
  const classes = useStyles();

  const searchProducts = () => {
    if (search.length > 0) {
      fetchEditProduct({ id: search } as any);
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Container>
          <Toolbar
            sx={{
              padding: { md: 0, xs: 0 },
            }}
            className={classes.toolbar}
          >
            <Link to="/product">
              <Box
                component="img"
                className={classes.logoHeader}
                alt="BETALIMITED"
                src="/icons/logo.png"
              />
            </Link>
            <Search className={classes.search}>
              <SearchIconWrapper>
                <SearchIcon fontSize="small" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Searching for…"
                inputProps={{ 'aria-label': 'search' }}
                endAdornment={
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => searchProducts()}
                    className={classes.searchButton}
                  >
                    Search
                  </Button>
                }
                fullWidth
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    searchProducts();
                  }
                }}
                onChange={e => {
                  setSearch(e.target.value);
                }}
                value={search}
                sx={{
                  border: '1px solid #cbcbcb',
                }}
              />
            </Search>
            <nav>
              <ProfileContainer productData={productData} />
            </nav>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" className={classes.grow}>
        <Toolbar />
        <main>
          <Box className={classes.main}>
            <Container>
              <Outlet />
            </Container>
          </Box>
        </main>
      </Box>
    </Box>
  );
};

export default Header;
