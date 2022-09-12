import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";

// const REACT_APP_AIRTABLE_BASE_ID = "app8D5JMgzKnuJTzw";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'https://api.airtable.com/v0/'
  const table = 'Default'

  
  useEffect(() => {
    fetch(`${baseUrl}${process.env.REACT_APP_AIRTABLE_BASE_ID}/${table}?sort[0][field]=Title&sort[0][direction]=asc`
      ,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        const dataRecords = data.records;
          console.log(dataRecords);
        const sortByTitle = dataRecords.sort((objectA,objectB ) => {
          // console.log(objectA.Title)
          if (objectA.fields.Title < objectB.fields.Title) {
                        return -1;
                      }
                      if (objectA.fields.Title > objectB.fields.Title) {
                        return 1;
                      } else {
                        return 0;
                      }
                    



        })
        console.log(sortByTitle)
  
          setTodoList(dataRecords);
          setIsLoading(false);
        });
    
  }, []);

  
  

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);






  const addTodo = (newTodo) => {
 

    fetch(`${baseUrl}${process.env.REACT_APP_AIRTABLE_BASE_ID}/${table}`
    ,
    {
      method: 'Post',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
       'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        records: [
          {
            fields: {
              Title: newTodo.title
            }
          }
        ]
      })
    }
  ).then((response) => {
    return response.json();
  }).then((data) => {
    // data.records = the records you just added to airtable
    const newTodoList = [...todoList, ...data.records]
    setTodoList(newTodoList); // we need to append those records to our todo list
});
  };

  const removeTodo = (id) => {
    
    // localStorage.removeItem("name of the item", JSON.stringify(todoList))

    fetch(`${baseUrl}${process.env.REACT_APP_AIRTABLE_BASE_ID}/${table}?records[]=${id}`
    ,
    {
  method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
     
      },
      
      
    }
  ).then((response) => {
    return response.json();
  }).then((data) => {
   
   
    setTodoList(todoList.filter((todo) => todo.id !== id));
})


  };



  






  // const load = "Loading....";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <header className={style.Heading}>
                <h1>To-do List</h1>
              </header>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList}  onRemoveTodo={removeTodo} />
              )}

              
            </>
          }
        />
        <Route
          path="/new"
          element={
            <header>
              <h1>New Todo List</h1>
            </header>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

