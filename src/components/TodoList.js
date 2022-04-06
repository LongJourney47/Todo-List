import React from "react";
import TodoListItem from "./TodoListItem";

const todolist = [
  { id: "task01", title: "setup web environment" },
  { id: "task04", title: "complete assignment" },
  { id: "task03", title: "review & refactor" },
  { id: "task02", title: "follow instructions" },
];
const TodoList = () => {
  return (
    <ul>
      {todolist.map((item) => {
        // console.log(item.id);
        return (
          <TodoListItem key={item.id} props={item}>
            {" "}
          </TodoListItem>
        );
      })}
    </ul>
  );
};

export default TodoList;
