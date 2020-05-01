import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import IniciarSession from './iniciar-sesion/SignIn';
import Registrarse from './registrarse/SignUp';
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
        </Switch>
    )
};

export default Enrutador;