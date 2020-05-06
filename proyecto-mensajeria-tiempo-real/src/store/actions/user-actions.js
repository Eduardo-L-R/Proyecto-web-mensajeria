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

export const setCurrentClear = (stateToClear) => {
  if(stateToClear === "clearRegister"){
    return {type: "CLEAR_REGISTER"}
  }
  else if(stateToClear === "clearLogin"){
    return {type: "CLEAR_LOGIN"}
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
    ).
    catch(function(error) {
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
