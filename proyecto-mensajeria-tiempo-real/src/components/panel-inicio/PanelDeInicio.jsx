import React, {useEffect} from 'react'
import ChatContainer from './contenedor-chat/ChatContainer'
import SideBar from './sidebar/SideBar'
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase";
import { connect } from "react-redux";

export function PanelDeInicio(props){

  useEffect(() => {
      firebase.firestore().collection("emailUsuarios").doc(props.currentEmail).get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log("Informacion buscada ", doc.data().Nombre);
        } else {            
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    }); 
  }, []);

/*     MantenerConectadoChats=(elementosUser)=>{
      let infoJugador={}
      console.log(elementosUser);
      firebase.firestore().collection("Usuarios").doc(elementosUser).onSnapshot(function(doc) {
        if(doc.exists){infoJugador = doc.data(); console.log(infoJugador);}
        else{alert("Problemas de conexion, verficar nombre contrincante")}
      });
    } */
  
    const useStyle = makeStyles({
      container: {
        display: "flex",
        flexFlow: "row wrap"
      }
    });
    const classes = useStyle();

    return (
      <div className={classes.container}>
        <SideBar />
        <ChatContainer />
      </div>
    )
  }



// Acciones y states de redux importadas
const mapStateToProps = state => {
  return {
    user: state.user,
    currentEmail: state.user.currentLogin.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    // setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    // register: () => dispatch(register()),
    // signIn: (callback) => dispatch(signIn(callback))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelDeInicio);
