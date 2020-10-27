import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { connect } from "react-redux";
import {
  setCurrentRegister,
  setCurrentLogin,
  setUser,
  setMessages,
  register,
  signIn
} from "../../../../store/actions/user-actions";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  avatar: {marginRight: theme.spacing(2)},
  grow: {flexGrow: 1},
  icon: {color: "#616161"},
  bar: {
    backgroundColor: "#eeeeee",
  }
}))

function Navbar(props) {
  const classes = useStyles();

  function valorAvatar(){
    if(props.ContactoMensajes !== null && props.ContactoMensajes !== undefined){
    return props.ContactoMensajes[0]}else{}
  }

  function valorNombre(){
    if(props.ContactoMensajes !== null && props.ContactoMensajes !== undefined){
      return <Typography variant="h6" className={classes.icon}>{props.ContactoMensajes}</Typography>}else{
        return <Typography variant="h6" className={classes.icon}>Elija un contacto</Typography>
      }
  }
  return (
    <>
      <AppBar elevation={0} position='relative' className={classes.bar}>
        <Toolbar >
            <Avatar className={classes.avatar}>{valorAvatar()}</Avatar>
            {valorNombre()}
            <div className={classes.grow} />
            {/* <IconButton aria-label="options">              
              <MoreVertIcon className={classes.icon}/>
            </IconButton> */}
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset} />   */}
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
    Mensajes: state.user.currentMensajes,
    ContactoMensajes: state.user.currentContactMensaje,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    register: () => dispatch(register()),
    signIn: (callback) => dispatch(signIn(callback)),
    setUser: (informacion) => dispatch(setUser(informacion))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);