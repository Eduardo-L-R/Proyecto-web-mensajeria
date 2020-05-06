const INITIAL_STATE = {
    currentRegister: {},
    currentLogin: {}
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
      case "STORAGE_USER_INFO":
        return{
          ...previousState,
          currentLogin: action.payload
        }
      default:
        return previousState;
    }
  };
  
  export default userReducer;
  