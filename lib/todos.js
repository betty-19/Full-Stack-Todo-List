let todos = [
  { id: "1", title: "Learn Next.js API Routes", completed: false },
  { id: "2", title: "Style with Tailwind CSS", completed: true }
];

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  todos.push(todo);
}

export function updateTodo(id, updated) {
  todos = todos.map(t => (t.id === id ? { ...t, ...updated } : t));
}

export function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
}

export function getTodoById(id) {
  return todos.find(t => t.id === id);
}
