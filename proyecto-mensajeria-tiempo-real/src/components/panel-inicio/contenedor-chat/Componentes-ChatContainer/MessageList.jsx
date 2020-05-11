import React  from 'react';
import { Button, List, ListItem, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  container: {
    backgroundColor: "#fafafa",
    paddingTop: 0,
    flex: 1,
    overflow: "auto"
  },
  btn: {
    margin: "0 auto"
  },
  item: {
    padding: "8px 16px",
    maxWidth: "80%"
  },
  userMsg: {
    backgroundColor: "#b9f6ca"
  },
  right: {
    justifyContent: "flex-end"
  }
}))

function MessageList(props) {
  const classes = useStyles();

  function MostrarMensajes(){
    let arregloMensajes = [];
    for(let mensaje in props.Mensajes){
      if(props.Mensajes[mensaje] !== null && props.Mensajes[mensaje][0] === "right"){
        arregloMensajes.push(
          <ListItem className={classes.right}>
          <Paper className={`${classes.item} ${classes.userMsg}`}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              {props.Mensajes[mensaje][2]}          
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
          </ListItem>
        )
      } 
      else if(props.Mensajes[mensaje] !== null && props.Mensajes[mensaje][0] === "left"){
        arregloMensajes.push(
          <ListItem>
          <Paper className={classes.item}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              {props.Mensajes[mensaje][2]}          
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
          </ListItem>
        )
      } 
    }
    return arregloMensajes;
  };

  return (
    <> 
      <List className={classes.container}>
        <Button color="primary" fullWidth>Show Previous Message!</Button>
        {MostrarMensajes()}
      </List>
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
)(MessageList);