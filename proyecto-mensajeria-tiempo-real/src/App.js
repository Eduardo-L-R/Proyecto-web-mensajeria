import React from 'react';
import './App.css';
import SignIn from './components/iniciar-sesion/SignIn';
import SignUp from './components/registrarse/SignUp';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
