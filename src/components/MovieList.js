import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  if (props.news[0].created_date && !props.isLoading) {
    let newsItemList = props.news.map((news) => <MovieItem news={news} />);

    return (
      <div className={classes["movie-list--wrapper"]}>
        <ul className={classes["movie-list"]}>{newsItemList}</ul>
      </div>
    );
  }

  // first render, when the reviews are not fetched
  if (props.isLoading) {
    return (
      <div className={classes["movie-list--wrapper"]}>
        <ul className={classes["movie-list"]}>
          {props.news.map((item) => (
            <MovieItem loadingNews={item} key={item.uri} />
          ))}
        </ul>
      </div>
    );
  }
};

export default MovieList;
