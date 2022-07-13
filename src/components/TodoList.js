import React, {useState} from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css";
import propTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo,  }) => {
  // const [data, setData] = useState([]); 
  // const [toggle, setToggle] = useState(false); 

 

  // const onoggleSort = (props) => {
  //     const newToggle = !toggle;
  //     setToggle(newToggle);
  //     setData((preData) =>
  //       preData.sort((a, b) => {
  //         return newToggle
  //           ? a.fields.Title - b.fields.Title
  //           : b.fields.Title - a.fields.Title;
  //     }))
  //     setToggle(data);
    
  // }

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
            // date={"april 19th"} //used to illustrate the connection between files and use of props
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
    </div>
  );
};

export default TodoList;
