import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#fff',
    color: '#000',
    height: '80px',
    '@media (max-width: 780px)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  logoHeader: {
    height: 45,
  },
  search: {
    flex: 1,
    maxWidth: '670px',
    '@media (max-width: 780px)': {
      display: 'none',
    },
  },
  searchButton: {
    borderTopRightRadius: '300px',
    borderBottomRightRadius: '300px',
    borderLeft: '1px solid #DAE1E7',
    textTransform: 'capitalize',
    paddingLeft: '50px',
    paddingRight: '50px',
    fontSize: '14px',
    height: '100%',
    boxShadow: 'none',
    backgroundColor: '#D23F57',
  },
  grow: {
    flexGrow: 1,
    padding: 1,
  },
  main: {
    backgroundColor: '#F6F9FC',
  },
  producutContainer: {
    paddingTop: '32px',
    paddingLeft: 0,
    paddingRight: 0,
  },
  productContainerBox: {
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
  productContainerCard: {
    borderRadius: '6px',
    boxShadow: 'none',
  },
  productCard: {
    boxShadow: '0px 1px 3px rgba(3, 0, 71, 0.09)',
    borderRadius: '8px',
  },
  productCategories: {
    fontSize: '16px',
    fontWeight: 500,
  },
  productFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '15px',
  },
  productChip: {
    padding: '0px 8px',
    fontSize: '11px',
    color: '#fff',
    backgroundColor: '#D23F57',
    margin: '10px 10px',
  },
  productContent: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
  },
  productBody1: {
    textDecoration: 'line-through',
    fontWeight: 500,
    color: '#7c7c7c',
  },
  productBody2: {
    fontWeight: 500,
  },
  productListItem: {
    fontSize: '10px',
    fontWeight: 500,
  },
  productBox: {
    color: '#ababab',
    fontSize: '14px',
    display: 'flex',
    gap: '8px',
    padding: '10px 0px',
  },
  productGap10: {
    display: 'flex',
    gap: '10px',
  },
  productGap20: {
    display: 'flex',
    gap: '20px',
  },
  productButton: {
    padding: '3px',
    minWidth: '30px',
    fontWeight: '600',
  },
  productQuantity: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
    padding: '2px 0px',
  },
  cartContainer: {
    paddingTop: '32px',
    paddingLeft: 0,
    paddingRight: 0,
  },
  cartBox: {
    margin: '30px 0px',
  },
  cartTable: {
    borderRadius: '6px',
    backgroundColor: '#fff',
  },
  cartListTotal: {
    fontSize: '16px',
    fontWeight: 500,
  },
  cartListText: {
    fontWeight: 500,
    color: '#7c7c7c',
  },
  cartListButton: {
    textTransform: 'capitalize',
    fontSize: '14px',
    boxShadow: 'none',
    backgroundColor: '#D23F57',
  },
  cartDetailPrice: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#D23F57',
  },
  cartItemImg: {
    height: '100px',
  },
  cartItemName: {
    color: '#000',
    fontWeight: 500,
    fontSize: '18px',
  },
  cartItemText: {
    textDecoration: 'none',
  },
  formCompanyText: {
    fontSize: '24px !important',
    fontWeight: '700 !important',
    color: '#D23F57 !important',
    marginLeft: '8px !important',
  },
  logo: {
    height: '100%',
  },
  formInfoText: {
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
  },
  formTitle: {
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'flex-end !important',
  },
  formSubtitle: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  formSignInText: {
    fontSize: '20px !important',
    fontWeight: '500 !important',
    lineHeight: '38px !important',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 250,
    width: '100%',
  },
  iconStack: {
    flexGrow: 1,
    color: '#000',
    marginLeft: 1,
    textTransform: 'capitalize',
    '@media (max-width: 780px)': {
      fontSize: '14px',
    },
  },
  iconBadge: {
    color: ' rgba(0, 0, 0, 0.54)',
    borderRadius: 25,
    width: '45px',
    height: '45px',
    padding: '10px',
    backgroundColor: '#F3F5F9',
    textTransform: 'uppercase',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
}));

export default useStyles;
