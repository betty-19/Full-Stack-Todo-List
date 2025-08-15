'use client'

import { useState } from 'react'
import Link from 'next/link'
import TodoItem from './TodoItem'

export default function TodoList({ todos }) {
  const [todoList, setTodoList] = useState(todos)

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <Link href="/add" className="text-blue-600 underline mb-4 inline-block">Add New Todo</Link>
      <ul className="space-y-3">
        {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  )
}
