"use client";

import { deleteTodo, editTodo, toggleTodo } from "@/actions";
import { useState } from "react";
import { toast } from "sonner";

const TodoItem = ({
  title,
  id,
  done,
}: {
  title: string;
  id: number;
  done: boolean;
}) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const [todoData, setTodoData] = useState({ title, id, done });
  const [loading, setLoading] = useState(false);

  const showForm = () => {
    setShowUpdateForm((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);

    try {
      await editTodo(todoData.id, todoData.title);

      toast.success(`todo updated successfully`);
      setShowUpdateForm((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("error editing your todo");
    }
    setLoading(false);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    try {
      await deleteTodo(todoData.id);

      toast.success(`todo deleted successfully`);
      setLoading(false);
      setShowUpdateForm((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("error deleting your todo");
    }
  };

  const handleToggleTodo = async () => {
    setLoading(false);
    try {
      await toggleTodo(todoData.id);

      toast.success(`todo deleted successfully`);
      setLoading(false);
      setShowUpdateForm((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("error updating your todo");
    }
  };

  return (
    <li className="cursor-pointer">
      <div className="todo-title">
        <div className="flex gap-1 items-center">
          <input
            id={`todo-${id}`}
            type="checkbox"
            className="cursor-pointer peer todo"
            defaultChecked={done}
            onChange={handleToggleTodo}
          />
          <label
            htmlFor={`todo-${id}`}
            className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
          />

          <p className="title">{title}</p>
        </div>

        <div className="flex items-center gap-2 self-end" onClick={showForm}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
              />
              <path
                fill="currentColor"
                d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
              />
            </svg>
          </span>
          <p>Edit</p>
        </div>
      </div>

      {showUpdateForm && (
        <form className="w-full max-w-md flex gap-2 flex-col mt-2">
          <input
            required
            type="text"
            name="title"
            placeholder="name of the todo"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            value={todoData.title || ""}
            onChange={handleChange}
          />

          <div className="flex gap-1 justify-end">
            <button
              onClick={handleDelete}
              type="submit"
              className="del px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Delete
            </button>
            <button
              type="submit"
              disabled={loading}
              onClick={handleUpdate}
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </li>
  );
};

export default TodoItem;
