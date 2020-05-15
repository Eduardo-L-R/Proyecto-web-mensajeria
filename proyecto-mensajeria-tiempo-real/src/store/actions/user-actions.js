import auth from "../../firebase/config-utils";


export const setCurrentRegister = event => {
  return {
    type: "SET_CURRENT_REGISTER",
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const setCurrentLogin = event => {
  return {
    type: "SET_CURRENT_LOGIN",
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const setUser = information => {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      Information : information,
    }
  };
};

export const setContacts = (contacts) => {
  return {type : "SET_USER_CONTACTS",
          payload: contacts}; 
}

export const setMessages = (messages,contacto) => {
  return {type : "SET_USER_MESSAGES",
          payload: {messages,contacto}}; 
}

export const setEditingMessage = (message) => {
  return {type : "SET_EDITING_MESSAGE",
          payload: {message}}; 
}

export const setCurrentClear = (stateToClear) => {
  if(stateToClear === "clearRegister"){
    return {type: "CLEAR_REGISTER"}
  }
  else if(stateToClear === "clearLogin"){
    return {type: "CLEAR_LOGIN"}
  }
  else if(stateToClear === "clearEditingMessage"){
    return {type: "CLEAR_EDITING_MESSAGE"}
  }
}

export const userInformation = (information) => {
  return {type : "STORAGE_USER_INFO",
          payload: information}; 
}

export const signIn = (callback) => {
  return (dispatch, getState) => {
    let { email, password } = getState().user.currentLogin;
    auth.signInWithEmailAndPassword(email, password).then(() =>
      {alert("autentificado correctamente");
      callback("/Panel-inicio");
      auth.onAuthStateChanged(function(user) {
        if (user) {
          var email = user.email;
          var information = {
            "email": email,
          };
          dispatch(userInformation(information));
        } else {
          // User is signed out.
        }
        });
      }
    ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
      dispatch(setCurrentClear("clearLogin"));
      // ...
    });
  };
};

export const register = (callback) => {
  return (dispatch, getState) => {
    let { email, password } = getState().user.currentRegister;
    auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
      alert("Registrado exitosamente");
      callback("/");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
      dispatch(setCurrentClear("clearRegister"));
    });
    
  };
};
