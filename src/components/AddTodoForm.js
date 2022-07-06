import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";
import { IoAddSharp } from "react-icons/io5";
import propTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  let [todoTitle, setTodoTitle] = useState("");

  AddTodoForm.propTypes = {onAddTodo: propTypes.func}

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);

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
