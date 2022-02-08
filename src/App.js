import React from "react";

// react bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Todo component
import Todo from "./components/Todo";

// Done component
import Done from "./components/Done";

// Add component
import Add from "./components/Add";

// routing components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// creating global context
export const todo_data = React.createContext();

function App() {
  // default todo list
  const [todos, setTodos] = React.useState([
    {
      title: "hii",
      last_date: "2002-01-01",
    },
    {
      title: "there",
      last_date: "2002-01-02",
    },
  ]);

  // done list
  const [dones, setDones] = React.useState([]);

  return (
    // context provider
    <todo_data.Provider
      value={{
        // todo list
        todos: todos,

        // setTodo function
        setTodos: setTodos,

        // done list
        dones: dones,

        //setDone function
        setDones: setDones,
      }}
    >
      <Router basename="/todo-app-react">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* create new todo path */}
          <Route path="/add">
            <Add />
          </Route>

          {/* done path */}
          <Route path="/done">
            <Done />
          </Route>

          {/* home path or todo path */}
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
      </Router>
    </todo_data.Provider>
  );
}

export default App;
