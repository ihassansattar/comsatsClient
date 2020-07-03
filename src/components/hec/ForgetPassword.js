/* eslint-disable no-console */
import React, { useState } from 'react';

import axios from 'axios';
import {apiPath} from '../../config'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
  

export default function ForgotPassword(){
  const[button,setButton]=useState('yy');
    const classes = useStyles();
    const [showError, setShowError] = useState(false);
    const [showNullError, setNullError] = useState(false);
    const [email, setEmail] = useState('');
    const[loading,setLoading]=useState(false);
  const [messageFromServer, setMessageFromServer] = useState('');
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
    setEmail(event.target.value) 
    
  };

 const sendEmail = async (e) => {
    e.preventDefault();
    
    if (email === '') {
      setShowError(false)
        setMessageFromServer('')
        setNullError(true)
        
      
    } else {
        setLoading(true)
        setButton('')
      try {
        const response = await axios.post(
          apiPath + '/forgotPasswordadmins',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'recovery email sent') {
            setLoading(false)
            setShowError (false)
           setMessageFromServer ( 'recovery email sent')
            setNullError(false)
          
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
            setLoading(false)
           setShowError(true)
            setMessageFromServer ('')
            setNullError(false)
          
        }
      }
    }
  };



    return (
    //   <div>
        
    //     <form className="profile-form" onSubmit={sendEmail}>
    //       <TextField
            
    //         id="email"
    //         label="email"
    //         value={email}
    //         onChange={handleChange('email')}
    //         placeholder="Email Address"
    //       />
    //       <button type="submit"
            
    //         buttonText="Send Password Reset Email"
    //       />
    //     </form>
    //     {showNullError && (
    //       <div>
    //         <p>The email address cannot be null.</p>
    //       </div>
    //     )}
    //     {showError && (
    //       <div>
    //         <p>
    //           That email address isn&apos;t recognized. Please try again or
    //           register for a new account.
    //         </p>
            
    //       </div>
    //     )}
    //     {messageFromServer === 'recovery email sent' && (
    //       <div>
    //         <h3>Password Reset Email Successfully Sent!</h3>
    //       </div>
    //     )}
        
    //   </div>
    <div className={classes.background}>
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={ComsatsLogo} width='100' height="100" alt="loading"/>
      
        <Typography component="h1" variant="h5">
        Enter Email TO RESET Password
        </Typography>
        <form className={classes.form} onSubmit={sendEmail}>
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
              id="email"
              label="email"
              value={email}
              onChange={handleChange('email')}
              
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
         
         {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {loading && (
          <div>
            <CircularProgress variant="determinate" value={progress} />
          </div>
        )}
        {showError && (
          <div>
            <p style={{color:"red"}}>
              That email address isn&apos;t recognized. Please try again or
              Contact to the Admin.
            </p>
            
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
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
            RESET PASSWORD
          </Button>
          
          <Grid container>
            <Grid item xs>
              <Link href="hec" variant="body2">
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
    );
  }



