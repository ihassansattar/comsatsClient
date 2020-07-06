import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import './forms.css'
import { apiPath } from '../../config'
import Container from '@material-ui/core/Container';
import SubjectIcon from '@material-ui/icons/Subject';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import CancelIcon from '@material-ui/icons/Cancel';
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

const DatatablePage = () => {
  const classes = useStyles();
  const [users, setusers] = useState([])
  const [loader, setloader] = useState()
  const [deleting, setdeleting] = useState('none')
  const [tableDisplay, setTableDisplay] = useState('')
  const [assignDisplay, setAssignDisplay] = useState('none')
  const [userId, setUserId] = useState('')
  const [subjects, setSubjects] = useState([])
  const [assignedSubjects, setAssignedSubjects] = useState([])
  const [designation, setDesignation] = useState('')
  useEffect(() => {
    getIntialData()
  }, [])
  const getIntialData = () => {
    setloader(true)
    axios.get(apiPath + '/findallteachers').then(users => {
      console.log(users)
      setusers(users.data)
      setloader(false)

    })
  }
  function deleteUsers(id) {
    setdeleting('')
    axios.delete(apiPath + '/deleteusers/' + id,

    ).then(res => {
      axios.get(apiPath + '/findallteachers').then(users => {

        setusers(users.data)
        setdeleting('none')
      })

    })

  }
  function assignSubjects(id) {
    setUserId(id)
    setAssignDisplay('')
    setTableDisplay('none')
    axios.get(apiPath + '/findsubjects').then(getSubjects => {
      console.log(getSubjects)
      setSubjects(getSubjects.data)
    })
  }
  function selectSubject(e) {
    console.log(e.target.value)
    let sub = JSON.parse(e.target.value);
    let duplicateAssignedSubjects = [...assignedSubjects]
    duplicateAssignedSubjects.push(sub)
    setAssignedSubjects(duplicateAssignedSubjects)
    let duplicateSubjects = [...subjects]
    duplicateSubjects = duplicateSubjects.filter(sin => sin.id !== sub.id)
    setSubjects([...duplicateSubjects])
  }
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
      },
      {
        label: 'Email',
        field: 'email',
      },
      {
        label: 'Designation',
        field: 'designation',
      },
      {
        label: 'Assign Subjects',
        field: 'assignSubjects',
      },
      {
        label: 'delete',
        field: 'delete',
      },

    ],
    rows: []
  };
  let a = users.map((users) =>
    data.rows.push(
      {
        name: users.username,
        email: users.email,
        designation: users.profile_pic,
        assignSubjects: <div><button><SubjectIcon color="primary" className="btn-change" onClick={(event) => assignSubjects(users.id)} /></button></div>,
        delete: <div><button><DeleteForeverIcon color="secondary" className="btn-change" onClick={(event) => deleteUsers(users.id)} /></button></div>,



      }
    )

  )
  let optionsubjects = subjects.map((allcourses) =>
    <option disabled={allcourses.Department} value={JSON.stringify(allcourses)} style={{ color: "BLACK" }} >{allcourses.Name}</option>
  );
  // <td className=" btn-danger" onClick={(event) => deletefiles(allcourses.id)}><DeleteForeverIcon /></td>

  if (loader) {
    return (
      <div>
        <div class="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }


  return (

    <div>
      <div style={{ display: `${tableDisplay}` }}>
        <Container component="main" maxWidth="s" className="card table-hover">

          <div className="spinner-border" style={{ display: `${deleting}` }} role="status">

          </div>

          <MDBDataTable
            responsiveLg
            data={data}
            btn={true}

          />
        </Container>
      </div>
      <div style={{ display: `${assignDisplay}` }}>
        <Container component="main" maxWidth="xs" className='card '>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AddBoxIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Assign Subjects
        </Typography>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <select className="browser-default custom-select" onChange={(e) => setDesignation(e.target.value)}>
                  <option value=''>CHOOSE DESIGNATION</option>
                  <option value='Visiting'>Visiting</option>
                  <option value='Lecturer'>Lecturer</option>
                  <option value='Assistant Professor'>Assistant Professor</option>
                  <option value='Associate Professor'>Associate Professor</option>
                  <option value='Professor'>Professor</option>

                </select>
                <select className="browser-default custom-select" value={""} onChange={selectSubject}>
                  <option value=''>CHOOSE SUBJECT</option>
                  {optionsubjects}
                </select>
                <div>
                  {assignedSubjects.map(sub => <p key={sub.id}>{sub.Name}&nbsp;<span onClick={() => {

                    let duplicateAssignedSubjects = [...assignedSubjects]
                    duplicateAssignedSubjects = duplicateAssignedSubjects.filter(sin => sin.id !== sub.id)

                    setAssignedSubjects(duplicateAssignedSubjects)
                    let duplicateSubjects = [...subjects]
                    duplicateSubjects.push(sub)
                    setSubjects([...duplicateSubjects])
                  }}><CancelIcon /></span></p>)}
                </div>
              </Grid></Grid>

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                let selectedSubjectIds = assignedSubjects.map((sub) => sub.id)

                axios.post(apiPath + '/assignSubjects', {
                  teacherId: userId,
                  subjects: selectedSubjectIds,
                  designation: designation

                }).then(res => {
                  setAssignDisplay('none')
                  setTableDisplay('')
                  getIntialData()
                  

                  
                }).catch(err => {

                })
              }}
            >
              SUBMIT
            </Button>
          </div>
          <Box mt={5}>

          </Box>
        </Container>

      </div>
    </div>
  );
}

export default DatatablePage;