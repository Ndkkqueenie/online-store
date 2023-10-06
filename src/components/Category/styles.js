import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  loader: {
    color: "color: #000000",
    fontSize: "40px",
    textAlign: "center",
  }
}));