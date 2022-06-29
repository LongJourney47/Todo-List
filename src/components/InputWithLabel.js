import React, { useRef, useEffect } from "react";
import style from "./InputWithLabel.module.css";
import propTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  InputWithLabel.propTypes = {todoTitle: propTypes.string, handleTitleChange:propTypes.func, children:propTypes.string }
  return (
    <>
      <label htmlFor="todoTitle">
        {children}
        <input
          className={style.todoTitle}
          type="text"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
          ref={inputRef}
        ></input>
      </label>
    </>
  );
};

export default InputWithLabel;
