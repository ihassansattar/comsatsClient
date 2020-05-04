import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { apiPath } from '../../config'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import SaveIcon from '@material-ui/icons/Save';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Redirect } from 'react-router-dom';


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

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {

    backgroundColor: 'red',
  },
  form: {
    width: '100%',

  },
  submit: {

  },
}


export default function UpdatePassword(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [updated, setUpdated] = useState(false)
  const [loadingUser, setLoadingUser] = useState(false);
  const [error, setError] = useState(false)



  useEffect(() => {

    async function fetchData() {
      setLoadingUser(true)

      const accessString = localStorage.getItem('JWT');
      if (accessString === null) {

        setLoadingUser(false)
        setError(true)

      }
      else {

        try {
          const response = await axios.get(apiPath + '/findUser', {
            params: {
              username: props.username,
            },
            headers: { Authorization: `JWT ${accessString}` },
          });

          setLoadingUser(false)
          setUsername(response.data.username)
          setPassword(response.data.password)
          setError(false)

        }
        catch (error) {
          console.log(error.response.data);

          setLoadingUser(false)
          setError(true)


        }
      }
    }
    fetchData();
  }, [props.username])
  const handleChange = name => (event) => {
    setPassword(event.target.value)

  };

  const updatePassword = async (e) => {
    const accessString = localStorage.getItem('JWT');
    if (accessString === null) {

      setLoadingUser(false)
      setError(true)

    }
    else {
      e.preventDefault();

      try {
        const response = await axios.put(
          apiPath + '/updatePassword',
          {
            username,
            password,
          },
          {
            headers: { Authorization: `JWT ${accessString}` },
          },
        );
        if (response.data.message === 'password updated') {

          setUpdated(true)
          setError(false)
          setLoadingUser(false)

        }
      } catch (error) {
        console.log(error.response.data);

        setUpdated(false)
        setError(true)
        setLoadingUser(false)

      }
    }
  };




  if (error) {
    return (
      <div>

        <p >
          There was a problem accessing your data. Please go login again.
            <Redirect to={`/Login`} />
        </p>

      </div>
    );
  }
  if (loadingUser !== false) {
    return (
      <div>


        <div><div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div></div>
      </div>
    );
  }
  if (loadingUser === false && updated === true) {
    window.location.reload();
  }
  if (loadingUser === false) {

    return (

      <Container component="main" maxWidth="xs" style={{ backgroundColor: "white" }} className="card">



        <CssBaseline />
        <div style={styles.paper}>
          <div style={{ marginBottom: 30 }}></div>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <div style={{ marginBottom: 30 }}></div>
          <Typography component="h1" variant="h5">
            CHANGE PASSWORD
        </Typography>

          <form style={styles.form} onSubmit={updatePassword}>
            <div style={{ marginBottom: 30 }}></div>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleChange('password')}

                />
              </Grid>

            </Grid>
            <div style={{ marginBottom: 30 }}></div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<SaveIcon style={{ color: "white" }} />}
              style={styles.submit}
            >
              UPDATE
          </Button>

          </form>
          <div style={{ marginBottom: 10 }}></div>
          <Button
            fullWidth

            variant="contained"
            color="secondary"
            onClick={() => window.location.reload()}
          >Cancel Changes
          </Button>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}



