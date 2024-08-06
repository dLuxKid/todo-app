import { addTodo, getData, toggleTodo } from "@/actions";
import TodoItem from "@/component/TodoItem";
import Link from "next/link";

export default async function Home() {
  const todos = await getData();

  return (
    <main className="flex items-center justify-center gap-8 flex-col">
      <header className="flex self-start justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
      </header>
      <form className="flex gap-2 flex-col" action={addTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
      {todos && todos.length == 0 && (
        <p className="text-2xl text-slate-100 font-bold mt-12 w-full text-center">
          You currently have no todos create todos please
        </p>
      )}
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </main>
  );
}
