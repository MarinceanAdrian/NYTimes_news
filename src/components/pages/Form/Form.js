import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.css";
import { onAuthStateChanged } from "@firebase/auth";
import { signInWithFirebase } from "../../../firebase/firebase";
import AuthContext from "../../../context/AuthContext/auth-context";

const Form = () => {
  const authContext = useContext(AuthContext);

  let navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    const { displayName, email, accessToken } = await signInWithFirebase();
    authContext.loginHandler({ displayName, email, accessToken });
    // navigate back to home after authentication
    navigate("/", { replace: true });
  };

  return (
    <form className={classes.form}>
      <span className={classes["team__icon"]}>
        <i class="fas fa-users"></i>
      </span>
      <h2>Become a member!</h2>
      <div className={classes["form__control"]}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" disabled />
      </div>
      <div className={classes["form__control"]}>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" disabled />
      </div>
      <button
        onClick={signIn}
        type="button"
        className={classes["login-with-google-btn"]}
      >
        Sign In with Google
      </button>
    </form>
  );
};

export default Form;
