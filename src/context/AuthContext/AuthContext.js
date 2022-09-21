import AuthContext from "./auth-context";
import { useReducer } from "react";

// default state
const defaultState = {
  isAuth: false,
  userInfo: {
    displayName: "",
    email: "",
    accessToken: "",
  },
};

// reducer function
const authContextReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        isAuth: true,
        userInfo: {
          ...state.userInfo,
          displayName: action.payload.displayName,
          email: action.payload.email,
          accessToken: action.payload.accessToken,
        },
      };
    }
    case "LOG_OUT": {
      return {
        userInfo: { ...state.userInfo },
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [authState, dispatchAuthState] = useReducer(
    authContextReducer,
    defaultState
  );

  const loginHandler = (userInfo) => {
    dispatchAuthState({ type: "LOG_IN", payload: userInfo });
  };

  // data provided to the entire app
  const value = { authState, loginHandler };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
