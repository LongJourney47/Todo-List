import React, { useState } from "react";
import style from "./TodoListItem.module.css";
import { IoRemove } from "react-icons/io5";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  // might want to use a true or false since the if statement will check for that
  // const [toggle, setToggle] = useState(false);
  // const handleToggleChange = () => {
  //   // let toggleValue = event.target.value;
  //   // setToggle(toggleValue);
  //   setToggle(!toggle);
  // };

  return (
    <li className={style.ListItem}>
      {/* <input
        type="checkbox"
        className={style.checkBox}
        onClick={handleToggleChange}
      ></input> */}

      {todo.fields.Title}
      <button
        onClick={() => onRemoveTodo(todo.id)}
        className={style.RemoveButton}
      >
        <IoRemove size="1.5em" />
      </button>
    </li>
  );
};

export default TodoListItem;
