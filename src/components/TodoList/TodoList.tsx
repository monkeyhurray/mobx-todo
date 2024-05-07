import React from "react";
import { observer } from "mobx-react-lite";

import { ItodoStore } from "../../interface";
import TodoItem from "../TodoItem";

function TodoList({ store }: { store: ItodoStore }) {
  const todoStore: ItodoStore = store;
  const { todoList, removeContent, toggleCheck } = todoStore;

  const removeButtonHandler = (e: React.MouseEvent) => {
    const removeButton = e.currentTarget as HTMLButtonElement;
    const parentElement = removeButton.parentElement as HTMLLIElement;
    const datasetId = parentElement.dataset.id;
    if (datasetId) {
      removeContent(Number(datasetId));
    }
  };

  const toggleCheckHandler = (e: React.MouseEvent) => {
    const contentButton = e.currentTarget as HTMLButtonElement;
    const parentElement = contentButton.parentElement as HTMLLIElement;
    const datasetId = parentElement.dataset.id;
    if (datasetId) {
      toggleCheck(Number(datasetId));
    }
  };

  return (
    <ul className="todo-list">
      {todoList.map(({ id, content, checked }) => (
        <TodoItem
          key={id}
          id={id}
          content={content}
          checked={checked}
          checkContentHandler={toggleCheckHandler}
          removeButtonHandler={removeButtonHandler}
        />
      ))}
    </ul>
  );
}

export default observer(TodoList);
