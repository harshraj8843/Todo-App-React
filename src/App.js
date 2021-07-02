import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Todo from "./components/Todo";
import Done from "./components/Done";
import Add from "./components/Add";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// creating global context
export const todo_data = React.createContext();

function App() {
  // todo list
  const [todos, setTodos] = React.useState([
    {
      title: "hii1",
      last_date: "2002-01-01",
    },
    {
      title: "hii2",
      last_date: "2002-01-01",
    },
  ]);

  // done list
  const [dones, setDones] = React.useState([]);

  return (
    <todo_data.Provider
      value={{
        todos: todos,
        setTodos: setTodos,
        dones: dones,
        setDones: setDones,
      }}
    >
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/done">
            <Done />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
      </Router>
    </todo_data.Provider>
  );
}

export default App;
