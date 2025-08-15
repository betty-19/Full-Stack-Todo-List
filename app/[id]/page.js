"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ViewTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/todos/${id}`)
      .then(res => res.json())
      .then(data => setTodo(data));
  }, [id]);

  const handleEdit = async () => {
    await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    });
    router.push("/");
  };

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <input
        className="border rounded p-2 w-full"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        <span>Completed</span>
      </label>
      <button
        onClick={handleEdit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
