import { useContext } from "react";
import { observer } from "mobx-react-lite";

import StoreContext from "../contexts/stores";
import { ItodoStore } from "../interface";
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Todo() {
  const todoStore: ItodoStore = useContext(StoreContext) as ItodoStore;

  return (
    <section className="todo">
      <Title text="TodoList" />
      <TodoForm store={todoStore} />
      <TodoList store={todoStore} />
    </section>
  );
}

export default observer(Todo);
