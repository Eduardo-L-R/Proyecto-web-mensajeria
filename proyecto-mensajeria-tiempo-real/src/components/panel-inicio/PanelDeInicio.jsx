import React, {useEffect, useState} from 'react'
import ChatContainer from './contenedor-chat/ChatContainer'
import SideBar from './sidebar/SideBar'
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase";
import { connect } from "react-redux";

import {
  setCurrentRegister,
  setCurrentLogin,
  setUser,
  setContacts,
  register,
  signIn,
} from "../../store/actions/user-actions";
import NewConversation from './sidebar/Componentes-Sidebar/NewConversation';

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexFlow: "row wrap"
  }
});

function PanelDeInicio(props){

  useEffect(async () => {
    await firebase.firestore().collection("emailUsuarios").doc(props.currentEmail).get().then(async function(doc) {
      if (doc.exists) {
          await firebase.firestore().collection("Usuarios").doc(doc.data().Nombre).onSnapshot(function(doc2) {
            if(doc2.exists){props.setUser(doc2.data());}
            else{alert("Problemas de conexion ")}
          });
          await firebase.firestore().collection(doc.data().Nombre).doc("Contactos").onSnapshot((doc3)=>{
            props.setContacts(doc3.data());
          }).catch(function(error) {
              console.log("Error getting document:", error);
          }); 
      } else {            
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    }); 

  }, []);
  
  const classes = useStyle();
  const [open, setOpen] = useState(false)
  
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.container}>
      <SideBar 
        toggle={handleToggle}
      />
      <NewConversation 
        open={open} 
        toggle={handleToggle}
      />
      <ChatContainer />
    </div>
  )
}



// Acciones y states de redux importadas
const mapStateToProps = state => {
  return {
    user: state.user,
    currentEmail: state.user.currentLogin.email,
    Nombre: state.user.currentUser.Nombre,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    register: () => dispatch(register()),
    signIn: (callback) => dispatch(signIn(callback)),
    setUser: (informacion) => dispatch(setUser(informacion)),
    setContacts: (informacion) => dispatch(setContacts(informacion))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelDeInicio);
