import React, { useState } from "react";

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
    <form className="todoForm" onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        className="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      ></input>
      <span>
        <button type="submit">Add</button>
      </span>
    </form>
  );
};

export default AddTodoForm;
