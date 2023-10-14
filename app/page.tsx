"use client";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

export default function Home() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };
  const addTodo: MouseEventHandler<HTMLButtonElement> = () => {
    if (text !== "") {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: Math.random(),
            label: text,
            isDone: false,
          },
        ];
      });
      setText("");
    }

    return;
  };

  const ListItem: FC<{
    todo: Todo;
    toggle: ChangeEventHandler<HTMLInputElement>;
  }> = ({ todo, toggle }) => {
    return (
      <label className="flex items-center gap-x-2">
        <input
          type="checkbox"
          value={todo.id}
          checked={todo.isDone}
          onChange={toggle}
        />
        <span>{todo.label}</span>
      </label>
    );
  };

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">To do</h1>
      <div className="flex gap-x-2">
        <input
          value={text}
          type="text"
          className="border border-black"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border border-black shrink-0 px-2"
          onClick={addTodo}
          disabled={text === ""}>
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <ListItem todo={todo} toggle={toggle} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
