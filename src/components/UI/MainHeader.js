import classes from "./MainHeader.module.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext/theme-context";
import AuthContext from "../../context/AuthContext/auth-context";
import { Link } from "react-router-dom";

const MainHeader = () => {
  // theme context
  const { darkThemeHandler } = useContext(ThemeContext);
  const theme = useContext(ThemeContext);

  // auth context
  const authContext = useContext(AuthContext);

  // tweak the displayName
  let authenticatedUserName;
  if (authContext.authState.userInfo.displayName) {
    authenticatedUserName =
      authContext.authState.userInfo.displayName.split(" ")[0];
  }

  return (
    <header
      className={classes.header}
      style={{ background: theme.isDarkTheme && theme.darkTheme.headerBg }}
    >
      <button
        className={classes["dark__mode"]}
        onClick={darkThemeHandler}
        style={{
          background: theme.isDarkTheme ? "whitesmoke" : "black",
        }}
      >
        {theme.isDarkTheme ? "🌕" : "🌙"}
      </button>
      <h2 className={`${classes["header__title"]} ${classes.desktop}`}>
        <Link
          to="/"
          style={{
            background: theme.isDarkTheme && theme.darkTheme.logoBackground,
            color: theme.isDarkTheme && theme.darkTheme.text,
          }}
        >
          NY Times Top Stories
        </Link>
      </h2>
      <h2 className={`${classes["header__title"]} ${classes.mobile}`}>
        <Link
          to="/"
          style={{
            background: theme.isDarkTheme && theme.darkTheme.logoBackground,
            color: theme.isDarkTheme && theme.darkTheme.text,
          }}
        >
          NY
        </Link>
      </h2>
      {/* nav links */}
      <nav className={classes["header__nav"]}>
        <ul className={classes["header__nav--list"]}>
          <li className={classes["header__nav--list-item"]}></li>
          <li className={classes["header__nav--list-item"]}>
            <Link to="/readLater">Read Later</Link>
          </li>
          <li className={classes["header__nav--list-item"]}>
            <Link to="/about">About us</Link>
          </li>
          <li className={classes["header__nav--list-item"]}>
            <Link to="/auth">
              {authenticatedUserName
                ? `Welcome ${authenticatedUserName}!`
                : "Sign In"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
