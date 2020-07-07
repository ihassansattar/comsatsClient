import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiPath } from '../../config';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Logout from '@material-ui/icons/Https';
import Password from '@material-ui/icons/VpnKey';
import { Redirect } from 'react-router-dom';
import BuildSharpIcon from '@material-ui/icons/SettingsSharp';
import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import CreateNewFolderSharpIcon from '@material-ui/icons/CreateNewFolderSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ComsatsLogo from './comsats logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatePassword from './UpdatePassword'
import UpdateProfile from './UpdateProfile'
import CourseUpload from './CourseUpload'
import LabUpload from './LabUpload'
import EditCourseComponent from './EditCourseComponents'
import EditLabComponent from './EditLabComponents'
import '../../App.css';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


const drawerWidth = 250;
function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  color: {
    color: "white"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  }
}));

const Profile = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [change, setChange] = useState('Dashboard')
  const [username, setUsername] = useState('');
  const [progress, setProgress] = React.useState(50);
  // const [password, setPassword] = useState('');
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  //const [email, SetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(true);
  const [deadline, setDeadline] = useState(false);
  const [allSubjects, setAllSubjects] = useState([]);
  const [labSubjects, setLabSubjects] = useState([]);
  const [coursComponents, setCoursComponents] = useState([]);
  const [labComponents, setLabComponents] = useState([]);
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [caseSwitcher, setCaseSwitcher] = useState('')
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index, index2) => {
    setChange(index2)
    setSelectedIndex(index);
  };

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('JWT');
    props.history.push("/login")
  };

  const drawer = (
    <div style={{ backgroundImage: "linear-gradient(to bottom, #062046, #132c4e, #203855, #2f455c, #3e5162)" }}>
      <div className={classes.toolbar} />
      <div className={classes.flex} ><img src={ComsatsLogo} width='100' height="100" alt="loading" /></div>
      <div>
        <div className={classes.flex}><p className={classes.color}>Welcome</p></div>
        <div className={classes.flex}><p className={classes.color}>{first_Name}&nbsp;&nbsp;{last_Name}</p></div>
      </div>
      <Divider />


      <List className={classes.color}>
        <ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0, 'Dashboard')}>
          <ListItemIcon className={classes.color}><DashboardSharpIcon className={classes.color} /></ListItemIcon >
          <ListItemText primary="DASHBOARD" />
        </ListItem>
        <Divider />

        <ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1, 'UploadCourse')}>
          <ListItemIcon className={classes.color}> <CloudUploadSharpIcon /></ListItemIcon>
          <ListItemText primary="Upload Course Components" />
        </ListItem>

        <ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2, 'EditCourse')}>
          <ListItemIcon className={classes.color}><CreateSharpIcon /></ListItemIcon>
          <ListItemText primary="Edit Course Components" />
        </ListItem>
        <Divider />


        <ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3, 'UploadLab')}>
          <ListItemIcon className={classes.color}><CreateNewFolderSharpIcon /></ListItemIcon>
          <ListItemText primary="Upload Lab Components" />
        </ListItem>

        <ListItem button selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4, 'EditLab')}>
          <ListItemIcon className={classes.color}><EditTwoToneIcon /></ListItemIcon>
          <ListItemText primary="Edit Lab Components" />
        </ListItem>
        <Divider />

        <ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5, 'UpdateProfile')}>
          <ListItemIcon className={classes.color}><BuildSharpIcon /></ListItemIcon>
          <ListItemText primary="Update Profile" />
        </ListItem>

        <ListItem button selected={selectedIndex === 6} onClick={event => handleListItemClick(event, 6, 'ChangePassword')}>
          <ListItemIcon className={classes.color}><Password /></ListItemIcon>
          <ListItemText primary="change Password" />
        </ListItem>
        <Divider />
        <Divider />
        <ListItem button onClick={logout}>
          <ListItemIcon className={classes.color}><Logout /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>



    </div>
  );




  const normalise = value => (value - 0) * 100 / (20 - 0);

  useEffect(() => {
    initialData()
  }, [change])
  const initialData = async () => {

    await axios.get(apiPath + `/graphOfCourses/${props.match.params.username}`).then(courseCom => {
      setCoursComponents(courseCom.data)
      console.log(courseCom.data)
    })
    await axios.get(apiPath + `/graphOfLabs/${props.match.params.username}`).then(labCom => {
      setLabComponents(labCom.data)
      console.log(labCom.data)
    })
  }

  function Navigation() {
    
    switch (change) {
      case "Dashboard": {
        
        return (<div><div className="card text-center" style={{ marginTop: '50px' }}>
        <div className="card-header" style={{ backgroundColor: "blue", color: "white" }}>
          Comsats Accriditation Department Teachers Dashboard
      </div>
        <div className="card-body">
          <p>{message}</p>
        </div>
        <div className="card-footer text-muted" style={{ backgroundColor: "pink", color: "white" }}>
          {deadline}
        </div>

      </div>
        {coursComponents && coursComponents.length !== 0 && <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>Course Components</h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            {coursComponents.map(sin => <div style={{ margin:"6px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "55%" }}>
              <h3>{sin.subjectName}</h3>
              <CircularProgressWithLabel value={normalise(sin.count)} />
            </div>)}
          </div>
        </div>}
        {labComponents && labComponents.length !== 0 && <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>Lab Components</h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            {labComponents.map(sin => <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "55%" }}>
              <h3>{sin.subjectName}</h3>
              <CircularProgressWithLabel value={normalise(sin.count)} />
            </div>)}
          </div>
        </div>}
      </div >)};


      case "UploadCourse": return <CourseUpload username={username} />;
      case "EditCourse": return <div ><EditCourseComponent username={username} /> </div>;
      case "UploadLab": return <div><p><LabUpload username={username} /></p></div>;
      case "EditLab": return <div><EditLabComponent username={username} /></div>;
      case "UpdateProfile": return (<div style={{ marginTop: '50px' }}><UpdateProfile username={username} /> </div>);
      case "ChangePassword": return (<div style={{ marginTop: '50px' }}><UpdatePassword username={username} /> </div>);

      default: return <h1>No project match</h1>
    }
  }


  useEffect(() => {
    const accessString = localStorage.getItem('JWT');

    async function fetchData() {
      if (accessString == null) {
        setIsLoading(false)
        setError(true)

      }
      else {
        try {
          const response = await axios.get(apiPath + '/findUser', {
            params: {
              username: props.match.params.username
            },
            headers: { Authorization: `JWT ${accessString}` },
          });
          initialData()
          await axios.get(apiPath + '/findsiteOptions/teacherDashboard').then(res => {
            console.log(res)
            setDeadline(res.data.type)
            setMessage(res.data.value)
          })
          setFirst_Name(response.data.first_Name)
          setLast_Name(response.data.last_Name)
          // SetEmail(response.data.email)
          setUsername(response.data.username)
          // setPassword(response.data.password)
          setIsLoading(false)
          setError(false)
        }
        catch (error) {

          setError(true)
        }

      }
    }
    fetchData();

  }, [props])





  if (error) {
    return (
      <div>

        <div >
          Problem fetching user data. Please login again.
            <Redirect to={`/Login`} />
        </div>

      </div>
    );
  }
  if (isLoading) {
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

  return (
    <div className="with1">
      <div className={classes.root} >
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} style={{ backgroundImage: "linear-gradient(to bottom, #062046, #132c4e, #203855, #2f455c, #3e5162)" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Accriditation Teacher Login
          </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer

              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className="with1">



            {Navigation()}

          </div>
        </main>
      </div></div>
  );

}
export default Profile;




