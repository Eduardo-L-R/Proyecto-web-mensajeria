import React from 'react'
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SendIcon from '@material-ui/icons/Send';

import firebase from "firebase";
import { connect } from "react-redux";
import {
  setCurrentRegister,
  setCurrentLogin,
  setCurrentClear,
  setUser,
  setMessages,
  setEditingMessage,
  register,
  signIn,
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

function MessageEditor(props) {
  const classes = useStyles();

  function nuevoMensaje(){
    if(props.Mensajes !== null){
      firebase.firestore().collection(props.Nombre).doc(props.ContactoMensajes).update({
        [Object.keys(props.Mensajes).length+1]: [
          "right",
          "12:50",
          props.editingMessage
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
          props.editingMessage
        ]}
      )
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      props.setCurrentClear("clearEditingMessage");
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
          {/* <IconButton className={classes.icon}>            
            <EmojiIcon />
          </IconButton> */}
          <InputBase value={props.editingMessage} onChange={(e)=>props.setEditingMessage(e.target.value)} className={classes.input} multiline/>
          <IconButton onClick={()=>nuevoMensaje()} className={classes.icon}>            
            <SendIcon />
          </IconButton>
          <IconButton onClick={()=>limpiarChat()} className={classes.icon}>
            <DeleteForeverIcon />
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
    editingMessage: state.user.currentEditingMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    setCurrentClear: clean => dispatch(setCurrentClear(clean)),
    register: () => dispatch(register()),
    signIn: (callback) => dispatch(signIn(callback)),
    setUser: (informacion) => dispatch(setUser(informacion)),
    setEditingMessage: (mensajeNuevo) => dispatch(setEditingMessage(mensajeNuevo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageEditor);