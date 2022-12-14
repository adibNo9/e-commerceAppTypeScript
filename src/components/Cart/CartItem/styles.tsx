import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  media: {
    height: 260,
    backgroundSize: 'contain'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center'
  }
}))