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
const drawerWidth = 250;


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

 const Profile=(props)=> {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [change, setChange] = useState('Dashboard')
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  //const [email, SetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index, index2) => {
    setChange(index2)
    setSelectedIndex(index);
  };

  function logout  (e) {
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








  function Navigation () {
    switch (change) {
      case "Dashboard": return (<div className="card text-center" style={{ marginTop: '50px' }}>
        <div className="card-header" style={{ backgroundColor: "blue", color: "white" }}>
          Comsats Accriditation Department TeacherS Dashboard
      </div>
        <div className="card-body">
          <p>all deadlines wil appear hear</p>
        </div>
        <div className="card-footer text-muted" style={{ backgroundColor: "pink", color: "white" }}>
          Dead LINE:12/1/19
      </div>
      </div>);


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



