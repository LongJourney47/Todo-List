import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      {todo.fields.Title}
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;
