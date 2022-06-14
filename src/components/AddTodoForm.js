import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel";
import style from "./AddTodoForm.module.css";
import { IoAddSharp } from "react-icons/io5";

const AddTodoForm = ({ onAddTodo }) => {
  let [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    // console.log(todoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    todoTitle = "";
  };

  return (
    <form className={style.TodoForm} onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title:
      </InputWithLabel>
      {/* <label htmlFor="todoTitle">Title: </label>
      <input
        className="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      ></input> */}

      <span>
        <button type="submit" className={style.AddButton}>
          {" "}
          <IoAddSharp size="1.5em" />
        </button>
      </span>
    </form>
  );
};

export default AddTodoForm;
