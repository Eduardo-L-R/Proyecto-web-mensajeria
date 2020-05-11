import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  grow: {flexGrow: 1},
  icon: {color: "#616161"},
  bgColor: {backgroundColor: "#eeeeee"}
}))

function Navbar(props) {
  const classes = useStyles();

  function ImprimirUsuario(usuario){
    if(props.Nombre !== undefined){
      let nombre = props.Nombre.split("",8);
      return(
        <AppBar elevation={0} position='relative' className={classes.bgColor}>
          <Toolbar >
              <Avatar>{props.Nombre[0]}</Avatar>
              <h3 style={{color:"gray", fontSize:"1rem", marginLeft:"10px", fontFamily:"Roboto"}}>{nombre}</h3>
              <div className={classes.grow} />
              <IconButton aria-label="new chat">  
                <ChatIcon className={classes.icon}/>
              </IconButton>
              <IconButton aria-label="options">              
                <MoreVertIcon className={classes.icon}/>
              </IconButton>
          </Toolbar>
        </AppBar>
      )
    }
  }

  return (
    <>
      {ImprimirUsuario()}
    </>
  )
}

// Acciones y states de redux importadas
const mapStateToProps = state => {
  return {
    user: state.user,
    currentEmail: state.user.currentLogin.email,
    Nombre: state.user.currentUser.Nombre,
    Contacts: state.user.currentContacts,
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);