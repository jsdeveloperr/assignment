import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  height: '44px',
  borderRadius: '1200px',
  color: '#4B566B',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '80ch',
    },
  },
}));

export default StyledInputBase;
