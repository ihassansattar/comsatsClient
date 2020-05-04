
import { makeStyles } from '@material-ui/core/styles';
import background from '.././assets/background2.jpg'

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 1,
    borderRadius: '16',
    square: false,
    ShapeFamily: 'rounded'
  },

  input: {
    color: "white"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  floatingLabelFocusStyle: {
    color: "gray"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
  },
  background: {
    display: 'flex',
    alignItems: 'center',
    height: '1200px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  }
}));