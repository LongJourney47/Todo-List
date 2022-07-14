import React,{useState} from "react";
import style from "./TodoListItem.module.css";
import { IoRemove } from "react-icons/io5";
import propTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
 
const [complete,setComplete] = useState(false)

const onCompleteHandler = () => {


if (complete === true) {
  setComplete(false)
} else {
  setComplete(true)
}

}

  TodoListItem.propTypes = {todo: propTypes.object , onRemoveTodo: propTypes.func}
// console.log(todo)
  return (
    <li className={style.ListItem}  style={{
      textDecoration: complete ? 'line-through' : 'none',
    }}>
      <input type="checkbox"
     
      onClick={onCompleteHandler}
      ></input>

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
