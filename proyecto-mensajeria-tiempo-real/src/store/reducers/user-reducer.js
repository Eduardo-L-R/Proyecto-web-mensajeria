const INITIAL_STATE = {
    currentRegister: {},
    currentLogin: {email: "zniphers@gmail.com"},
    currentUser: {},
    currentContacts: null,
    currentContactMensaje: null,
    currentMensajes: null,
    currentEditingMessage: "",
  };
  
  const userReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SET_CURRENT_REGISTER":
        return {
          ...previousState,
          currentRegister: {
            ...previousState.currentRegister,
            [action.payload.name]: action.payload.value
          }
        };
      case "SET_CURRENT_LOGIN":
        return {
          ...previousState,
          currentLogin: {
            ...previousState.currentLogin,
            [action.payload.name]: action.payload.value
          }
        };
      case "SET_CURRENT_USER":
        return {
          ...previousState,
          currentUser: {
            Email: action.payload.Information.Email,
            Nombre: action.payload.Information.Nombre,
            PhotoURL: action.payload.Information.PhotoURL, 
          }
        };
      case "SET_USER_CONTACTS":
        return{
          ...previousState,
          currentContacts: action.payload
        };
      case "SET_USER_MESSAGES":
        return{
          ...previousState,
          currentMensajes: action.payload.messages,
          currentContactMensaje: action.payload.contacto
        };
      case "SET_EDITING_MESSAGE":
        return{
          ...previousState,
          currentEditingMessage: action.payload.message,
        };
      case "CLEAR_REGISTER":
        return {
          ...previousState,
          currentRegister: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }
        };
      case "CLEAR_LOGIN":
        return {
          ...previousState,
          currentLogin: {...previousState.currentLogin,
            // firstName: "",
            // lastName: "",
            // email: "",
            password: "",
          }
        };
      case "CLEAR_EDITING_MESSAGE":
        return {
          ...previousState,
          currentEditingMessage: "",
        };
      case "STORAGE_USER_INFO":
        return{
          ...previousState,
          currentLogin: action.payload
        };
      default:
        return previousState;
    }
  };
  
  export default userReducer;
  