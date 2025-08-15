'use client'

import Link from 'next/link'

export default function TodoItem({ todo, onDelete, onToggleComplete }) {
  return (
    <li
      className="border p-4 rounded shadow flex justify-between items-center bg-white"
    >
   
      <span
        onClick={() => onToggleComplete(todo.id)}
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.title}
      </span>

    
      <Link
        href={`/${todo.id}`}
        onClick={(e) => e.stopPropagation()} 
        className="text-blue-600 hover:underline ml-4"
      >
        Edit
      </Link>

     
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete(todo.id)
        }}
        className="text-red-500 hover:underline ml-4"
      >
        Delete
      </button>
    </li>
  )
}