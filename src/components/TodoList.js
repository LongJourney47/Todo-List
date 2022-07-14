import React, {useState} from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css";
import propTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo,  }) => {
 

  TodoList.propTypes = {todoList: propTypes.array, onRemoveTodo: propTypes.func }

  return (
    <div className={style.listSection}>
      <span className={style.sortButton}>
       <button>Sort</button>
       </span>
       
      
    <ul className={style.MainTodoList}>
  
      {todoList.map((todo) => {
     
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
           
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
    </div>
  );
};

export default TodoList;
