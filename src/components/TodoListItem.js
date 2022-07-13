import React,{useState} from "react";
import style from "./TodoListItem.module.css";
import { IoRemove } from "react-icons/io5";
import propTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  // might want to use a true or false since the if statement will check for that
  // const [toggle, setToggle] = useState(false);
  // const handleToggleChange = () => {
 
  //   setToggle(!toggle);
  // };
const [complete,setComplete] = useState(false)

const onCompleteHandler = (props) => {
//  setComplete(true)
//  const style = {}
if (complete === true) {
  setComplete(false)
} else {
  setComplete(true)
}

// fetch(`${baseUrl}${process.env.REACT_APP_AIRTABLE_BASE_ID}/${table}`
//     ,
//     {
//       method: 'PATCH',
//       headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
//        'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({
//         records: [
//           {
//             fields: {
//               Title: newTodo.title
//             }
//           }
//         ]
//       })
//     }
//   )


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
