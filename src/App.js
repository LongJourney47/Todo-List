import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

// const App = () => {
//   const [newTodo, setNewTodo] = useState("");

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <AddTodoForm onAddTodo={setNewTodo} />
//       <p>{newTodo}</p>
//       <TodoList />
//     </div>
//   );
// };

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    // console.log(newTodo);
  };

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{addTodo}</p> */}
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
