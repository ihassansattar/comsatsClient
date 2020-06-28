import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { apiPath } from '../../config'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [first_Name, setfirst_Name] = useState('');
    const [last_Name, setlast_Name] = useState('')
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [sucess, setsucces] = useState('')
    const [creating, setcreating] = useState('')
    const [error, seterror] = useState('')
    function register() {
        setcreating('creating...')
        setsucces('')
        seterror('')
        if (email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)) {
            if (username.length>1) {
                if (password.length > 8) {
                    axios.post(apiPath + '/registerUser', {
                        first_Name: first_Name,
                        last_Name: last_Name,
                        email: email,
                        username: username,
                        password: password
                    }).then(res => {
                        setcreating('')
                        seterror('')
                        setfirst_Name('')
                        setlast_Name('')
                        setemail('')
                        setusername('')
                        setpassword('')
                        setsucces("succesfully Registered")
                    }).catch(err => {
                        setcreating('')
                        setsucces('')
                        seterror('username or email already exists')
                    })
                }
                else{
                    setcreating('')
                    seterror("password must be atleast 8 characters long")
                }
            }
            else {
                setcreating('')
                seterror("please enter user name")
            }
        }
        else {
            setcreating('')
            seterror("wrong email")
        }
    }

    return (
        <Container component="main" maxWidth="xs" className='card'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register Teachers
        </Typography>
                <form className={classes.form} action="#">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                label="First Name"
                                autoFocus

                                value={first_Name}
                                onChange={(e) => setfirst_Name(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Last Name"

                                value={last_Name}
                                onChange={(e) => setlast_Name(e.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={username}

                                label="User Name"

                                onChange={(e) => setusername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Email Address"


                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </Grid>

                    </Grid>

                    <p style={{ color: "red" }}>{error}</p>
                    <p style={{ color: "green" }}>{sucess}</p>

                </form>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={register}
                >
                    Register
          </Button>
            </div>
            <Box mt={5}>

            </Box>
        </Container>
    );
}