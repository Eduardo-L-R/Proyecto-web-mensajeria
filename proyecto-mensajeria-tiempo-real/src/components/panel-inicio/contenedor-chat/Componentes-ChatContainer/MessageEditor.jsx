import React from 'react'
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

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

const useStyles = makeStyles({
  bar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#eeeeee"
  },
  input: {
    backgroundColor: "#ffffff",
    border: '1px solid #ccc',
    borderRadius: '4px',
    flex: 1,
    padding: "8px 16px"
  },
  icon: {
    margin: "4px"
  }
})

/* agregarDatos = async () => {    
  //Agregar una tarea a la base de datos con el id del documento que se va agregar
  try{
    let refNewTask = await firebase.firestore().collection('Jugadores').doc(this.state.jugador.nombre); 
    await refNewTask.set(
      this.state.jugador
    ).then(respuesta =>{alert("actualizado correctamente",respuesta)}).catch(error=>{alert("no se actualizo correctamente la información",error)});
  }catch(error){
    alert("No se ha podido agregar informacion al usuario: ", error.message);
  }
  // Se actualiza la informacion para mostrar los nuevos valores
  this.obtenerDatos(this.state.jugador.nombre,(datosJugador) => {
    var arreglo = this.state;
    arreglo.jugador = datosJugador;
    this.setState({arreglo});
  });
} */


function MessageEditor(props) {
  const classes = useStyles();

  function nuevoMensaje(){
    if(props.Mensajes !== null){
      firebase.firestore().collection(props.Nombre).doc(props.ContactoMensajes).update({
        [Object.keys(props.Mensajes).length+1]: [
          "right",
          "12:50",
          "mensaje agregado 2"
        ]}
      )
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      firebase.firestore().collection(props.ContactoMensajes).doc(props.Nombre).update({
        [Object.keys(props.Mensajes).length+1]: [
          "left",
          "12:50",
          "mensaje agregado 2"
        ]}
      )
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  }

  function limpiarChat(){
    if(props.Mensajes !== null){
      firebase.firestore().collection(props.Nombre).doc(props.ContactoMensajes).set({
        }
      )
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      firebase.firestore().collection(props.ContactoMensajes).doc(props.Nombre).set({
        }
      )
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  }
  return (
    <div>
      <AppBar 
        position="relative" 
        elevation={0}
        className={classes.bar}
      >
        <Toolbar>
          <IconButton className={classes.icon}>            
            <EmojiIcon />
          </IconButton>
          <InputBase className={classes.input} multiline/>
          <IconButton onClick={()=>limpiarChat()} className={classes.icon}>            
            <MicIcon />
          </IconButton>
          <IconButton onClick={()=>nuevoMensaje()} className={classes.icon}>            
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
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
)(MessageEditor);