import { NextResponse } from "next/server";
import { getTodoById, updateTodo, deleteTodo } from "@/lib/todos";

export async function GET(_, { params }) {
  const todo = getTodoById(params.id);
  return todo ? NextResponse.json(todo) : NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PUT(req, { params }) {
  const updates = await req.json();
  updateTodo(params.id, updates);
  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(_, { params }) {
  deleteTodo(params.id);
  return NextResponse.json({ message: "Deleted" });
}
