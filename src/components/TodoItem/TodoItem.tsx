import React from "react";
import { observer } from "mobx-react-lite";
import { ITodoItem } from "../../interface";

function TodoItem({
  id,
  content,
  checked,
  checkContentHandler,
  removeButtonHandler,
}: ITodoItem) {
  return (
    <li className="todo-item" data-id={id}>
      <button
        className={
          checked ? "todo-item-content todo-item-checked" : "todo-item-content"
        }
        onClick={(e) => checkContentHandler(e)}
      >
        {content}
      </button>
      <button
        className="todo-item-remove-button"
        onClick={(e) => removeButtonHandler(e)}
      >
        ❌
      </button>
    </li>
  );
}

export default observer(TodoItem);
