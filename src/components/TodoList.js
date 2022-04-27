import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  // console.log(props.todoList);
  // console.log(todo.id);
  return (
    <ul>
      {todoList.map((todo) => {
        // console.log(item.id);
        return (
          <TodoListItem
            key={todo.id}
            title={todo.title}
            // date={"april 19th"} //used to illustrate the connection between files and use of props
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
