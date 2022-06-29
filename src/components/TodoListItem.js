import React, { useState } from "react";
import style from "./TodoListItem.module.css";
import { IoRemove } from "react-icons/io5";
import propTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  // might want to use a true or false since the if statement will check for that
  // const [toggle, setToggle] = useState(false);
  // const handleToggleChange = () => {
 
  //   setToggle(!toggle);
  // };
  TodoListItem.propTypes = {todo: propTypes.object , onRemoveTodo: propTypes.func}

  return (
    <li className={style.ListItem}>
      

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
