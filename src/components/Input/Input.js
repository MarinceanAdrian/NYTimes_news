import { useState, useContext } from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import classes from "./Input.module.css";

const Input = (props) => {
  const selectNewsTypeHandler = (e) => {
    const selectedNews = e.target.value
    props.onSelectNewNewsType(selectedNews);
  };

  return (
    <div className={classes["search-input"]}>
      <select
        className={classes["select__news"]}
        onChange={selectNewsTypeHandler}
        value={props.value}
      >
        <option value="world">World</option>
        <option value="arts">Arts</option>
        <option value="home">Domestic</option>
        <option value="science">Science</option>
        <option value="us">US</option>
      </select>
    </div>
  );
};

export default Input;
