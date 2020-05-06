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
    auth.signInWithEmailAndPassword(email, password).then(
      alert("autentificado correctamente")
    ).
    catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        var information = {
          // "displayName": displayName,
          "email": email,
          // "emailVerified": emailVerified,
          // "photoURL": photoURL,
          // "isAnonymous": isAnonymous,
          // "uid": uid,
          // "providerData": providerData,
        };
        dispatch(userInformation(information));
        callback("/Panel-inicio");
        // ...
      } else {
        // User is signed out.
        // ...
        dispatch(setCurrentClear("clearLogin"));
        alert("Error al autentificar");
      }
    });

  };
  
};

export const register = () => {
  return (dispatch, getState) => {
    let { email, password } = getState().user.currentRegister;
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
    dispatch(setCurrentClear("clearRegister"));
  };
};
