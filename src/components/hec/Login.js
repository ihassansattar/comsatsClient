// /* eslint-disable no-console */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {apiPath} from '../../config'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import{useStyles} from './loginfunctions';
import ComsatsLogo from './comsats logo.png'
function Copyright() {
  return (
    <Typography variant="body2" color="blue" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://cuiatd.edu.pk/">
       Comsats university Islamabad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}





export default function SignIn() {
  const classes = useStyles();
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showNullError, setIShowNullError] = useState(false);
  const[loading,setLoading]=useState(false);
  const [progress, setProgress] = React.useState(0); 
  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    } 
    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

 const handleChange = name => (event) => {
    
      if(name==='username'){
        setUsername(event.target.value)
      }
   else{
     setPassword(event.target.value)
   }
  };

 const loginUser = async (e) => {
    e.preventDefault();
    
    if (username === '' || password === '') {
      setShowError(false)
      setIShowNullError(true)
      setLoggedIn(false)
      
    } 
    else {
      setLoading(true)
      try {
        const response = await axios.post(apiPath + '/loginadmins', {
          username,
          password,
        });
        console.log(localStorage.setItem('JWT', response.data.token))
        localStorage.setItem('JWT', response.data.token);
        setLoggedIn(true)
        setShowError(false)
        setIShowNullError(false)
        
      } 
            catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'bad username' || error.response.data === 'passwords do not match' ) 
        {
          setShowError(true)
          setIShowNullError(false)
          setLoading(false)
          
        }
       }
    }
  };
if (!loggedIn) {
  return (
    <div className={classes.background}>
     
    <Container className={classes.container} component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
      <img src={ComsatsLogo} width='100' height="100" alt="loading"/>
      
        <Typography component="h1" variant="h5">
        HEC  LogIn
        </Typography>
        <form className={classes.form} onSubmit={loginUser}>
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
              id="username"
              label="username"
              value={username}
              onChange={handleChange('username')}
              
              InputProps={{
                className: classes.input
              }}
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
          }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            InputProps={{
              className: classes.input
            }}
              label="password"
              value={password}
              onChange={handleChange('password')}
              placeholder="Password"
              type="password"
            name="password"
            
            
            id="password"
            autoComplete="current-password"
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
          }}
          />
           {loading && (
          <div>
            <CircularProgress variant="determinate" value={progress} />
          </div>
        )}
          {showNullError && (
  <div>
    <p>The username or password cannot be null.</p>
  </div>
)}
{showError && (
  <div>
    <p style={{color:'red'}}>
      That username or password isn&apos;t recognized. Please try
      again or forget password
    </p>
    
  </div>
)}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            borderRadius='100'
            style={{borderRadius:'200'}}
            className={classes.submit}
          >
            Sign In
          </Button>
          
          <Grid container>
            <Grid item xs>
              <Link href="ForgetPasswordHec" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container></div>
  );
}
return  <Redirect to={`/hecProfile/${username}`} />;
}