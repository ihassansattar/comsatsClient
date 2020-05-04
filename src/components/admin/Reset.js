import React, {useEffect,useState } from 'react';

import axios from 'axios';
import {apiPath} from '../../config';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';import Container from '@material-ui/core/Container';
import{useStyles} from './loginfunctions'

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
  


export default function ResetPassword (props) {
  const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [updated, setUpdated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const[button,setButton]=useState('yy');
    const [progress, setProgress] = React.useState(0);  
    const[loading,setLoading]=useState(false)
      
    
       
        

  

    useEffect(() => { 
        async function fetchData() {
           
    try {
      const response = await axios.get(apiPath + '/resetadmins', {
        params: {
          resetPasswordToken: props.match.params.token,
        },
      });
      // console.log(response);
      if (response.data.message === 'password reset link a-ok') {
        
          setUsername(response.data.username)
          setUpdated(false)
          setIsLoading( false)
          setError( false)
       
      }
    } catch (error) {
      console.log(error.response.data);
      
        setUpdated(false)
        setIsLoading(false)
        setError(true)
      
    }}fetchData();
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }
    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, [props])

 const handleChange = name => (event) => {
    
      setPassword( event.target.value)
    
  };

 const updatePassword = async (e) => {
    e.preventDefault();
    
    
    try {
      setButton('');
      setLoading(true)
      const response = await axios.put(
        apiPath + '/updatePasswordViaEmail',
        {
          username,
          password,
          resetPasswordToken: props.match.params.token,
        },
        
      );
      console.log(response.data);
      if (response.data.message === 'password updated') {
        
          setUpdated(true)
          setError(false)
          setLoading(false)
      } else {
        
          setUpdated(false)
          setError(true)
          setLoading(false)
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  
    if (error) {
      return (
        <div className={classes.background}>
        <Container className={classes.container} component="main" maxWidth="xs" >
   <CssBaseline />
   <div className={classes.paper}>
   <img src={ComsatsLogo} width='100' height="100" alt="loading"/>
   
     <Typography component="h1" variant="h5" style={{color:'red'}}>
     Problem Resetting password Please resend Email
     </Typography>
     <Grid container>
            <Grid item xs>
              <Link href="/Login" variant="body2">
                Return to Login Page
              </Link>
            </Grid>
            <Grid item>
              <Link href="/ForgetPassword" variant="body2">
                {"Forget Password?"}
              </Link>
            </Grid>
          </Grid>
       <Box mt={8}>
     <Copyright />
   </Box></div>
 </Container>
     </div>
      );
    }
    if (isLoading) {
      return (
        <div className={classes.background}>
           <Container className={classes.container} component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
      <img src={ComsatsLogo} width='100' height="100" alt="loading"/>
      
        <Typography component="h1" variant="h5">
        Loading...
        </Typography>
      
          <div ><CircularProgress variant="determinate" value={progress} /></div>
          <Box mt={8}>
        <Copyright />
      </Box></div>
    </Container>
        </div>
      );
    }
    return (
      <div className={classes.background}>
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={ComsatsLogo} width='100' height="100" alt="loading"/>
      
        <Typography component="h1" variant="h5">
        Enter New Password
        </Typography>
        <form className={classes.form} onSubmit={updatePassword}>
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
              id="password"
              label="password"
              value={password}
              onChange={handleChange('password')}
              
              InputProps={{
                className: classes.input
              }}
            name="password"
            autoComplete="password"
            autoFocus
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
          }}
          />
         
       
        {loading && (
          <div>
            <CircularProgress variant="determinate" value={progress} />
          </div>
        )}
        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
           
          </div>
        )}
        
        
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            borderRadius='100'
            style={{borderRadius:'200'}}
            className={classes.submit}
            disabled={!button}
          >
            UPDATE PASSWORD
          </Button>
          
          <Grid container>
            <Grid item xs>
              <Link href="/Login" variant="body2">
                Return to Login Page
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

      // <div>
        
      //   <form className="password-form" onSubmit={updatePassword}>
      //     <TextField
            
      //       id="password"
      //       label="password"
      //       onChange={handleChange('password')}
      //       value={password}
      //       type="password"
      //     />
      //     <button
      //       type="submit"
      //       buttonText="Update Password"
      //     />
      //   </form>

      //   {updated && (
      //     <div>
      //       <p>
      //         Your password has been successfully reset, please try logging in
      //         again.
      //       </p>
      //       <button
              
      //         buttonText="Login"
      //         link="/login"
      //       />
      //     </div>
      //   )}
      //   <button buttonText="Go Home"  link="/" />
      // </div>
    );
  }


