import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [userInput, setUserInput] = useState("");

  const titleChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    // const todoTitle = event.target;
    const userData = {
      //   ...event,
      title: userInput,
    };
    console.log(userData);

    setUserInput("");
    props.onAddTodo(userData);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        id="todoTitle"
        type="text "
        onChange={titleChangeHandler}
        value={userInput}
      ></input>
      <span>
        <button type="submit">Add</button>
      </span>
    </form>
  );
};

export default AddTodoForm;
