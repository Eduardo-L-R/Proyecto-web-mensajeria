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
      let arregloContactosAgregables = [];     
      // let arrayTasks = [];     
      collection.forEach(doc => {
        //Colocar cada uno de los documentos que obtenga de la base de datos                
        // arrayTasks.push(doc.data());
        arregloContactosAgregables.push(    
          doc.data()
        );
      });
      // console.log("Contactos obtenido: ",arrayTasks);
      props.setServerContacts(arregloContactosAgregables);
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
            onClick={() => AgregandoNuevoContacto(props.Nombre, contacto["Nombre"])}
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

  function AgregandoNuevoContacto(nombre, contacto){
      console.log('cosas del contacto nuevo:',nombre, contacto)
      firebase.firestore().collection(nombre).doc("Contactos").update({
        [contacto]: [
          "mensaje bajo",
          "hora",
          contacto
        ]
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      firebase.firestore().collection(contacto).doc(nombre).set({
        1: [
          "left",
          "12:50",
          `Has comenzado una conversacion con ${nombre}`
        ]
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

      firebase.firestore().collection(contacto).doc("Contactos").update({
        [nombre]: [
          "mensaje bajo",
          "hora",
          nombre
        ]
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      firebase.firestore().collection(nombre).doc(contacto).set({
        1: [
          "left",
          "12:50",
          `Has comenzado una conversacion con ${contacto}`
        ]
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
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