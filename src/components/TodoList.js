import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => {
  // console.log(props.todoList);
  // console.log(todo.id);
  return (
    <ul className={style.MainTodoList}>
      {todoList.map((todo) => {
        // console.log(item.id);
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            // date={"april 19th"} //used to illustrate the connection between files and use of props
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
