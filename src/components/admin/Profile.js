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
import BuildSharpIcon from '@material-ui/icons/SettingsSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import { Redirect } from 'react-router-dom';
import ComsatsLogo from './comsats logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatePassword from './UpdatePassword'
import UpdateProfile from './UpdateProfile'
import InfrastructureInformation from './infrastructureInformationForm'
import ProgramInformation from './programInformationForm'
import FinancialInformation from './financialInformationForm'
import GeneralInformation from './generalInformationForm'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import RegisterUsers from './registerUsers';
import AllUsers from './allUsers';
import Handledeadlines from './handledeadlines'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import TodayOutlinedIcon from '@material-ui/icons/AdjustSharp';
import AdjustSharpIcon from '@material-ui/icons/TodayOutlined';
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import AddSubjects from './createSubject'
import AllSubjects from './allSubjects'
import CoureComponents from './CourseComponents'
import LabComponents from './LabComponents'
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




export default function AdminProfile(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [change, setChange] = useState('Dashboard')
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  //const [email, SetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const showItems = (event) => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const handleListItemClick = (event, index, index2) => {
    setChange(index2)
    setSelectedIndex(index);
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('JWT');
    props.history.push("/manage")
  };
  const drawer = (
    <div  style={{ backgroundImage: "linear-gradient(to bottom, #062046, #132c4e, #203855, #2f455c, #3e5162)" }}>
      <div className={classes.toolbar} />
      <div className={classes.flex} ><img src={ComsatsLogo} width='100' height="100" alt="loading" /></div>
      <div>
        <div className={classes.flex}><p className={classes.color}>Welcome</p></div>
        <div className={classes.flex}><p className={classes.color}>{first_Name}&nbsp;&nbsp;{last_Name}</p></div>
      </div>

      <Divider />

      <ListItem button selected={selectedIndex === 8} onClick={event => handleListItemClick(event, 8, 'RegisterUsers')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><GroupAddOutlinedIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="Register Teachers" />
      </ListItem>
      <ListItem button selected={selectedIndex === 7} onClick={event => handleListItemClick(event, 7, 'AllUsers')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><PeopleAltOutlinedIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="All Teachers" />
      </ListItem>
      <ListItem button selected={selectedIndex === 10} onClick={event => handleListItemClick(event, 10, 'addSubjects')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><NoteAddIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="Add Subjects" />
      </ListItem>
      <ListItem button selected={selectedIndex === 11} onClick={event => handleListItemClick(event, 11, 'allSubjects')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><AdjustSharpIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="All Subjects" />
      </ListItem>
      <ListItem button selected={selectedIndex === 12} onClick={event => handleListItemClick(event, 12, 'courseComponents')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><AdjustSharpIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="Course Components" />
      </ListItem>
      <ListItem button selected={selectedIndex === 13} onClick={event => handleListItemClick(event, 13, 'labComponents')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><AdjustSharpIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="Lab Components" />
      </ListItem>
      <ListItem button selected={selectedIndex === 9} onClick={event => handleListItemClick(event, 9, 'DeadLines')}>
        <ListItemIcon className={classes.color} style={{ color: "white" }}><TodayOutlinedIcon /></ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="DeadLines" />
      </ListItem>
      <List className={classes.color}>
        <ListItem button onClick={event => showItems(event)}>
          <ListItemIcon className={classes.color}><CreateSharpIcon /></ListItemIcon >
          <ListItemText primary="CREATE FORM" />
        </ListItem>
        <Divider />
        {show ?
          <>
            <ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1, 'infrastructureInformation')}>
              <ListItemIcon className={classes.color}> </ListItemIcon>
              <ListItemText primary="INFRASTRUCTUR INFORMATION" />
            </ListItem>

            <ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2, 'programInformation')}>
              <ListItemIcon className={classes.color}></ListItemIcon>
              <ListItemText primary="PROGRAM INFORMATION" />
            </ListItem>
            <Divider />


            <ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3, 'financialInformation')}>
              <ListItemIcon className={classes.color}></ListItemIcon>
              <ListItemText primary="FINANCIAL INFORMATION" />
            </ListItem>

            <ListItem button selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4, 'generalInformation')}>
              <ListItemIcon className={classes.color}></ListItemIcon>
              <ListItemText primary="GENERAL INFORMATION" />
            </ListItem>
            <Divider />
          </>
          : ""}

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
  const Navigation = () => {
    switch (change) {

      case "infrastructureInformation": return <InfrastructureInformation />;
      case "programInformation": return <div><ProgramInformation /> </div>;
      case "financialInformation": return <div><p><FinancialInformation /></p></div>;
      case "generalInformation": return <div><GeneralInformation /></div>;
      case "UpdateProfile": return (<div style={{ marginTop: '50px' }}><UpdateProfile username={username} /> </div>);
      case "ChangePassword": return (<div style={{ marginTop: '50px' }}><UpdatePassword username={username} /> </div>);
      case "RegisterUsers": return <div><RegisterUsers /></div>;
      case "AllUsers": return <AllUsers />;
      case "DeadLines": return <Handledeadlines />
      case "addSubjects": return <AddSubjects />
      case "allSubjects": return <div><AllSubjects/></div>
      case "courseComponents" :return<CoureComponents/>
      case "labComponents" :return<LabComponents/>
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
          const response = await axios.get(apiPath + '/findadmins', {
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
          console.error(error.response.data);
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
            <Redirect to={`/manage`} />
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

    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ backgroundImage: "linear-gradient(to bottom, #062046, #132c4e, #203855, #2f455c, #3e5162)"}}>
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
            Accriditation Admin Login
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




        {Navigation()}


      </main>
    </div>
  );

}




