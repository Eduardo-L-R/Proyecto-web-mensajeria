import React from 'react';
import {Route, Switch} from 'react-router-dom'
import IniciarSession from './iniciar-sesion/SignIn';
import Registrarse from './registrarse/SignUp';
import Sidebar from './panel-inicio/sidebar/SideBar';
import ChatContainer from './panel-inicio/contenedor-chat/ChatContainer';
// import PanelDeInicio from './panel-inicio/'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexFlow: "row wrap"
  }
})

export const Enrutador = ()=>{
  const classes = useStyle();
    return(
        <Switch>
            <Route exact path="/">
                <IniciarSession />
            </Route>
            <Route path="/Inicio">
                <IniciarSession />
            </Route>
            <Route path="/Registro">
                <Registrarse />
            </Route>
            <Route path="/Panel-Inicio">
              <div className={classes.container}>
                <Sidebar />
                <ChatContainer />
              </div>
            </Route>
        </Switch>
    )
};

export default Enrutador;