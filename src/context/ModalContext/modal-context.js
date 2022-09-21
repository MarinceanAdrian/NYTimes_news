import { createContext } from "react";

const modalContext = createContext({
  isActive: true,
  homeModal: true,
  authModal: false,
  modalTextBody: {
    title: "",
    body: "",
    btnText: "",
  },
  openModalAuthHanlder: () => {},
  openModalHomeHandler: () => {},
});

export default modalContext;
