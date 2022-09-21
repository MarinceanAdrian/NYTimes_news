import classes from "./About.module.css";
import themeContext from "../../context/ThemeContext/theme-context";
import { useContext } from "react";
import Footer from "../UI/Footer";

const About = () => {
  const theme = useContext(themeContext);
  console.log('About', theme.isDarkTheme);
  const customClasses = [classes.about, theme.isDarkTheme ? classes.darken : ''].join(' ');
  return (
    <>
    <div className={customClasses}>
      <h2>Top NY Times News App</h2>
      <span>Version 1.0.0</span>
    </div>
    <Footer />
    </>
  );
};

export default About;
