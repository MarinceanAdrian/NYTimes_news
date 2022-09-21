import { useCallback } from "react";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import modalContext from "../../../context/ModalContext/modal-context";
import ModalContext from "../../../context/ModalContext/modal-context";
import Button from "../Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDisplay}></div>;
};

const Modal = (props) => {
  return (
    <div className={classes["modal-wrapper"]}>
      <div className={classes.modal}>
        {props.children}
        <div className={classes["modal__actions"]}>
          <Button
            displayText="Dismiss"
            type="text"
            clickHandler={props.onDisplay}
            dismissClass={true}
          />
          {props.authModal && !props.homeModal && (
            <Button
              displayText="Sign Up"
              type="text"
              clickHandler={props.onSignUp}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ModalOutput = () => {
  const modalCtx = useContext(ModalContext);

  let navigate = useNavigate();

  const signUpHandler = useCallback(() => {
    navigate("/auth", { replace: true });
    modalCtx.closeModalHandler();
  }, []);

  // render modal and backdrop
  const modal = modalCtx.isActive && (
    <>
      <Modal
        onDisplay={() => modalCtx.closeModalHandler()}
        homeModal={modalCtx.homeModal}
        authModal={modalCtx.authModal}
        onSignUp={signUpHandler}
      >
        <h2>{modalCtx.modalTextBody.title}</h2>
        <p>{modalCtx.modalTextBody.body}</p>
        {/* conditionally render the email input */}
        {modalCtx.homeModal && (
          <div style={{width: '13rem'}}>
            
          <input type="email" placeholder="yourEmail@email.com" />
          </div>
        )}
      </Modal>
      <Backdrop onDisplay={() => modalCtx.closeModalHandler()} />
    </>
  );

  return modal;
};

export default ModalOutput;
