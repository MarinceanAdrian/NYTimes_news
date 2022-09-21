import { useReducer } from "react";
import modalContext from "./modal-context";
import ModalContext from "./modal-context";

const OPEN_AUTH_MODAL = "OPEN_AUTH_MODAL";
const OPEN_HOME_MODAL = "OPEN_HOME_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const defaultState = {
  isActive: false,
  homeModal: false,
  authModal: false,
  modalTextBody: {
    title: "",
    body: "",
    btnText: "",
  },
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_HOME_MODAL: {
      return {
        ...state,
        isActive: true,
        homeModal: true,
        modalTextBody: {
          ...state.modalTextBody,
          title: "Stay updated!",
          body: "Try our premium offer and have the latest news in your mail inbox every day",
          btnText: "Dismiss",
        },
      };
    }
    case OPEN_AUTH_MODAL: {
      return {
        ...state,
        isActive: true,
        homeModal: false,
        authModal: true,
        modalTextBody: {
          ...state.modalTextBody,
          title: "Sign Up",
          body: "Sign up in order to see other type of news",
          btnText: "Sign Up",
        },
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isActive: false,
        authModal: false,
        homeModal: false,
        modalTextBody: { ...state.modalTextBody },
      };
    }
    default:
      return state;
  }
};

const ModalContextProvider = (props) => {
  const [modalState, dispatchModalState] = useReducer(
    modalReducer,
    defaultState
  );

  const openModalAuthHanlder = () => {
    console.log(modalState);
    dispatchModalState({ type: OPEN_AUTH_MODAL });
  };

  const openModalHomeHandler = () => {
    dispatchModalState({ type: OPEN_HOME_MODAL });
  };

  const closeModalHandler = () => {
    dispatchModalState({ type: CLOSE_MODAL });
  };

  const value = {
    ...modalState,
    openModalAuthHanlder,
    openModalHomeHandler,
    closeModalHandler,
  };
  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
