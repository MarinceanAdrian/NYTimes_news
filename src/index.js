import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext/ThemeContext";
import AuthContextProvider from "./context/AuthContext/AuthContext";
import ModalContextProvider from "./context/ModalContext/ModalContext";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ThemeContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  rootElement
);
