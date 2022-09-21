import classes from "./MovieItem.module.css";
import Link from "./UI/Link";
import { useContext } from "react";
import themeContext from "../context/ThemeContext/theme-context";

const MovieItem = (props) => {
  const theme = useContext(themeContext);

  if (props.news) {
    // destructure props
    const { title, abstract, byline, url } = props.news;

    // fallback for an empty object - error in their API
    let img;
    if (props.news.multimedia === null) {
      img =
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
    }

    if (props.news.multimedia) {
      img = props.news.multimedia[0].url;
    }

    // transform date
    let date = props.news.updated_date.split("").slice(0, 10).join("");

    return (
      <li
        className={`${classes.article}`}
        style={{
          backgroundColor: theme.isDarkTheme ? theme.darkTheme.cards : "",
          color: theme.isDarkTheme ? theme.darkTheme.logoText : "",
        }}
      >
        <img className={classes.cover} src={img} alt="movie-img" />
        <div className={classes.details}>
          <h3>{title}</h3>
          <p>{abstract}</p>
          <span>{date}</span>
        </div>
        <div className={`${classes["hover-overlay"]}`}>
          <Link href={url} className={theme.isDarkTheme && "dark"}>
            Read More
          </Link>
        </div>
        <span className={classes["read-later__icon"]} title="Add to read later">
          <i class="fab fa-readme"></i>
        </span>
      </li>
    );
  }

  return (
    <li className={classes.skeleton}>
      <div className={classes["skeleton-cover"]}></div>
    </li>
  );
};

export default MovieItem;
