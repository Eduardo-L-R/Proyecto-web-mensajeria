import React, {useEffect, useState} from 'react'
import { 
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Avatar
} from '@material-ui/core'

import firebase from 'firebase';
import { connect } from "react-redux";
import {
  setCurrentRegister,
  setCurrentLogin,
  setUser,
  setMessages,
  register,
  signIn,
  setServerContacts
} from "../../../../store/actions/user-actions";

const useStyles = makeStyles(theme => ({
  btn: {
    padding: theme.spacing(1.5)
  },
  text: {
    textAlign: "left",
  },
  item: {
    margin: 0,
    padding: 0
  },
  container: {
    overflow: "auto",
    flex: 1,
    padding: 0,
    margin: 0
  }
}))

function UserList(props) {
  const classes = useStyles();

  useEffect(() => {
    let subscribe = firebase.firestore().collection("Usuarios").onSnapshot(function(collection) {     
      let arregloContactosAgregarbles = [];     
      // let arrayTasks = [];     
      collection.forEach(doc => {
        //Colocar cada uno de los documentos que obtenga de la base de datos                
        // arrayTasks.push(doc.data());
        arregloContactosAgregarbles.push(    
          doc.data()
        );
      });
      // console.log("Contactos obtenido: ",arrayTasks);
      props.setServerContacts(arregloContactosAgregarbles);
    });  
    return () => subscribe();
  }, []);

  function CargandoContactosDisponibles(){
    let ArregloEtiquetas = [];
    if(props.ServerContacts !== []){
      console.log("Se ingreso al if");
      ArregloEtiquetas = props.ServerContacts.map((contacto) => {
        return(
          <ListItem divider className={classes.item}> 
          <Button
            className={classes.btn}
            fullWidth
          >
            <ListItemAvatar>
            <Avatar>{contacto.Nombre[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary= {contacto.Nombre}
              className={classes.text}
            />
          </Button>
          </ListItem>
        );
      })
    }
    return ArregloEtiquetas;
  }

  return (
    <List className={classes.container}>
      {
        CargandoContactosDisponibles()
      }
    </List>
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
    ServerContacts: state.user.currentServerContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    setServerContacts: serverContacts => dispatch(setServerContacts(serverContacts)),
    register: () => dispatch(register()),
    signIn: (callback) => dispatch(signIn(callback)),
    setUser: (informacion) => dispatch(setUser(informacion)),
    setMessages: (mensajes,contacto) => dispatch(setMessages(mensajes,contacto))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);