import classes from "./Link.module.css";
const Link = (props) => {
  return (
    <a
      href={props.href}
      className={classes.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default Link;
