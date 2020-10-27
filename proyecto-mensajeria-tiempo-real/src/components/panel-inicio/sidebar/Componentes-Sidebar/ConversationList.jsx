import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';

import firebase from "firebase";
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

function ConversationList(props) {
  const classes = useStyles();

  function RecibirMensajes(contacto){
    firebase.firestore().collection(props.Nombre).doc(contacto).onSnapshot(function(mensajes) {
      if(mensajes.exists){props.setMessages(mensajes.data(),contacto);console.log(props.Mensajes);}
      else{alert("Problemas de conexion ")}
    });

  }

  function ImpresionContactos(Contactos){
    if(Contactos !== null){
    let arregloImpresion = [];
    for (const contacto in Contactos){
      // Para acceder a elementos de la propiedad - console.log(`${contacto} contiene ${Contactos[contacto][2]}`);
      arregloImpresion.push(
      <ListItem divider className={classes.item}> 
        <Button 
          onClick={()=>{RecibirMensajes(Contactos[contacto][2])}} 
          className={classes.btn}
          fullWidth
        >
        <ListItemAvatar>
          <Avatar>{contacto[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary= {Contactos[contacto][2]}
          // secondary= {Contactos[contacto][0]}
          className={classes.text}
        />
        <Typography
          color="textSecondary"
        >
          {/* {Contactos[contacto][1]} */}
        </Typography>
        </Button>
      </ListItem>
    )
    };
      return arregloImpresion;
   
    }else{
      return (
      <ListItem divider>       
        <ListItemText 
          primary= "Cargando..."
        />
       </ListItem>
      )}
  }

  return (
    <>
      <List className={classes.container}>
        {ImpresionContactos(props.Contacts)}
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
    setUser: (informacion) => dispatch(setUser(informacion)),
    setMessages: (mensajes,contacto) => dispatch(setMessages(mensajes,contacto))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);
