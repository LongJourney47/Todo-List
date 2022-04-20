import React from "react";
import TodoListItem from "./TodoListItem";

// const todolist = [
//   { id: "task01", title: "setup web environment" },
//   { id: "task04", title: "complete assignment" },
//   { id: "task03", title: "review & refactor" },
//   { id: "task02", title: "follow instructions" },
// ];
// const TodoList = () => {
//   // let todolist = props.TodoList;
//   return (
//     <ul>
//       {todolist.map((item) => {
//         // console.log(item.id);
//         return (
//           <TodoListItem key={item.id} props={item}>
//             {" "}
//           </TodoListItem>
//         );
//       })}
//     </ul>
//   );
// };

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
