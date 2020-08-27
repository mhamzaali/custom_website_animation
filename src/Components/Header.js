import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  Bar:{
    background: 'linear-gradient(90deg, #2b2d42 30%, #333533 90%)',
  },
  title: {
    flexGrow: 0.03,
    fontSize: '15px',
    fontFamily:'century Gothic',
    fontWeight:'600',
    cursor:'pointer',
    color: 'white',
    textAlign:'center',
    textShadow: '2px 2px 4px #000000',
    '&:hover': {
      background:'white',
      color: 'black',
      textShadow: '2px 2px 4px #ffffff',
      paddingTop:'20px',
      paddingBottom:'20px',
    },
  },
  logo:{
    width:'70px',
    height:'auto',
    cursor:'pointer',
    marginRight:'30px',
  },
  icons:{
    marginLeft:'auto',
    marginRight:'20px',
  },
}));

export const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Bar} >
          <div>
            <img className={classes.logo} src="https://www.freepnglogos.com/uploads/eagles-png-logo/eagle-sports-png-logos--0.png" alt='eaglelogo' />
          </div>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Products
          </Typography>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
          <div className={classes.icons}>
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
