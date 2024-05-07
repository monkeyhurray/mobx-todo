import React from "react";

export interface ITodoContext {
  id: number;
  content: string;
  checked: boolean;
}

export interface ITodoItem extends ITodoContext {
  removeButtonHandler: (e: React.MouseEvent) => void;
  checkContentHandler: (e: React.MouseEvent) => void;
}

export interface ItodoStore {
  todoList: ITodoContext[];
  increaseId: number;

  addContent: (content: string) => void;
  removeContent: (id: number) => void;
  toggleCheck: (id: number) => void;
}
