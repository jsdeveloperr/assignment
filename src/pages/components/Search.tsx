import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.4),
  },
  borderColor: 'red',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: 'auto',
    width: 'auto',
  },
  maxWidth: '670px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export default Search;
