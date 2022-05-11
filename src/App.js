import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

// const useSemiPersistentState = () => {
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem("savedTodoList")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
// };

const App = () => {
  // const [todoList, setTodoList] = useSemiPersistentState();
  // const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem("savedTodoList")) || []
  // );
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        });
      }, 2000);
    })
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    // console.log(newTodo);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const load = "Loading....";
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{addTodo}</p> */}
      {isLoading ? (
        <p>{load}</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
};

export default App;
