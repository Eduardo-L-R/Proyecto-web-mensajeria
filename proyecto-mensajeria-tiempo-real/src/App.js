import React from 'react';
import './App.css';

//Componentes importados
// import SignIn from './components/iniciar-sesion/SignIn';
// import SignUp from './components/registrarse/SignUp';
// import Sidebar from './components/panel-inicio/sidebar/SideBar';
// import ChatContainer from './components/panel-inicio/contenedor-chat/ChatContainer';
import {Enrutador} from './components/enrutador';

function App() {
  return (
    <div>
      <Enrutador />
    </div>
  );
}

export default App;
