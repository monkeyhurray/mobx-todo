import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { ItodoStore } from "../../interface";

function TodoForm({ store }: { store: ItodoStore }) {
  const [content, setContent] = useState("");
  const { addContent } = store;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addContent(content);
    setContent("");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        className="todo-form-input"
        type="text"
        onChange={onChangeHandler}
        value={content}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default observer(TodoForm);
