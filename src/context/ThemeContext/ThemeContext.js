import { useState } from "react";
import ThemeContext from "./theme-context";
import useToggle from "../../hooks/useToggle";

const ThemeContextProvider = (props) => {
  const [isDarkTheme, darkThemeHandler] = useToggle(false);

  const value = {
    darkThemeHandler,
    isDarkTheme,
    darkTheme: {
      body: "#1E2021",
      cards: "#181A1B",
      logoText: "#CECAC4",
      logoBackground: "#1E2021",
      text: "whitesmoke",
      headerBg: "#30200b"
    }
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
