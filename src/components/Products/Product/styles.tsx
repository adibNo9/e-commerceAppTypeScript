import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'contain'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))