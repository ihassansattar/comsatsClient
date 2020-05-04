
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { apiPath } from '../../config'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://comsats.com/">
        COMSATS UNIVERSITY
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = {

  paper: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {

    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.

  },
  submit: {

  },
}




export default function UpdateProfile(props) {


  const [username, setUsername] = useState('');
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [email, setEmail] = useState('');
  const [loadingUser, setLoadingUser] = useState(false);
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(false);


  useEffect(() => {


    setLoadingUser(true)
    async function fetchData() {
      const accessString = localStorage.getItem('JWT');
      if (accessString === null) {

        setLoadingUser(false)
        setError(true)

      }

      try {
        const response = await axios.get(apiPath + '/findadmins', {
          params: {
            username: props.username,
          },
          headers: { Authorization: `JWT ${accessString}` },
        });
        console.log(response.data);

        setLoadingUser(false)
        setFirst_Name(response.data.first_Name ? response.data.first_Name : '')
        setLast_Name(response.data.last_Name ? response.data.last_Name : '')
        setEmail(response.data.email)
        setUsername(response.data.username)
        setError(false)

      } catch (error) {
        console.log(error.response.data);

        setLoadingUser(false)
        setError(true)

      }
      // }
    }
    fetchData();

  }, [props])
  const handleChange = name => (event) => {

    if (name === "first_Name") {
      setFirst_Name(event.target.value)
    }
    else if (name === "last_Name") {
      setLast_Name(event.target.value)
    }
    else if (name === "email") {
      setEmail(event.target.value)
    }
    else {

    }
  };

  const updateUser = async (e) => {
    const accessString = localStorage.getItem('JWT');
    if (accessString === null) {

      setLoadingUser(false)
      setError(true)

    }


    e.preventDefault();
    try {
      await axios.put(
        apiPath + '/updateadmins',
        {
          first_Name,
          last_Name,
          email,
          username,
        },
        {
          headers: { Authorization: `JWT ${accessString}` },
        },
      );


      setUpdated(true)
      setError(false)

    } catch (error) {


      setLoadingUser(false)
      setError(true)

    }
  };




  if (error) {
    return (
      <div>

        <p>
          There was a problem accessing your data. Please go login again.
          </p>

      </div>
    );
  }
  if (loadingUser !== false) {
    return (
      <div>
<div>
                <div class="text-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
            </div>
      </div>
    );
  }
  if (loadingUser === false && updated === true) {
    return window.location.reload();
  }

  if (loadingUser === false) {
    return (

      <Container component="main" maxWidth="xs" className="card">

        <CssBaseline />
        <div style={styles.paper}>

          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            UPDATE PROFILE
        </Typography>

          <div style={{ marginBottom: 30 }}></div>
          <form style={styles.form} onSubmit={updateUser}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_Name"
                  value={first_Name}
                  onChange={handleChange('first_Name')}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_Name"
                  value={last_Name}
                  onChange={handleChange('last_Name')}

                  label="Last Name"
                  name="last_Name"
                  autoComplete="lname"
                />
              </Grid>

              <div style={{ marginBottom: 30 }}></div>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  value={email}
                  onChange={handleChange('email')}

                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <div style={{ marginBottom: 30 }}></div>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="email"
                  value={username}
                  readOnly
                  disabled
                />
              </Grid>

            </Grid>

            <div style={{ marginBottom: 30 }}></div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              class="btn btn-success btn-block"
            >
              UPDATE
          </Button>


          </form>

          <div style={{ marginBottom: 10 }}></div>
          <Button
            class="btn btn-danger btn-block"
            onClick={() => window.location.reload()}
          >Cancel Changes
          </Button>
          {/* <LinkButtons
            buttonStyle={cancelButton}
            buttonText="Cancel Changes"
            link={`/userProfile/${username}`}
          /> */}
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}


