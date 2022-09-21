import { createContext } from "react";

const auth = createContext({
  isAuth: false,
  userInfo: {
    displayName: "",
    email: "",
    accessToken: "",
  },
});

export default auth;
