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
import AddBoxIcon from '@material-ui/icons/AddBox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

    const [subject, setsubject] = useState('');
    const [lab, setlab] = useState('');
    const [sucess, setsucces] = useState('')
    const [error, seterror] = useState('')
    const [creating, setcreateing] = useState('')
    function create() {
        setcreateing("creating...")
        setsucces('')
        seterror('')
if(lab && subject){
        axios.post(apiPath + '/createsubjects', {
            Name: subject,
            Lab: lab,

        }).then(res => {
            console.log(res)
            seterror('')
            setcreateing('')
            setsubject('')
            setsucces("succesfully Registered")
        }).catch(err => {
            setsucces('')
            setcreateing('')
            seterror('something went wrong try againn')
        })
    }
    else{
        setcreateing('')
        seterror("all fields are required fields")
    }
    }

    return (
        <Container component="main" maxWidth="xs" className='card '>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddBoxIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Subjects
        </Typography>
        <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="Name"
                label="Name"
                type="Text"
                id="Name"
                value={subject}
                onChange={(e)=>setsubject(e.target.value)}
                
              />
     
            </Grid></Grid>

            <select id="inputState" class="form-control" onChange={(e)=>setlab(e.target.value)}>
        <option selected>LAB SUBJECT?</option>
        <option value="YES">Yes</option>
        <option value="NO">No</option>
      </select>
                <p style={{ color: "red" }}>{error}</p>
                <p style={{ color: "green" }}>{sucess}</p>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={create}
                >
                    {creating?creating:'create'}
          </Button>
            </div>
            <Box mt={5}>

            </Box>
        </Container>
    );
}