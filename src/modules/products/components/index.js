import { makeStyles } from '@material-ui/core/styles';

import ProductToolbar from "./productToolbar";
import ProductTable from "./productTable";
import ProductModel from "./productModel";

export { ProductToolbar, ProductTable, ProductModel }

export const toolbarStyle = makeStyles((theme) => ({
    root: {},
    row: {
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        margin: theme.spacing(1,0),
        padding: theme.spacing(3,0)
    },
    spacer: {
        flexGrow: 1
    },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  editOrAddWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  },
  editOrAddButton: {
    marginRight: theme.spacing(3),  
    marginTop: theme.spacing(3)
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  
}));

export const tableStyle = makeStyles((theme) => ({
    root: {
      width:"100%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginTop: '10px',
      width: '100%',
      display: 'flex',
      padding: theme.spacing(2),
      flexDirection: 'column',
      borderRadius: 5,
      [theme.breakpoints.down('sm')]: {
        borderRadius: 5,
      }
    }
    
  }));