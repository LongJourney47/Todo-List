import React, { useRef, useEffect } from "react";
import style from "./InputWithLabel.module.css";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
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
