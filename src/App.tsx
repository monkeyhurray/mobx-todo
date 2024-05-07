import React from "react";
import StoreContext from "./contexts/stores";
import TodoStore from "./stores/TodoStore";

import Todo from "./pages/Todo";
import "./App.css";

function App() {
  return (
    <StoreContext.Provider value={new TodoStore()}>
      <Todo />
    </StoreContext.Provider>
  );
}

export default App;
