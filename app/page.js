"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import TodoItem from "@/components/TodoItem";

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => { fetchTodos(); }, []);

  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  const toggleComplete = async (id, completed) => {
    await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed })
    });
    fetchTodos();
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <Link href="/add" className="text-blue-600 underline mb-4 inline-block">
        Add New Todo
      </Link>
      <ul className="space-y-3">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggleComplete={() => toggleComplete(todo.id, todo.completed)}
          />
        ))}
      </ul>
    </main>
  );
}
