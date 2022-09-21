import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.clickHandler}
      className={`${classes.btn} ${
        props.dismissClass ? props.dismissClass : ""
      }`}
    >
      {props.displayText}
    </button>
  );
};

export default Button;
