import { useContext } from "react";
import classes from "./Footer.module.css";
import themeContext from "../../context/ThemeContext/theme-context";

const Footer = () => {
  const theme = useContext(themeContext);
  return (
    <footer
      className={classes.footer}
      style={{ background: theme.isDarkTheme && "gray" }}
    >
      <p>&copy; Self-tauhgt programmers community</p>
      <div className={classes.social}>
        <span><i class="fa-brands fa-twitter"></i></span>
        <span><i class="fa-brands fa-facebook"></i></span>
        <span><i class="fa-brands fa-instagram"></i></span>
        <span><i class="fa-brands fa-tiktok"></i></span>
      </div>
    </footer>
  );
};

export default Footer;
