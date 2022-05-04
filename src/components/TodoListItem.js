import React from "react";

const TodoListItem = ({ title, onRemoveTodo, todo }) => {
  return (
    <li>
      {title}
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
