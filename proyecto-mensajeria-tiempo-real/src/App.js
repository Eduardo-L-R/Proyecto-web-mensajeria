import React from 'react';
import './App.css';

//Componentes importados
import SignIn from './components/iniciar-sesion/SignIn';
import SignUp from './components/registrarse/SignUp';

//Dependencias de redux importadas
import { connect } from "react-redux";
import {
  setCurrentRegister,
  setCurrentLogin,
  register
} from "./store/actions/user-actions";


function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}


// Acciones y states de redux importadas
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    register: () => dispatch(register())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
