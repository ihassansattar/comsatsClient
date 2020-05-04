import React, { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {apiPath} from '../../config'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ComsatsLogo from './comsats logo.png'
const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor:"rgba(0,0,0,0.78)"
    
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
    backgroundColor:'rgba(45, 35, 66, 0.8)'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // backgroundColor:"rgba(0,0,0,0.78)",
    
    minHeight:"650px"
  },
  color:{
    color:"white"
  },
  flex:{
    display:"flex",
    justifyContent:"center"
  }
}));




export default function Profile(props){
  const [selectedIndex, setSelectedIndex] =useState(1);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [email, SetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  cost[ChannelMergerNode,setChange]=('')
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleListItemClick = (event, index) => {
setChange(event.target.value)
    setSelectedIndex(index);
    return(<div>hello</div>)
  };

  const drawer = (
    <div style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
      <div className={classes.toolbar} />
      <div className={classes.flex} ><img src={ComsatsLogo} width='100' height="100" alt="loading"/></div>
      <div>
      <div className={classes.flex}><p className={classes.color}>Welcome</p></div>
   
  <div className={classes.flex}><p className={classes.color}>{first_Name}&nbsp;&nbsp;{last_Name}</p></div>
  </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} href='/login'>
            <ListItemIcon style={{color:'white'}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText style={{color:'white'}}primary={text} />
          </ListItem>
        ))}
        <List component="nav" aria-label="main mailbox folders" style={{color:'white'}}>
        <ListItem 
          button
          selected={selectedIndex === 0}
          value="two"
          onClick={event => handleListItemClick(event, 0)}
          
        >
          <ListItemIcon>
            <InboxIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          value="one"
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
          <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      </List>
      <Divider />
      <List style={{color:'white'}}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem  button key={text}>
            <ListItemIcon style={{color:'white'}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  const project = () => {
    switch("one") {

      case "one":   return <div><p>one</p></div>;
      case "two":   return <div><p>two</p></div>;
      case "three": return <div><p>three</p></div>;
      case "four":  return <div><p>four</p></div>;

      default:      return <h1>No project match</h1>
    }
  }
useEffect(() => {
  const accessString = localStorage.getItem('JWT');
  async function fetchData() {
    

    if (accessString == null) {
      setIsLoading(false)
      setError(true)
     
    } else {
       try {
         const response = await axios.get(apiPath + '/findUser', {
          params: {
          username:props.username
          },
          headers: { Authorization: `JWT ${accessString}` },
        });
          setFirst_Name(response.data.first_Name)
          setLast_Name(response.data.last_Name)
          SetEmail(response.data.email)
          setUsername(response.data.username)
          setPassword(response.data.password)
          setIsLoading(false)
          setError(false)
        
        
      } 
      catch (error) {
        console.error(error.response.data);
        setError(true)
      }
//     }
   }
}
fetchData();
    
}, [props])

 

  

    if (error) {
      return (
        <div>
          
          <div >
            Problem fetching user data. Please login again.
          </div>
         
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          
          <div>Loading User Data...</div>
        </div>
      );
    }
    
    return (
     
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{backgroundColor:"rgba(45, 35, 66, 0.72)"}}>
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
        <Typography paragraph style={{color:'white'}}>
        { project() }
        </Typography>
        <Typography paragraph style={{color:'white'}}>
          {first_Name}
        </Typography>
      </main>
    </div>
    );
  
}




