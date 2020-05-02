import React from 'react';
import {Route, Switch} from 'react-router-dom'
import IniciarSession from './iniciar-sesion/SignIn';
import Registrarse from './registrarse/SignUp';
import Sidebar from './panel-inicio/sidebar/SideBar';
import ChatContainer from './panel-inicio/contenedor-chat/ChatContainer';
// import PanelDeInicio from './panel-inicio/'

export const Enrutador = ()=>{
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
                <Sidebar />
                <ChatContainer />
            </Route>
        </Switch>
    )
};

export default Enrutador;