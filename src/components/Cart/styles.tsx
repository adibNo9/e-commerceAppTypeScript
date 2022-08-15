import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: "5px"
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: '20px'
    }
  },
  checkoutButtom: {
    minWidth: '150px'
  },
  link: {
    textDecoration: 'none'
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%',
    width: '100%',
    paddingBottom: '5%'
  },
}))


