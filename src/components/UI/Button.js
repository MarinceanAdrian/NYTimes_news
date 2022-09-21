import classes from "./Button.module.css";

const Button = (props) => {
  console.log('Button', props);
  return (
    <button
      type={props.type}
      onClick={props.clickHandler}
      className={`${classes.btn} ${
        props.dismissClass ? classes.dismissBtn : ""
      }`}
    >
      {props.displayText}
    </button>
  );
};

export default Button;
